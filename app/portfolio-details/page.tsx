import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { NetlifyForm } from '@/app/components/forms';

export const metadata: Metadata = {
  title: "Portfolio Details",
};

export default function Page() {
  return (
    <SiteShell header="three" footerClassName="mt-80">
      <section className="page-banner text-white py-190 rpy-130" style={{ backgroundImage: "url(/assets/images/banner/banner.jpg)" }}>
        <div className="container">
          <div className="banner-inner">
            <h1 className="page-title wow fadeInRight delay-0-2s">Portfolio</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center wow fadeInLeft delay-0-2s">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">Portfolio Details</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="gallery-details-area rel z-1 py-130 rpy-100">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="image mb-30 wow fadeInUp delay-0-2s">
                <img src="/assets/images/gellary/portfolio-details1.jpg" alt="Portfolio" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="image mb-30 wow fadeInUp delay-0-4s">
                <img src="/assets/images/gellary/portfolio-details2.jpg" alt="Portfolio" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="image wow fadeInUp delay-0-2s">
                <img src="/assets/images/gellary/portfolio-details3.jpg" alt="Portfolio" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="protfolio-details-content pt-40 pb-10 wow fadeInUp delay-0-2s">
                <h2>Hair Cutting & Colors</h2>
                <p className="first-letter">
                  <span>M</span>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae abillo inventore veritatis quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur odit aut fugit sed consequuntur magni dolores eos ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem sum quia dolor sit amet consectetur, adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid exea commode consequatur autem vel eum iure reprehenderit qui in ea voluptate
                </p>
                <h3>bodt treatments & Massage</h3>
                <p>
                  But I must explain toou how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the acteachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are
                </p>
              </div>
              <hr />
              <div className="gallery-prev-next pt-40 pb-70">
                <div className="gpn-item wow fadeInRight delay-0-2s">
                  <img src="/assets/images/gellary/next-gallery.jpg" alt="" />
                  {' '}
                  <a href="/portfolio-details" className="overlay-hover">
                    <i className="fal fa-long-arrow-left"></i>
                  </a>
                </div>
                <div className="gpn-item wow fadeInLeft delay-0-2s">
                  <img src="/assets/images/gellary/prev-gallery.jpg" alt="" />
                  {' '}
                  <a href="/portfolio-details" className="overlay-hover">
                    <i className="fal fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
              <NetlifyForm formName="comment" className="comment-form wow fadeInUp delay-0-2s">
                <h3 className="title mb-35">Leave a Comments</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" id="name" name="name" className="form-control" defaultValue="" placeholder="Full name here" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="email" id="email" name="email" className="form-control" defaultValue="" placeholder="Email Address" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" id="phone" name="phone" className="form-control" defaultValue="" placeholder="Phone Number" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="url" id="website" name="website" className="form-control" defaultValue="" placeholder="website" required />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea name="message" id="message" className="form-control" rows={4} placeholder="Write comment" required></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button type="submit" className="theme-btn w-100">
                        send comments
                        {' '}
                        <i className="far fa-long-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </NetlifyForm>
            </div>
            <div className="col-lg-4">
              <div className="portfolio-description rmt-55">
                <h3 className="title">project Details</h3>
                <ul>
                  <li>
                    <h5>Clients Name</h5>
                    {' '}
                    <span>William J. Chambers</span>
                  </li>
                  <li>
                    <h5>Category</h5>
                    {' '}
                    <span>Hair Cutting & Colors</span>
                  </li>
                  <li>
                    <h5>Date & Time</h5>
                    {' '}
                    <span>25 September 2021</span>
                  </li>
                  <li>
                    <h5>Location</h5>
                    {' '}
                    <span>55 Main Street, New York</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
