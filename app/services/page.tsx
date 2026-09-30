import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { BookingServices } from '@/app/components/booking-services';
import { AppointmentForm } from '@/app/components/appointment-form';
import { CategoryTiles } from '@/app/components/live-services';
import { LatestPostsGrid } from '@/app/components/blog-client';
import { Faq } from '@/app/components/landing-client';
import { PageBanner } from '@/app/components/sections';
import { Testimonials } from '@/app/components/reviews-ui';
import { reviewsFor } from '@/app/content/reviews';
import { bookingFaqs, guidance, notice, policy } from '@/app/content/booking';
import { about } from '@/app/content/home';
import { photoMd, photos } from '@/app/content/photos';
import { site } from '@/app/site-data';

export const metadata: Metadata = {
  title: { absolute: 'Book a Natural Hair Stylist in Stafford, TX | Jae Stylez' },
  description:
    'Book locs, retwists, twists, silk press, and protective styles at Jae Stylez in Stafford, TX. Live availability, deposit info, and prep instructions.',
};

export default function Page() {
  return (
    <SiteShell header="three" footerClassName="mt-80">
      <PageBanner title="Services" crumbs={[{ label: 'Services' }]} />

      <section className="about-us-four services-intro py-130 rpt-100 rpb-90">
        <div className="container">
          <div className="row align-items-center justify-content-around">
            <div className="col-lg-6">
              <div className="about-left-image rmb-55 wow fadeInUp delay-0-2s">
                <img src={photoMd(photos.locsTop)} alt={photos.locsTop.alt} />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="about-content-four wow fadeInUp delay-0-4s">
                <h3 className="experience mb-35">
                  <span className="number">10+</span> years of experience
                </h3>
                <div className="section-title mb-35">
                  <h2 className="title">Healthy hair first, every service</h2>
                </div>
                <p>{about.intro[0]}</p>
                <p>{notice}</p>
                <div className="our-author mt-20">
                  <img src={photoMd(photos.jae)} alt={photos.jae.alt} />
                  <div className="content">
                    <h4>{site.owner}</h4>
                    <span>Loctician &amp; natural hair stylist</span>
                  </div>
                </div>
                <img className="about-bg-shape" src="/assets/images/about/about-bg-shape.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="what-we-offer-three services-offers bg-black rel z-2 pt-120 rpt-90 pb-130 rpb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="section-title text-white text-center mb-55">
                <h2 className="title">what we offer</h2>
                <p>Loc maintenance, natural hair styles, protective styles and more. Choose a category to see the menu.</p>
                <span className="sub-title">Services</span>
              </div>
            </div>
          </div>
          <CategoryTiles />
          <div className="row align-items-center mt-30">
            <div className="col-lg-5">
              <div className="morder-tools-content text-white rmb-55 wow fadeInLeft delay-0-2s">
                <h3>not sure what to book?</h3>
                <p>
                  Book the In-Salon Consultation ($30). Thirty minutes covers your hair, your goals, and a real service
                  recommendation, so your next appointment is booked with confidence.
                </p>{' '}
                <a href="/services/in-salon-consultation/" className="theme-btn style-four mt-20">
                  book consultation <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="morder-toots-image wow fadeInRight delay-0-2s">
                <img src={photoMd(photos.feedIn)} alt={photos.feedIn.alt} />
              </div>
            </div>
          </div>
        </div>
        <div className="services-shapes">
          <img className="shape-one" src="/assets/images/shapes/wwo-one.png" alt="" />{' '}
          <img className="shape-two" src="/assets/images/shapes/wwo-two.png" alt="" />
        </div>
      </section>

      <BookingServices />

      <section className="faq-area booking-guidance pt-120 rpt-90 pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="section-title text-center mb-50">
                <h2 className="title">{guidance.title}</h2>
                <p>{guidance.intro}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <Faq
                className="mt-0 mb-30"
                initialOpen={null}
                items={guidance.groups.map((g) => ({ q: g.title, list: g.items }))}
              />
            </div>
            <div className="col-lg-6">
              <Faq
                className="mt-0 mb-30"
                initialOpen={null}
                items={policy.groups.map((g) => ({ q: g.title, list: g.items }))}
              />
              <p>{policy.intro}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="working-contact services-contact pt-100 rpt-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div
                className="working-hour text-white bgs-cover mt-30 br-10 overflow-hidden p-60 py-50 wow fadeInUp delay-0-2s"
                style={{ backgroundImage: 'url(/assets/images/background/working-hour-bg.jpg)' }}
              >
                <h3>working hours</h3>
                <p>
                  {site.address}. Walk-ins are not taken; all services are by appointment.
                </p>
                <table>
                  <tbody>
                    {site.hours.map((h) => (
                      <tr key={h.day}>
                        <td>{h.day.toUpperCase()}</td>
                        <td>{h.time === 'Closed' ? <span className="color-yellow">Closed</span> : h.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-form-wrap br-10 overflow-hidden mt-30">
                <AppointmentForm className="wow fadeInUp delay-0-4s" backgroundImage="/assets/images/contact/contact-bg.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials
        reviews={reviewsFor(['booking', 'first-visit', 'maintenance'], 3)}
        title="What our clients say"
        text="Google reviews from people who booked with Jae."
        className="services-testimonials pt-120 rpt-90 pb-125 rpb-95"
      />

      <section className="faq-area booking-faq bg-lighter-two pt-120 rpt-90 pb-120 rpb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="section-title text-center mb-50">
                <h2 className="title">Straight answers before you book</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <Faq items={bookingFaqs} initialOpen={null} />
            </div>
          </div>
        </div>
      </section>

      <section className="news-area-two services-news rel z-2 pt-120 rpt-90 pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center mb-10">
            <div className="col-xl-6 col-lg-7">
              <div className="section-title text-center mb-60">
                <h2 className="title">latest news &amp; blog</h2>
                <p>Loc care, protective styles and natural hair advice from Jae.</p>
                <span className="sub-title">blogs</span>
              </div>
            </div>
          </div>
          <LatestPostsGrid />
        </div>
      </section>
    </SiteShell>
  );
}
