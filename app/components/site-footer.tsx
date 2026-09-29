import { footerServices, site } from '@/app/site-data';
import { NetlifyForm } from '@/app/components/forms';

export function SiteFooter({ className = '' }: { className?: string }) {
  return (
    <footer
      className={`main-footer bg-black text-white bgs-cover ${className}`.trim()}
      style={{ backgroundImage: 'url(/assets/images/background/footer.png)' }}
    >
      <div className="container">
        <div className="footer-newsletter-wrap bg-yellow p-50 py-40">
          <div className="section-title text-white wow fadeInLeft delay-0-2s">
            <h2 className="title mb-0">newsletter subscribe</h2>
          </div>
          <div className="footer-newsletter wow fadeInRight delay-0-2s">
            <NetlifyForm formName="newsletter" successMessage="Thanks, you are subscribed.">
              <input type="email" name="email" placeholder="Enter Your Email" aria-label="Email address" required />
              <button type="submit" className="theme-btn">
                subscribe now <i className="far fa-long-arrow-right"></i>
              </button>
            </NetlifyForm>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-xl-3 col-md-6 col-sm-8">
            <div className="footer-widget about-widget wow fadeInUp delay-0-2s">
              <h5 className="footer-title">about us</h5>
              <div className="about-widget-content">
                <p>{site.blurb}</p>
                <div className="social-style-two pt-5">
                  {site.social.map((s) => (
                    <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                      <i className={s.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-6 col-sm-4">
            <div className="footer-widget menu-widget wow fadeInUp delay-0-4s">
              <h5 className="footer-title">services</h5>
              <ul>
                {footerServices.map((item) => (
                  <li key={item.label}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="footer-widget wow fadeInUp delay-0-6s">
              <h5 className="footer-title">hours</h5>
              <ul className="footer-hours">
                {site.hours.map((h) => (
                  <li key={h.day}>
                    <span>{h.day}</span> <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="footer-widget contact-widget wow fadeInUp delay-0-8s">
              <h5 className="footer-title">Contact Us</h5>
              <ul>
                <li>
                  <i className="far fa-map-marker-alt"></i>
                  <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">{site.address}</a>
                </li>
                <li>
                  <i className="far fa-phone"></i>
                  <a href={site.phoneHref}>{site.phone}</a>
                </li>
                <li>
                  <i className="far fa-clock"></i>
                  <span>{site.hoursSummary}</span>
                </li>
                <li>
                  <i className="far fa-envelope"></i>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright-area text-center py-20 mt-15">
          <p>
            Copyright © {new Date().getFullYear()} <a href="/">{site.name}</a>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
