import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { BookingServices } from '@/app/components/booking-services';
import { FaqSection, PageBanner, ServiceAreaSection } from '@/app/components/sections';
import { ReviewCards } from '@/app/components/reviews-ui';
import { reviewsFor } from '@/app/content/reviews';
import { bookingFaqs, gettingHere, guidance, notice, policy } from '@/app/content/booking';

export const metadata: Metadata = {
  title: { absolute: 'Book a Natural Hair Stylist in Stafford, TX | Jae Stylez' },
  description:
    'Book locs, retwists, twists, silk press, and protective styles at Jae Stylez in Stafford, TX. Live availability, deposit info, and prep instructions.',
};

export default function Page() {
  return (
    <SiteShell header="three" footerClassName="">
      <PageBanner title="Book Online" crumbs={[{ label: 'Services' }]} />

      <section className="booking-notice bg-yellow text-white py-30">
        <div className="container text-center">
          <p className="mb-0">{notice}</p>
        </div>
      </section>

      <BookingServices />

      <section className="booking-guidance bg-lighter-two py-100 rpy-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-50">
                <span className="landing-eyebrow">{guidance.eyebrow}</span>
                <h2 className="title">{guidance.title}</h2>
                <p>{guidance.intro}</p>
              </div>
            </div>
          </div>
          <div className="row">
            {guidance.groups.map((group) => (
              <div key={group.title} className="col-lg-6 mb-30">
                <div className="landing-card">
                  <h4>{group.title}</h4>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="booking-policy py-100 rpy-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-50">
                <span className="landing-eyebrow">{policy.eyebrow}</span>
                <h2 className="title">{policy.title}</h2>
                <p>{policy.intro}</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {policy.groups.map((group) => (
              <div key={group.title} className="col-lg-5 mb-30">
                <div className="landing-card">
                  <h4>{group.title}</h4>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewCards reviews={reviewsFor(['booking', 'first-visit', 'maintenance'], 3)} title="Clients on Booking With Jae" />

      <FaqSection items={bookingFaqs} eyebrow="BOOKING FAQ" title="Straight Answers Before You Book" />

      <ServiceAreaSection />

      <section className="getting-here pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <h3 className="landing-heading mb-15">Getting Here</h3>
              <ul className="list-style-one landing-list">
                {gettingHere.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
