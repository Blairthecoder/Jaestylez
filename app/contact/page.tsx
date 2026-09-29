import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { NetlifyForm } from '@/app/components/forms';
import { PageBanner } from '@/app/components/sections';
import { ReviewCards } from '@/app/components/reviews-ui';
import { reviewsFor } from '@/app/content/reviews';
import { contact } from '@/app/content/home';
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

      <section className="contact-page-area py-120 rpy-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="contact-info-card rmb-55">
                <h3>{site.name}</h3>
                <ul className="contact-info-list">
                  <li>
                    <i className="far fa-phone"></i>
                    <a href={site.phoneHref}>{site.phone}</a>
                  </li>
                  <li>
                    <i className="far fa-envelope"></i>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </li>
                  <li>
                    <i className="far fa-map-marker-alt"></i>
                    <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {site.address}
                    </a>
                  </li>
                </ul>
                <h5 className="mt-30">Hours</h5>
                <ul className="footer-hours hours-dark">
                  {site.hours.map((h) => (
                    <li key={h.day}>
                      <span>{h.day}</span> <span>{h.time}</span>
                    </li>
                  ))}
                </ul>
                <a className="theme-btn mt-25" href="/services#book">
                  book online <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-form-wrap">
                <h2 className="landing-heading mb-10">{contact.title}</h2>
                <p className="mb-30">{contact.text}</p>
                <NetlifyForm
                  formName="contact"
                  successMessage="Thanks for submitting! Jae will get back to you as soon as possible."
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" name="name" className="form-control" placeholder="Your Full Name" required />
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
                        <textarea
                          name="message"
                          className="form-control"
                          rows={5}
                          placeholder="Write message"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="theme-btn">
                        send message <i className="far fa-long-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </NetlifyForm>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewCards reviews={reviewsFor(['contact', 'booking'], 2)} title="Before You Reach Out" />

      <div className="contact-page-map">
        <iframe
          title="Map to Jae Stylez"
          src="https://www.google.com/maps?q=630+Murphy+Rd+Ste+211+Stafford+TX+77477&output=embed"
          style={{ border: 0, width: '100%', height: 420 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </SiteShell>
  );
}
