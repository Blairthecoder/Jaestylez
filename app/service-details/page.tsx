import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { NetlifyForm } from '@/app/components/forms';

export const metadata: Metadata = {
  title: "Service Details",
};

export default function Page() {
  return (
    <SiteShell header="three" footerClassName="mt-80">
      <section className="page-banner text-white py-190 rpy-130" style={{ backgroundImage: "url(/assets/images/banner/banner.jpg)" }}>
        <div className="container">
          <div className="banner-inner">
            <h1 className="page-title wow fadeInRight delay-0-2s">Details</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center wow fadeInLeft delay-0-2s">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">Service Details</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="service-details-area py-130 rpt-90 rpb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-content rmb-75">
                <div className="content wow fadeInUp delay-0-2s">
                  <h2>Hair Cutting & Colors</h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                  </p>
                </div>
                <div className="image mb-45 wow fadeInUp delay-0-2s">
                  <img src="/assets/images/services/service-details.jpg" alt="Service Details" />
                </div>
                <div className="content wow fadeInUp delay-0-2s">
                  <p>
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil
                  </p>
                </div>
                <div className="service-middle pb-10 wow fadeInUp delay-0-2s">
                  <div className="image-part mb-30">
                    <img src="/assets/images/services/service-middle.jpg" alt="Service" />
                  </div>
                  <div className="video-part mb-30">
                    <img src="/assets/images/services/service-middle-video.jpg" alt="Video" />
                    {' '}
                    <a href="https://www.youtube.com/watch?v=9Y7ma241N8k" className="mfp-iframe video-play" data-lightbox="video">
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                </div>
                <div className="content wow fadeInUp delay-0-2s">
                  <h2>benefit our services</h2>
                  <p>
                    We will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because
                  </p>
                  <div className="faqs mt-35 wow fadeInUp delay-0-2s" id="faqs">
                    <div className="card">
                      <h5 className="collapsed card-header" data-toggle="collapse" data-target="#collapse0" aria-expanded="false" aria-controls="collapse0">
                        Best Hair Cutting & Fitting Near City
                        {' '}
                        <i className="far fa-long-arrow-right"></i>
                      </h5>
                      <div id="collapse0" className="collapse" data-parent="#faqs">
                        <div className="card-body">
                          <p>
                            We will give you a complete account of the system, and expound the teachings of the great explorer of the truth, the master-builder of human happiness. No orejects, dislikes, or avoids pleasure itself, because it is pleasure, but because
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <h5 className="card-header" data-toggle="collapse" data-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                        experience & profesional team member
                        <i className="far fa-long-arrow-right"></i>
                      </h5>
                      <div id="collapse2" className="collapse show" data-parent="#faqs">
                        <div className="card-body">
                          <p>
                            We will give you a complete account of the system, and expound the teachings of the great explorer of the truth, the master-builder of human happiness. No orejects, dislikes, or avoids pleasure itself, because it is pleasure, but because
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <h5 className="collapsed card-header" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                        low cost & very much friendly
                        {' '}
                        <i className="far fa-long-arrow-right"></i>
                      </h5>
                      <div id="collapse3" className="collapse" data-parent="#faqs">
                        <div className="card-body">
                          <p>
                            We will give you a complete account of the system, and expound the teachings of the great explorer of the truth, the master-builder of human happiness. No orejects, dislikes, or avoids pleasure itself, because it is pleasure, but because
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-7 col-sm-9">
              <div className="service-sidebar">
                <div className="widget widget-menu wow fadeInUp delay-0-2s">
                  <ul>
                    <li>
                      <a className="active" href="/service-details">
                        Hair Cutting & Fitting
                        {' '}
                        <i className="far fa-long-arrow-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/service-details">
                        Beauty & Spa
                        {' '}
                        <i className="far fa-long-arrow-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/service-details">
                        Body Treatments
                        {' '}
                        <i className="far fa-long-arrow-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/service-details">
                        Hair Colors
                        {' '}
                        <i className="far fa-long-arrow-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/service-details">
                        Body Massages
                        {' '}
                        <i className="far fa-long-arrow-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/service-details">
                        Fash Wash & Facial
                        {' '}
                        <i className="far fa-long-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-form wow fadeInUp delay-0-2s">
                  <h3 className="widget-title">Appointment</h3>
                  <NetlifyForm formName="appointment">
                    <div className="form-group">
                      <input type="text" id="name" name="name" className="form-control" defaultValue="" placeholder="Your Full Name" required />
                    </div>
                    <div className="form-group">
                      <input type="email" id="email" name="email" className="form-control" defaultValue="" placeholder="Email Address" required />
                    </div>
                    <div className="form-group">
                      <input type="text" id="phone" name="phone" className="form-control" defaultValue="" placeholder="Phone Number" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="date-time">
                        <i className="far fa-calendar-alt"></i>
                      </label>
                      {' '}
                      <input type="datetime-local" id="date-time" name="date-time" className="form-control" defaultValue="" placeholder="Date & Time" />
                    </div>
                    {' '}
                    <button type="submit" className="theme-btn btn-border w-100">
                      appointment now
                      <i className="far fa-long-arrow-right"></i>
                    </button>
                  </NetlifyForm>
                </div>
                <div className="widget widget-btns wow fadeInUp delay-0-2s">
                  <a href="/contact" className="theme-btn style-four mb-10">
                    Download Pdf
                    {' '}
                    <i className="far fa-file-pdf"></i>
                  </a>
                  {' '}
                  <a href="/contact" className="theme-btn">
                    download brochure
                    {' '}
                    <i className="far fa-file-word"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
