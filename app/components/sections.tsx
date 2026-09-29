import { Faq } from '@/app/components/landing-client';
import { app, faqs as homeFaqs, reviews, serviceArea } from '@/app/content/home';
import { site } from '@/app/site-data';
import { wixMedia } from '@/app/gallery-data';

export function PageBanner({ title, crumbs }: { title: string; crumbs: { label: string; href?: string }[] }) {
  return (
    <section
      className="page-banner text-white py-190 rpy-130"
      style={{ backgroundImage: 'url(/assets/images/banner/banner.jpg)' }}
    >
      <div className="container">
        <div className="banner-inner">
          <h1 className="page-title wow fadeInRight delay-0-2s">{title}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center wow fadeInLeft delay-0-2s">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              {crumbs.map((crumb, i) =>
                crumb.href ? (
                  <li key={crumb.label} className="breadcrumb-item">
                    <a href={crumb.href}>{crumb.label}</a>
                  </li>
                ) : (
                  <li key={crumb.label} className={`breadcrumb-item${i === crumbs.length - 1 ? ' active' : ''}`}>
                    {crumb.label}
                  </li>
                ),
              )}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}

export function ReviewsBand() {
  return (
    <section className="reviews-band bg-black text-white py-80 rpy-60">
      <div className="container">
        <div className="row">
          {reviews.map((review) => (
            <div key={review.name} className="col-lg-4 mb-30">
              <figure className="review-card">
                <img
                  className="review-google"
                  src={wixMedia('5532d7_9f5a6973fc00425c8ea68b81ae50aba4~mv2.png', 160, 60)}
                  alt="Google reviews"
                />
                <div className="stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <blockquote>{review.text}</blockquote>
                <figcaption>{review.name}</figcaption>
              </figure>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a className="theme-btn style-four" href={site.googleReviewsUrl} target="_blank" rel="noopener noreferrer">
            read more google reviews <i className="far fa-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export function ServiceAreaSection() {
  return (
    <section className="service-area-section py-100 rpy-70">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <span className="landing-eyebrow">{serviceArea.eyebrow}</span>
            <h2 className="landing-heading mb-20">{serviceArea.title}</h2>
            <p>{serviceArea.intro}</p>
            <ul className="list-style-one landing-list my-20">
              {serviceArea.places.map((place) => (
                <li key={place}>{place}</li>
              ))}
            </ul>
            <p>{serviceArea.note}</p>
          </div>
          <div className="col-lg-5">
            <div className="landing-card hours-card">
              <h4>Visit the Salon</h4>
              <p>
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                  {site.address}
                </a>
              </p>
              <ul className="footer-hours hours-dark">
                {site.hours.map((h) => (
                  <li key={h.day}>
                    <span>{h.day}</span> <span>{h.time}</span>
                  </li>
                ))}
              </ul>
              <a className="theme-btn mt-20" href={site.phoneHref}>
                call {site.phone} <i className="far fa-phone"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FaqSection({
  items = homeFaqs,
  eyebrow = 'FAQs',
  title = 'Straight Answers',
}: {
  items?: { q: string; a: string }[];
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="faq-section bg-lighter-two py-100 rpy-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-9">
            <span className="landing-eyebrow">{eyebrow}</span>
            <h2 className="landing-heading mb-10">{title}</h2>
            <p>
              Still stuck? Call <a href={site.phoneHref}>{site.phone}</a> or <a href="/contact">send a message</a>.
            </p>
            <Faq items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function AppPromo() {
  return (
    <section className="app-promo py-60">
      <div className="container text-center">
        <h3>{app.title}</h3>
        <p>{app.text}</p>
        <img className="app-qr" src={wixMedia(app.qr, 200, 200)} alt="Scan to join the Jae Stylez app" loading="lazy" />
      </div>
    </section>
  );
}
