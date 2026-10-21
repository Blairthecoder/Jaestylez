import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/app/site-shell';
import { PageBanner } from '@/app/components/sections';
import { Faq } from '@/app/components/landing-client';
import { Testimonials } from '@/app/components/reviews-ui';
import { areas, getArea } from '@/app/content/areas';
import { reviewsFor } from '@/app/content/reviews';
import { breadcrumbSchema, faqSchema, pageMeta } from '@/app/lib/seo';
import { site, styleLinks } from '@/app/site-data';

type Params = { city: string };

export function generateStaticParams() {
  return areas.map((a) => ({ city: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> | Params }): Promise<Metadata> {
  const { city } = await params;
  const area = getArea(city);
  if (!area) return {};
  return pageMeta({ title: area.title, description: area.description, path: `/areas/${area.slug}` });
}

export default async function Page({ params }: { params: Promise<Params> | Params }) {
  const { city } = await params;
  const area = getArea(city);
  if (!area) notFound();
  const others = areas.filter((a) => a.slug !== area.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      faqSchema(area.faqs),
      breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Areas we serve' }, { name: area.city }]),
    ],
  };

  return (
    <SiteShell header="three" footerClassName="mt-80">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageBanner title={area.h1} crumbs={[{ label: 'Areas we serve' }, { label: area.city }]} />

      <section className="service-details-area py-130 rpt-90 rpb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-content rmb-75">
                <div className="content">
                  <span className="landing-eyebrow">{area.drive}</span>
                  <h2>Locs and natural hair care for {area.city} clients</h2>
                  <p className="landing-lead">{area.intro}</p>
                  <p>{area.route}</p>
                  <ul className="list-style-one landing-list my-20">
                    {area.reasons.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                  <div className="landing-ctas">
                    <a href="/services#book" className="theme-btn">
                      book online <i className="far fa-long-arrow-right"></i>
                    </a>{' '}
                    <a href="/pricing" className="theme-btn style-two">
                      see pricing <i className="far fa-long-arrow-right"></i>
                    </a>
                  </div>
                  <h3 className="mt-50">Popular services</h3>
                  <ul className="list-style-one landing-list my-20">
                    {styleLinks.map((l) => (
                      <li key={l.href}>
                        <a href={l.href}>{l.label}</a>
                      </li>
                    ))}
                  </ul>
                  <h3 className="mt-50">Visit the salon</h3>
                  <p>
                    <strong>{site.name}</strong>
                    <br />
                    <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {site.address}
                    </a>
                    <br />
                    <a href={site.phoneHref}>{site.phone}</a>
                  </p>
                  <p>{site.hoursSummary}. Walk-ins are not taken.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-7 col-sm-9">
              <div className="service-sidebar">
                <div className="widget widget-menu">
                  <h5 className="widget-title">Other areas we serve</h5>
                  <ul>
                    {others.map((a) => (
                      <li key={a.slug}>
                        <a href={`/areas/${a.slug}/`}>
                          {a.city} <i className="far fa-long-arrow-right"></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-area bg-lighter-two pt-120 rpt-90 pb-120 rpb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <div className="section-title text-center mb-30">
                <h2 className="title">Questions from {area.city} clients</h2>
              </div>
              <Faq items={area.faqs} />
            </div>
          </div>
        </div>
      </section>

      <Testimonials
        reviews={reviewsFor(['locs', 'maintenance', 'booking', 'first-visit'], 4)}
        title="What our clients say"
        text="Google reviews from clients across Stafford, Sugar Land, Missouri City and Houston."
      />
    </SiteShell>
  );
}
