import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { NamedServices } from '@/app/components/landing-client';
import { CategoryCards } from '@/app/components/live-services';
import { FeaturedProducts } from '@/app/components/home-client';
import { LatestPosts } from '@/app/components/blog-client';
import { AppPromo, FaqSection, ServiceAreaSection } from '@/app/components/sections';
import { ReviewsBand } from '@/app/components/reviews-ui';
import { reviewsFor } from '@/app/content/reviews';
import { galleryPhotos, photos, photoUrl } from '@/app/content/photos';
import { hero, paths, popularServices } from '@/app/content/home';


export const metadata: Metadata = {
  title: { absolute: 'Loctician in Stafford, TX | Natural Hair Salon | Jae Stylez' },
  description:
    'Jae Stylez is a licensed loctician and natural hair stylist in Stafford, TX. Retwists, starter locs, twists, silk press. Serving Sugar Land and Houston.',
};

export default function Page() {
  return (
    <SiteShell header="one" footerClassName="pb-30">
      <section
        className="hero-section jae-hero py-250"
        style={{ backgroundImage: `url(${photoUrl(photos.collage)})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-9">
              <div className="hero-content py-10 rpt-0 text-white">
                <span className="landing-eyebrow">{hero.eyebrow}</span>
                <h1 className="wow fadeInUp delay-0-2s">{hero.title}</h1>
                <p className="hero-tagline wow fadeInUp delay-0-4s">{hero.tagline}</p>
                <p className="wow fadeInUp delay-0-4s">{hero.body}</p>
                <div className="landing-ctas">
                  <a href="/services#book" className="theme-btn wow fadeInUp delay-0-6s">
                    book online <i className="far fa-long-arrow-right"></i>
                  </a>
                  <a
                    href={hero.appUrl}
                    className="theme-btn style-four wow fadeInUp delay-0-6s"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    download app <i className="far fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bg-shapes"></div>
      </section>

      <ReviewsBand reviews={reviewsFor(['about', 'booking', 'locs', 'maintenance', 'first-visit', 'twists'], 6, ['kevin-joseph'])} />

      <section className="find-service py-100 rpy-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center mb-50">
                <span className="landing-eyebrow">{paths.eyebrow}</span>
                <h2 className="title">{paths.title}</h2>
                <p>{paths.intro}</p>
              </div>
            </div>
          </div>
          <div className="row">
            {paths.items.map((item) => (
              <div key={item.title} className="col-lg-4 col-md-6 mb-30">
                <div className="landing-card path-card">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                  <ul>
                    {item.links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="popular-services bg-lighter-two py-100 rpy-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center mb-50">
                <h2 className="title">Popular Services</h2>
                <p>Live prices and times straight from the booking calendar. Book in a few taps.</p>
              </div>
            </div>
          </div>
          <NamedServices names={popularServices} />
          <div className="text-center mt-20">
            <a className="theme-btn" href="/services#book">
              see every service <i className="far fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      <section className="services-area rel z-1 pt-120 rpt-90 pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="section-title text-center mb-55">
                <h2 className="title">Browse by Category</h2>
                <p>Loc maintenance, natural hair styles, protective styles and more. Pick a category to see the full menu.</p>
              </div>
            </div>
          </div>
          <CategoryCards />
        </div>
        <div className="services-shapes">
          <img className="shape-one" src="/assets/images/shapes/service-one.png" alt="" />{' '}
          <img className="shape-two" src="/assets/images/shapes/service-two.png" alt="" />
        </div>
      </section>

      <section className="gallery-strip py-100 rpy-70">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-end mb-40">
            <div className="section-title mb-0">
              <h2 className="title">Latest Photo Gallery</h2>
              <p>Locs, twists, silk presses and protective styles from the chair.</p>
            </div>
            <a className="theme-btn mt-15" href="/hair-styles">
              view all styles <i className="far fa-long-arrow-right"></i>
            </a>
          </div>
          <div className="row">
            {galleryPhotos.slice(0, 8).map((photo) => (
              <div key={photo.file} className="col-lg-3 col-6 mb-30">
                <a className="gallery-tile" href={photoUrl(photo)} data-lightbox="image">
                  <img src={photoUrl(photo)} alt={photo.alt} loading="lazy" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-products bg-lighter-two py-100 rpy-70">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-end mb-40">
            <div className="section-title mb-0">
              <h2 className="title">Shop Our Featured Products</h2>
              <p>The Lox Box: loc and natural hair care made in Houston.</p>
            </div>
            <a className="theme-btn mt-15" href="/shop">
              shop all <i className="far fa-long-arrow-right"></i>
            </a>
          </div>
          <FeaturedProducts />
        </div>
      </section>

      <AppPromo />
      <ServiceAreaSection />
      <FaqSection />

      <section className="news-area rel z-2 pt-120 rpt-90 pb-100 rpb-70">
        <div className="container">
          <div className="section-title text-center mb-50">
            <h2 className="title">Latest Blog &amp; News</h2>
            <p>Loc care, protective styles and natural hair advice from Jae.</p>
          </div>
          <LatestPosts />
        </div>
      </section>
    </SiteShell>
  );
}
