import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { Faq, NamedServices } from '@/app/components/landing-client';
import { ReviewCards } from '@/app/components/reviews-ui';
import { landingMeta } from '@/app/content/landing-meta';
import { photoUrl } from '@/app/content/photos';
import { reviewsFor } from '@/app/content/reviews';
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

const LASTS = /^(How long it lasts|How long it holds|Wear time|Timeline to mature)\s*:\s*(.*)$/i;
const BEST = /^Best for\s*:\s*(.*)$/i;

// "At a glance" rows come straight from the page's own comparison cards (how long it lasts, who it is for).
function buildGlance(blocks: Block[]) {
  const rows: { title: string; lasts: string; best: string }[] = [];
  for (const b of blocks) {
    if (b.t !== 'card') continue;
    const lasts = b.items.map((i) => i.match(LASTS)?.[2]).find(Boolean) ?? '';
    const best = b.items.map((i) => i.match(BEST)?.[1]).find(Boolean) ?? '';
    if (lasts || best) rows.push({ title: b.title, lasts, best });
  }
  return rows;
}

export function LandingPage({ slug, crumb = 'Services' }: { slug: string; crumb?: string }) {
  const page = pages[slug];
  const meta = landingMeta[slug];
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
  const glance = buildGlance(blocks);
  const reviews = reviewsFor(meta.topics, 2, ['kevin-joseph']);
  const faq = blocks.find((b) => b.t === 'faq') as Extract<Block, { t: 'faq' }> | undefined;
  const serviceName = h1.replace(/ in Stafford, TX$/, '');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: serviceName,
        description: page.seoDescription,
        provider: {
          '@type': 'HairSalon',
          name: site.name,
          telephone: site.phone,
          address: {
            '@type': 'PostalAddress',
            streetAddress: '630 Murphy Rd Ste 211',
            addressLocality: 'Stafford',
            addressRegion: 'TX',
            postalCode: '77477',
            addressCountry: 'US',
          },
        },
        areaServed: ['Stafford', 'Sugar Land', 'Missouri City', 'Richmond', 'Houston'].map((name) => ({
          '@type': 'City',
          name,
        })),
      },
      ...(faq
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: faq.items.map((item) => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: { '@type': 'Answer', text: item.a },
              })),
            },
          ]
        : []),
    ],
  };

  const closing = sections.length > 1 ? sections[sections.length - 1] : null;
  const main = closing ? sections.slice(0, -1) : sections;
  const renderSection = (section: Section, i: number) => (
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
  );

  return (
    <SiteShell header="three" footerClassName="">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
                <li className="breadcrumb-item active">{serviceName}</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="landing-intro pt-100 rpt-70 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
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
            <div className="col-lg-5">
              <div className="landing-photo rmt-55">
                <img src={photoUrl(meta.photo)} alt={meta.photo.alt} />
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
              <span className="stars" role="img" aria-label="5 out of 5 stars">
                ★★★★★
              </span>{' '}
              {page.testimonial.author} · Google review
            </div>
          </div>
        </section>
      )}

      {glance.length > 0 && (
        <section className="landing-glance bg-lighter-two py-80">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <span className="landing-eyebrow">QUICK OVERVIEW</span>
                <h2 className="landing-heading mb-20">{serviceName} at a Glance</h2>
                <div className="table-responsive">
                  <table className="glance-table">
                    <thead>
                      <tr>
                        <th>Option</th>
                        <th>How long it lasts</th>
                        <th>Best for</th>
                      </tr>
                    </thead>
                    <tbody>
                      {glance.map((row) => (
                        <tr key={row.title}>
                          <th scope="row">{row.title}</th>
                          <td>{row.lasts || '—'}</td>
                          <td>{row.best || '—'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-15">
                  Location: {site.address}. A non-refundable deposit reserves your time and is applied to your service
                  total.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {main.map(renderSection)}

      <ReviewCards reviews={reviews} title="Clients on Their Visits" />

      <section className="landing-related bg-lighter-two py-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <span className="landing-eyebrow">KEEP READING</span>
              <h2 className="landing-heading mb-20">Related Services and Guides</h2>
              <ul className="related-list">
                {meta.related.map((link) => (
                  <li key={link.href + link.label}>
                    <a href={link.href}>{link.label}</a>
                    <span>{link.why}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {closing && renderSection(closing, main.length)}

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
