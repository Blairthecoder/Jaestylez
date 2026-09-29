import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { NetlifyForm } from '@/app/components/forms';
import { PageBanner } from '@/app/components/sections';
import { Testimonials } from '@/app/components/reviews-ui';
import { reviewsFor } from '@/app/content/reviews';
import { contact, serviceArea } from '@/app/content/home';
import { site } from '@/app/site-data';

export const metadata: Metadata = {
  title: { absolute: 'Contact Jae Stylez | Houston Natural Hair Stylist' },
  description:
    'Contact Jae Stylez with questions about natural hair services, locs, braids, consultations, appointments or hair products in Stafford and Greater Houston.',
};

export default function Page() {
  return (
    <SiteShell header="three" footerClassName="">
      <PageBanner title="Contact" crumbs={[{ label: 'Contact' }]} />

      <section className="contact-page pt-120 pb-130 rpt-90 rpb-100">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-5">
              <div className="contact-info-wrap rmb-55 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-40">
                  <h2>Contact Us</h2>
                  <p>Questions about a style, a consultation, or a product? Reach out any way you like.</p>
                </div>
                <div className="contact-info-part p-40">
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="content">
                      <h3>Address</h3>{' '}
                      <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                        {site.address}
                      </a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fal fa-envelope-open"></i>
                    </div>
                    <div className="content">
                      <h3>Email Us</h3> <a href={`mailto:${site.email}`}>{site.email}</a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fal fa-phone"></i>
                    </div>
                    <div className="content">
                      <h3>Phone</h3> <a href={site.phoneHref}>{site.phone}</a>
                      <br /> <span>{site.hoursSummary}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-page-form wow fadeInRight delay-0-2s">
                <div className="row">
                  <div className="col-lg-11 col-md-10">
                    <div className="section-title mb-40">
                      <h2>send us message</h2>
                      <p>{contact.text}</p>
                    </div>
                  </div>
                </div>
                <NetlifyForm
                  formName="contact"
                  successMessage="Thanks for submitting! Jae will get back to you as soon as possible."
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" name="name" className="form-control" placeholder="Your Full name" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" name="phone" className="form-control" placeholder="Phone Number" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="email" name="email" className="form-control" placeholder="Email Address" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" name="subject" className="form-control" placeholder="Subject" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea name="message" className="form-control" rows={3} placeholder="Write message" required></textarea>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn">
                          send message <i className="far fa-long-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </NetlifyForm>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-30">
                <h2 className="title">{serviceArea.title}</h2>
              </div>
              <p>{serviceArea.intro}</p>
              <ul className="list-style-one my-20">
                {serviceArea.places.map((place) => (
                  <li key={place}>{place}</li>
                ))}
              </ul>
              <p>{serviceArea.note}</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials
        reviews={reviewsFor(['contact', 'booking'], 2)}
        title="What our clients say"
        text="Before you reach out, here is what clients say on Google."
      />

      <div className="contact-page-map wow fadeInUp delay-0-2s">
        <iframe
          title="Map to Jae Stylez"
          src="https://www.google.com/maps?q=630+Murphy+Rd+Ste+211+Stafford+TX+77477&output=embed"
          style={{ border: 0, width: '100%' }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </SiteShell>
  );
}
