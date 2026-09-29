import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { NetlifyForm } from '@/app/components/forms';

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function Page() {
  return (
    <SiteShell header="three" footerClassName="">
      <section className="page-banner text-white py-190 rpy-130" style={{ backgroundImage: "url(/assets/images/banner/banner.jpg)" }}>
        <div className="container">
          <div className="banner-inner">
            <h1 className="page-title wow fadeInRight delay-0-2s">Contact</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center wow fadeInLeft delay-0-2s">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">Cotact Us</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="contact-page pt-120 pb-130 rpt-90 rpb-100">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-5">
              <div className="contact-info-wrap rmb-55 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-40">
                  <h2>Contact Us</h2>
                  <p>Sit amet consectetur adipiscing elit eiusmod tempor incidi labore dolore magna</p>
                </div>
                <div className="contact-info-part p-40">
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="content">
                      <h3>Address</h3>
                      {' '}
                      <span>7895 Piermont, Albuquerque, NM 198866, USA</span>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fal fa-envelope-open"></i>
                    </div>
                    <div className="content">
                      <h3>Email Us</h3>
                      {' '}
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
                      <br />
                      {' '}
                      <a href="www.infomar.net">www.infomar.net</a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fal fa-phone"></i>
                    </div>
                    <div className="content">
                      <h3>Phone</h3>
                      {' '}
                      <a href="tel:+01234567899">+012 (345) 678 99</a>
                      <br />
                      {' '}
                      <a href="tel:+12345678">+12345678</a>
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
                      <p>
                        Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua suspendisse
                      </p>
                    </div>
                  </div>
                </div>
                <NetlifyForm formName="contact">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" id="name" name="name" className="form-control" defaultValue="" placeholder="Your Full name" required data-error="Please enter your name" />
                        {' '}
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" id="phone" name="phone" className="form-control" defaultValue="" placeholder="Phone Number" />
                        {' '}
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="email" id="email" name="email" className="form-control" defaultValue="" placeholder="Email Address" required data-error="Please enter your Email" />
                        {' '}
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" id="subject" name="subject" className="form-control" defaultValue="" placeholder="Subject" />
                        {' '}
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea name="message" id="message" className="form-control" rows={3} placeholder="Write message" required data-error="Please enter your Message"></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn">
                          send message
                          {' '}
                          <i className="far fa-long-arrow-right"></i>
                        </button>
                        {' '}
                        <div id="msgSubmit" className="hidden"></div>
                      </div>
                    </div>
                  </div>
                </NetlifyForm>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="contact-page-map wow fadeInUp delay-0-2s">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d136834.1519573059!2d-74.0154445224086!3d40.7260256534837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639991650837!5m2!1sen!2sbd" style={{ border: "0", width: "100%" }} allowFullScreen loading="lazy"></iframe>
      </div>
    </SiteShell>
  );
}
