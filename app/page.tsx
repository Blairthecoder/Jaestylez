import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { AppointmentForm } from '@/app/components/appointment-form';
import { CategoryCards, FeatureCategories, PricingTabs } from '@/app/components/live-services';
import { ProductShowcase } from '@/app/components/home-client';
import { LatestPosts } from '@/app/components/blog-client';
import { Faq } from '@/app/components/landing-client';
import { Testimonials } from '@/app/components/reviews-ui';
import { reviewsFor } from '@/app/content/reviews';
import { galleryPhotos, photoMd, photoUrl, photos } from '@/app/content/photos';
import { about, faqs, hero } from '@/app/content/home';
import { site } from '@/app/site-data';

export const metadata: Metadata = {
  title: { absolute: 'Loctician in Stafford, TX | Natural Hair Salon | Jae Stylez' },
  description:
    'Jae Stylez is a licensed loctician and natural hair stylist in Stafford, TX. Retwists, starter locs, twists, silk press. Serving Sugar Land and Houston.',
};

const galleryLabel = (tags: string[]) => {
  const t = tags[0];
  return t === 'locs' ? 'Locs' : t === 'twists' ? 'Twists' : t === 'braids' ? 'Braids' : t === 'curls' ? 'Curls' : 'Hair Styles';
};

export default function Page() {
  return (
    <SiteShell header="one" footerClassName="pb-30">
      <section className="hero-section jae-hero py-250" style={{ backgroundImage: `url(${photoUrl(photos.collage)})` }}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-8 col-lg-9">
              <div className="hero-content py-10 rpt-0 text-white rmb-70">
                <h1 className="wow fadeInUp delay-0-2s">{hero.title}</h1>
                <p className="wow fadeInUp delay-0-4s">
                  {hero.tagline} Serving Stafford, Sugar Land, Missouri City, Richmond, and Greater Houston.
                </p>{' '}
                <a href="/services#book" className="theme-btn wow fadeInUp delay-0-6s">
                  book online <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bg-shapes"></div>
      </section>

      <section className="what-we-do-area pb-130 rpb-100">
        <div className="container">
          <div className="what-we-do-inner">
            <div className="row">
              <div className="col-xl-4">
                <div
                  className="feature-image wow fadeInLeft delay-0-2s"
                  style={{ backgroundImage: `url(${photoMd(photos.locsTop)})` }}
                ></div>
              </div>
              <div className="col-xl-8 align-self-center">
                <div className="what-we-do-content wow fadeInRight delay-0-2s">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="section-title mb-35">
                        <h2 className="title">What We Do</h2>
                        <p>Loc services, natural hair styles, protective styles and more. Pick a category to see the menu.</p>
                      </div>
                    </div>
                  </div>
                  <FeatureCategories />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us-area">
        <div className="row">
          <div className="col-xl-3 col-sm-6">
            <div className="about-left-image wow fadeInUp delay-0-2s">
              <img src={photoMd(photos.twists)} alt={photos.twists.alt} />
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 order-xl-2">
            <div className="about-right-image wow fadeInUp delay-0-6s">
              <img src={photoMd(photos.locsPonytail)} alt={photos.locsPonytail.alt} />
            </div>
          </div>
          <div className="col-xl-6 align-self-center">
            <div className="about-content rp-15 rpb-90 text-center wow fadeInUp delay-0-4s">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="section-title mb-35">
                    <h2 className="title">Meet Jasmin Lafond, licensed loctician</h2>
                  </div>
                </div>
              </div>
              <p>{about.intro[0]}</p>
              <div className="our-author mt-20">
                <img src={photoMd(photos.jae)} alt={photos.jae.alt} />{' '}
                <div className="content">
                  <h4>{site.owner}</h4>
                  <span>Loctician &amp; natural hair stylist</span>
                </div>
              </div>{' '}
              <img className="about-bg-shape" src="/assets/images/about/about-bg-shape.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section
        className="cta-area bgs-cover bg-yellow text-white py-40"
        style={{ backgroundImage: 'url(/assets/images/background/cta-bg.png)' }}
      >
        <div className="container">
          <div className="row justify-content-center text-center align-items-center">
            <div className="col-xl-6 col-lg-7">
              <div className="section-title mt-5 wow fadeInLeft delay-0-2s">
                <h2>Ready to book your service?</h2>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <a href="/services#book" className="theme-btn btn-border my-10 wow fadeInRight delay-0-2s">
                book online <i className="far fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="services-area rel z-1 pt-120 rpt-90 pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="section-title text-center mb-55">
                <h2 className="title">Services we provide</h2>
                <p>Every service starts with your hair health and ends with a plan you can actually keep up with.</p>
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

      <section
        className="pricing-plan-area bgs-cover pt-120 rpt-90 pb-130 rpb-100"
        style={{ backgroundImage: 'url(/assets/images/background/pricing-plan-bg.jpg)' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="section-title text-white text-center mb-55">
                <h2 className="title">Service pricing</h2>
                <p>Live prices and times from the booking calendar. A non-refundable deposit reserves your time.</p>
              </div>
            </div>
          </div>
          <PricingTabs />
        </div>
      </section>

      <section className="gallery-area rel z-1 pt-120 rpt-90 pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-between align-items-end mb-40">
            <div className="col-xl-5 col-lg-6">
              <div className="section-title mb-15 wow fadeInLeft delay-0-2s">
                <h2 className="title">Latest photo gallery</h2>
                <p>Locs, twists, braids and curls from the chair.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="section-header-btn text-lg-right mb-20 wow fadeInRight delay-0-2s">
                <a href="/hair-styles" className="theme-btn">
                  explore more gallery <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            {galleryPhotos.slice(0, 4).map((photo, i) => (
              <div key={photo.file} className="col-xl-3 col-sm-6">
                <div className={`gallery-item wow fadeInUp delay-0-${(i % 4) * 2 + 2}s`}>
                  <img src={photoMd(photo)} alt={photo.alt} loading="lazy" decoding="async" />{' '}
                  <div className="gallery-content">
                    <h3>{galleryLabel(photo.tags)}</h3>
                    <p>Jae Stylez · Stafford, TX</p>{' '}
                    <a href="/hair-styles" className="details-btn" aria-label="See more styles">
                      <i className="far fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-area rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8"></div>
          </div>
          <div className="contact-form-wrap">
            <div
              className="image wow fadeInUp delay-0-2s"
              style={{ backgroundImage: `url(${photoMd(photos.boxBraids)})` }}
            ></div>
            <AppointmentForm className="wow fadeInUp delay-0-4s" backgroundImage="/assets/images/contact/contact-bg.png" />
            <div
              className="image wow fadeInUp delay-0-6s"
              style={{ backgroundImage: `url(${photoMd(photos.feedIn)})` }}
            ></div>
          </div>
        </div>
        <div className="contact-shapes">
          <img className="shape-one" src="/assets/images/shapes/contact-one.png" alt="" />{' '}
          <img className="shape-two" src="/assets/images/shapes/contact-two.png" alt="" />
        </div>
      </section>

      <section className="team-area rel z-1 pt-120 rpt-90 pb-95 rpb-65">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="section-title text-center mb-50">
                <h2 className="title">Shop our featured products</h2>
                <p>The Lox Box: loc and natural hair care made in Houston.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <ProductShowcase />
        </div>
      </section>

      <section className="cta-video-area rel z-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="cta-part bg-yellow text-center text-white p-40 rpy-55 wow fadeInLeft delay-0-2s"
                style={{ backgroundImage: 'url(/assets/images/background/video-cta-bg.png)' }}
              >
                <div className="section-title mb-15">
                  <h2>
                    Come &amp;
                    <br /> get fresh
                  </h2>
                  <p>Walk-ins are not taken. See live availability and reserve your time online.</p>
                </div>{' '}
                <a href="/services#book" className="theme-btn btn-border">
                  book now <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="video-part rmt-30 wow fadeInRight delay-0-2s">
                <img src={photoUrl(photos.collage)} alt={photos.collage.alt} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials
        reviews={reviewsFor(['about', 'booking', 'locs', 'maintenance', 'first-visit', 'twists'], 7)}
        title="What our clients say"
        text="Google reviews from clients across Stafford, Sugar Land, Missouri City and Houston."
      />

      <section className="faq-area bg-lighter-two pt-120 rpt-90 pb-120 rpb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="section-title text-center mb-50">
                <h2 className="title">Straight answers</h2>
                <p>
                  Still stuck? Call <a href={site.phoneHref}>{site.phone}</a> or <a href="/contact">send a message</a>.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <Faq items={faqs} />
            </div>
          </div>
        </div>
      </section>

      <section className="news-area rel z-2 pt-120 rpt-90 pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-between align-items-end mb-10">
            <div className="col-xl-5 col-lg-6">
              <div className="section-title mb-15">
                <h2 className="title">Latest Blog &amp; News</h2>
                <p>Loc care, protective styles and natural hair advice from Jae.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="slider-btns text-lg-right mb-20">
                <button className="news-prev" aria-label="Previous posts">
                  <i className="far fa-long-arrow-left"></i>
                </button>{' '}
                <button className="news-next" aria-label="Next posts">
                  <i className="far fa-long-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <LatestPosts />
        </div>
      </section>
    </SiteShell>
  );
}
