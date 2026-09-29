import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { Faq, NamedServices } from '@/app/components/landing-client';
import { site } from '@/app/site-data';
import landing from '@/app/content/landing-pages.json';

type Block =
  | { t: 'eyebrow' | 'h1' | 'h2' | 'h3' | 'p'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'steps'; items: { label: string; text: string }[] }
  | { t: 'faq'; items: { q: string; a: string }[] }
  | { t: 'services'; names: string[] }
  | { t: 'cta'; label: string; url: string }
  | { t: 'card'; title: string; sub: string; eyebrow: string; items: string[] };

type Page = {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  testimonial: { author: string; quote: string } | null;
  blocks: Block[];
};

const pages = landing as unknown as Record<string, Page>;

export function landingMetadata(slug: string): Metadata {
  const page = pages[slug];
  return { title: { absolute: page.seoTitle }, description: page.seoDescription };
}

// A section starts at each eyebrow or heading; everything up to the next one belongs to it.
type Section = { eyebrow?: string; title?: string; level?: 'h2' | 'h3'; blocks: Block[] };

function splitSections(blocks: Block[]): Section[] {
  const sections: Section[] = [];
  // Reuse the open section when it only has an eyebrow so far (eyebrow followed by its heading).
  const open = (): Section => {
    const last = sections[sections.length - 1];
    if (last && !last.title && last.blocks.length === 0) return last;
    const fresh: Section = { blocks: [] };
    sections.push(fresh);
    return fresh;
  };
  for (const block of blocks) {
    if (block.t === 'eyebrow') {
      open().eyebrow = block.text;
    } else if (block.t === 'h2' || block.t === 'h3') {
      const s = open();
      s.title = block.text;
      s.level = block.t;
    } else {
      const last = sections[sections.length - 1];
      (last ?? open()).blocks.push(block);
    }
  }
  return sections;
}

const withLabel = (item: string) => {
  const m = item.match(/^([A-Z][A-Za-z' ]{1,28}): (.*)$/);
  return m ? (
    <>
      <strong>{m[1]}:</strong> {m[2]}
    </>
  ) : (
    item
  );
};

function renderBlocks(blocks: Block[], key: string) {
  const out: React.ReactNode[] = [];
  let cards: Extract<Block, { t: 'card' }>[] = [];
  const flushCards = (i: number) => {
    if (!cards.length) return;
    out.push(
      <div className="row justify-content-center" key={`${key}-cards-${i}`}>
        {cards.map((card) => (
          <div key={card.title} className={cards.length === 2 ? 'col-lg-6 mb-30' : 'col-lg-4 col-md-6 mb-30'}>
            <div className="landing-card">
              {card.eyebrow && <span className="landing-eyebrow">{card.eyebrow}</span>}
              <h4>{card.title}</h4>
              {card.sub && <div className="landing-card-sub">{card.sub}</div>}
              <ul>
                {card.items.map((item) => (
                  <li key={item}>{withLabel(item)}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>,
    );
    cards = [];
  };

  blocks.forEach((block, i) => {
    if (block.t === 'card') {
      cards.push(block);
      return;
    }
    flushCards(i);
    const k = `${key}-${i}`;
    switch (block.t) {
      case 'p':
        out.push(<p key={k}>{block.text}</p>);
        break;
      case 'ul':
        out.push(
          <ul key={k} className="list-style-one landing-list my-20">
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>,
        );
        break;
      case 'steps':
        out.push(
          <ol key={k} className="landing-steps">
            {block.items.map((step) => (
              <li key={step.label}>
                <strong>{step.label}</strong>
                <span>{step.text}</span>
              </li>
            ))}
          </ol>,
        );
        break;
      case 'faq':
        out.push(<Faq key={k} items={block.items} />);
        break;
      case 'services':
        out.push(<NamedServices key={k} names={block.names} />);
        break;
      case 'cta':
        out.push(
          <a key={k} className="theme-btn mt-15" href={block.url}>
            {block.label} <i className="far fa-long-arrow-right"></i>
          </a>,
        );
        break;
    }
  });
  flushCards(blocks.length);
  return out;
}

export function LandingPage({ slug, crumb = 'Services' }: { slug: string; crumb?: string }) {
  const page = pages[slug];
  const blocks = page.blocks;
  const eyebrow = blocks[0]?.t === 'eyebrow' ? (blocks[0] as { text: string }).text : '';
  const h1 = (blocks.find((b) => b.t === 'h1') as { text: string }).text;
  const h1Index = blocks.findIndex((b) => b.t === 'h1');
  const heroEnd = blocks.findIndex((b, i) => i > h1Index && b.t !== 'p' && b.t !== 'cta');
  const hero = blocks.slice(h1Index + 1, heroEnd < 0 ? blocks.length : heroEnd);
  const heroParas = hero.filter((b) => b.t === 'p') as { t: 'p'; text: string }[];
  const heroCtas = hero.filter((b) => b.t === 'cta') as { t: 'cta'; label: string; url: string }[];
  const rest = blocks.slice(heroEnd < 0 ? blocks.length : heroEnd);
  const sections = splitSections(rest);
  const lastBlock = blocks[blocks.length - 1];

  return (
    <SiteShell header="three" footerClassName="">
      <section
        className="page-banner text-white py-190 rpy-130"
        style={{ backgroundImage: 'url(/assets/images/banner/banner.jpg)' }}
      >
        <div className="container">
          <div className="banner-inner">
            <h1 className="page-title landing-title wow fadeInRight delay-0-2s">{h1}</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center wow fadeInLeft delay-0-2s">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/services">{crumb}</a>
                </li>
                <li className="breadcrumb-item active">{h1.replace(/ in Stafford, TX$/, '')}</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="landing-intro pt-100 rpt-70 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10">
              {eyebrow && <span className="landing-eyebrow">{eyebrow}</span>}
              {heroParas[0] && <p className="landing-lead">{heroParas[0].text}</p>}
              {heroParas.slice(1).map((p) => (
                <p key={p.text}>{p.text}</p>
              ))}
              <div className="landing-ctas">
                {heroCtas.map((cta, i) => (
                  <a key={cta.label} className={`theme-btn${i > 0 ? ' style-four' : ''}`} href={cta.url}>
                    {cta.label} <i className="far fa-long-arrow-right"></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {page.testimonial && (
        <section className="landing-quote bg-black text-white py-60">
          <div className="container text-center">
            <p className="landing-quote-text">“{page.testimonial.quote}”</p>
            <div className="landing-quote-author">
              <span className="stars" aria-label="5 out of 5 stars">
                ★★★★★
              </span>{' '}
              {page.testimonial.author}
            </div>
          </div>
        </section>
      )}

      {sections.map((section, i) => (
        <section key={i} className={`landing-section py-80${i % 2 ? ' bg-lighter-two' : ''}`}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                {section.eyebrow && <span className="landing-eyebrow">{section.eyebrow}</span>}
                {section.title &&
                  (section.level === 'h3' ? (
                    <h3 className="landing-heading mb-20">{section.title}</h3>
                  ) : (
                    <h2 className="landing-heading mb-20">{section.title}</h2>
                  ))}
                {renderBlocks(section.blocks, `s${i}`)}
              </div>
            </div>
          </div>
        </section>
      ))}

      {lastBlock.t !== 'cta' && (
        <section className="landing-cta bg-yellow text-white py-60">
          <div className="container text-center">
            <a className="theme-btn style-four" href="/services#book">
              book online <i className="far fa-long-arrow-right"></i>
            </a>{' '}
            <a className="theme-btn style-four" href={site.phoneHref}>
              call {site.phone} <i className="far fa-phone"></i>
            </a>
          </div>
        </section>
      )}
    </SiteShell>
  );
}
