import { SiteShell } from '@/app/site-shell';
import { PageBanner } from '@/app/components/sections';
import { Faq } from '@/app/components/landing-client';
import { Testimonials } from '@/app/components/reviews-ui';
import { serviceCopy } from '@/app/content/service-copy';
import { reviewsFor } from '@/app/content/reviews';
import { categoryHref, serviceHref, type BookableService } from '@/app/lib/service-model';
import { site } from '@/app/site-data';

const topicsFor = (s: BookableService): string[] => {
  const n = `${s.name} ${s.category}`.toLowerCase();
  const topics = ['booking', 'first-visit'];
  if (/retwist|palm|interlock|maintenance|crochet|loc/.test(n)) topics.push('retwist', 'maintenance', 'locs');
  if (/twist/.test(n)) topics.push('twists');
  if (/goddess|butterfly|faux|invisible/.test(n)) topics.push('goddess', 'styles');
  if (/braid|feed|tribal|cornrow|plait/.test(n)) topics.push('braids', 'styles');
  if (/silk|curl|press/.test(n)) topics.push('silk', 'styles');
  if (/starter|instant|micro/.test(n)) topics.push('starter', 'instant', 'micro');
  return topics;
};

/** Full page for one service: what it is, what to expect, aftercare, FAQs, and how to book. */
export function ServicePage({ service, all }: { service: BookableService; all: BookableService[] }) {
  const copy = serviceCopy(service);
  const siblings = all.filter((s) => s.category === service.category);
  const reviews = reviewsFor(topicsFor(service), 2);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: service.name,
        serviceType: copy.style,
        description: copy.description,
        category: service.category,
        areaServed: ['Stafford', 'Sugar Land', 'Missouri City', 'Richmond', 'Houston'].map((name) => ({ '@type': 'City', name })),
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
        ...(service.amount !== null
          ? { offers: { '@type': 'Offer', price: service.amount, priceCurrency: 'USD', availability: 'https://schema.org/InStock' } }
          : {}),
      },
      {
        '@type': 'FAQPage',
        mainEntity: copy.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: '/services/' },
          { '@type': 'ListItem', position: 3, name: service.name },
        ],
      },
    ],
  };

  return (
    <SiteShell header="three" footerClassName="mt-80">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageBanner title={service.name} crumbs={[{ label: 'Services', href: '/services' }, { label: service.name }]} />

      <section className="service-details-area py-130 rpt-90 rpb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-content rmb-75">
                <div className="content mb-30">
                  <span className="landing-eyebrow">{`${service.category} · Stafford, TX`}</span>
                  <h1 className="service-h1">{service.name} in Stafford, TX</h1>
                  <ul className="service-facts">
                    {service.duration && (
                      <li>
                        <span>Length</span> {service.duration}
                      </li>
                    )}
                    {service.price && (
                      <li>
                        <span>Price</span> {service.price}
                      </li>
                    )}
                    {service.deposit && (
                      <li>
                        <span>Deposit</span> {service.deposit}
                      </li>
                    )}
                  </ul>
                  {service.imageLarge && (
                    <div className="image my-30">
                      <img src={service.imageLarge} alt={`${service.name} by Jae Stylez`} />
                    </div>
                  )}
                  {service.summary.length >= 60 && <p className="landing-lead">{service.summary}</p>}
                  <a className="theme-btn mt-15" href={service.bookingUrl}>
                    book {service.name.toLowerCase().length > 34 ? 'this service' : service.name.toLowerCase()}{' '}
                    <i className="far fa-long-arrow-right"></i>
                  </a>
                </div>

                <div className="content mb-30">
                  <h2>{`What is ${service.name}?`}</h2>
                  {copy.about.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {copy.pillar && (
                    <p>
                      Read more: <a href={copy.pillar.href}>{copy.pillar.label}</a>
                    </p>
                  )}
                </div>

                <div className="content mb-30">
                  <h2>What to expect at your appointment</h2>
                  <ul className="list-style-one landing-list">
                    {copy.expect.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>

                <div className="content mb-30">
                  <h2>Aftercare and keeping it fresh</h2>
                  <ul className="list-style-one landing-list">
                    {copy.care.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>

                <div className="content">
                  <h2>{`${service.name}: common questions`}</h2>
                  <Faq items={copy.faqs} />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-7 col-sm-9">
              <div className="service-sidebar">
                <div className="widget widget-menu">
                  <h3 className="widget-title">{service.category}</h3>
                  <ul>
                    {siblings.slice(0, 12).map((s) => (
                      <li key={s.id}>
                        <a className={s.id === service.id ? 'active' : undefined} href={serviceHref(s)}>
                          {s.name} <i className="far fa-long-arrow-right"></i>
                        </a>
                      </li>
                    ))}
                    {siblings.length > 12 && (
                      <li>
                        <a href={categoryHref(service.category)}>
                          All {siblings.length} in this category <i className="far fa-long-arrow-right"></i>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="widget widget-form">
                  <h3 className="widget-title">Appointment</h3>
                  <p className="text-white">
                    {[service.price, service.duration].filter(Boolean).join(' · ')}
                    {service.deposit ? ` · ${service.deposit} deposit` : ''}
                  </p>
                  <a className="theme-btn btn-border w-100 mb-10" href={service.bookingUrl}>
                    choose a time <i className="far fa-long-arrow-right"></i>
                  </a>
                  <a className="theme-btn style-four w-100" href={site.phoneHref}>
                    call {site.phone} <i className="far fa-phone"></i>
                  </a>
                </div>
                {copy.pillar && (
                  <div className="widget widget-menu">
                    <h3 className="widget-title">Learn more</h3>
                    <ul>
                      <li>
                        <a href={copy.pillar.href}>
                          {copy.pillar.label} <i className="far fa-long-arrow-right"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/hair-styles">
                          Hair Styles Gallery <i className="far fa-long-arrow-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials
        reviews={reviews}
        title="What our clients say"
        text="Google reviews from Jae Stylez clients."
        className="pt-120 rpt-90 pb-125 rpb-95"
      />
    </SiteShell>
  );
}
