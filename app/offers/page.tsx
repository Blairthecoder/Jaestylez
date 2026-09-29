import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { PricingTabs } from '@/app/components/live-services';

export const metadata: Metadata = {
  title: "Offers",
};

export default function Page() {
  return (
    <SiteShell header="three" footerClassName="mt-80">
      <section className="page-banner text-white py-190 rpy-130" style={{ backgroundImage: "url(/assets/images/banner/banner.jpg)" }}>
        <div className="container">
          <div className="banner-inner">
            <h1 className="page-title wow fadeInRight delay-0-2s">Offers</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center wow fadeInLeft delay-0-2s">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">Special Offers</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="why-choose-three pt-120 rpt-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7">
              <div className="section-title text-center mb-65">
                <h2 className="title">why choose qutter</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptate accusantium doloremque laudantium totam aperiam eaque quae abillo
                </p>
                {' '}
                <span className="sub-title">Feaurtes</span>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-two wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-save-money"></i>
                </div>
                <div className="content">
                  <h3>
                    <a href="/service-details">25% Save Money</a>
                  </h3>
                  <p>Sed persp ciatis unde omnis natus error voluptate</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-two wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="flaticon-shopping-cart"></i>
                </div>
                <div className="content">
                  <h3>
                    <a href="/service-details">Online Buy Product</a>
                  </h3>
                  <p>Sed persp ciatis unde omnis natus error voluptate</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-two wow fadeInUp delay-0-6s">
                <div className="icon">
                  <i className="flaticon-home"></i>
                </div>
                <div className="content">
                  <h3>
                    <a href="/service-details">Service For Home</a>
                  </h3>
                  <p>Sed persp ciatis unde omnis natus error voluptate</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-two wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-dumbbell"></i>
                </div>
                <div className="content">
                  <h3>
                    <a href="/service-details">Yoga & GYM</a>
                  </h3>
                  <p>Sed persp ciatis unde omnis natus error voluptate</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-two wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="flaticon-fork"></i>
                </div>
                <div className="content">
                  <h3>
                    <a href="/service-details">Restaurant</a>
                  </h3>
                  <p>Sed persp ciatis unde omnis natus error voluptate</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-two wow fadeInUp delay-0-6s">
                <div className="icon">
                  <i className="flaticon-soap"></i>
                </div>
                <div className="content">
                  <h3>
                    <a href="/service-details">Covid 19 Preventions</a>
                  </h3>
                  <p>Sed persp ciatis unde omnis natus error voluptate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="offer-page-about pt-100 rpt-70 pb-130 rpb-100">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="offer-about-image rmb-75 wow fadeInLeft delay-0-2s">
                <img src="/assets/images/about/offer-page.jpg" alt="About" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="offer-about-content wow fadeInRight delay-0-2s">
                <div className="section-title mb-25">
                  <h2 className="title">smart offer for hair & body treatments</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam remaperia meue ipsa quae ab illo inventore veritatis quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptate olup sit aspernatur aut odit fugit sed consequuntue
                </p>
                <div className="row mt-30">
                  <div className="col-sm-6">
                    <div className="counter-item">
                      <i className="flaticon-beauty-salon"></i>
                      {' '}
                      <div className="content">
                        <span className="count-text plus" data-speed="3000" data-stop="35">0</span>
                        {' '}
                        <span>Expert Members</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-item">
                      <i className="flaticon-medal"></i>
                      {' '}
                      <div className="content">
                        <span className="count-text plus" data-speed="3000" data-stop="96">0</span>
                        {' '}
                        <span>Winning Awards</span>
                      </div>
                    </div>
                  </div>
                </div>
                {' '}
                <a href="/about" className="theme-btn mt-10">
                  more about us
                  {' '}
                  <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing-plan-four bgs-cover pt-120 rpt-90 pb-130 rpb-100" style={{ backgroundImage: "url(/assets/images/background/offer-page-price.jpg)" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-12">
              <div className="section-title text-white text-center mb-55">
                <h2 className="title">awesome pricing plan</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptate accusantium doloremque laudantium totam aperiam eaque quae abillo
                </p>
                {' '}
                <span className="sub-title">Pricing</span>
              </div>
            </div>
          </div>
          <PricingTabs />
        </div>
      </section>
      <section className="gallery-area-four rel z-1 pt-120 rpt-90 pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center mb-70">
                <h2 className="title">Latest photo gallery</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptate accusantium doloremque laudantium totam aperiam eaque quae abillo
                </p>
                {' '}
                <span className="sub-title">gallery</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="gallery-item style-two wow fadeInUp delay-0-2s">
                <img src="/assets/images/gellary/gallery-two1.jpg" alt="Gallery" />
                {' '}
                <div className="gallery-content">
                  <a href="/assets/images/gellary/gallery-two1.jpg" className="icon" data-lightbox="image"></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="gallery-item style-two wow fadeInUp delay-0-4s">
                <img src="/assets/images/gellary/gallery-two2.jpg" alt="Gallery" />
                {' '}
                <div className="gallery-content">
                  <a href="/assets/images/gellary/gallery-two2.jpg" className="icon" data-lightbox="image"></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="gallery-item style-two wow fadeInUp delay-0-6s">
                <img src="/assets/images/gellary/gallery-two3.jpg" alt="Gallery" />
                {' '}
                <div className="gallery-content">
                  <a href="/assets/images/gellary/gallery-two3.jpg" className="icon" data-lightbox="image"></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="gallery-item style-two wow fadeInUp delay-0-2s">
                <img src="/assets/images/gellary/gallery-two4.jpg" alt="Gallery" />
                {' '}
                <div className="gallery-content">
                  <a href="/assets/images/gellary/gallery-two4.jpg" className="icon" data-lightbox="image"></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="gallery-item style-two wow fadeInUp delay-0-4s">
                <img src="/assets/images/gellary/gallery-two5.jpg" alt="Gallery" />
                {' '}
                <div className="gallery-content">
                  <a href="/assets/images/gellary/gallery-two5.jpg" className="icon" data-lightbox="image"></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="gallery-item style-two wow fadeInUp delay-0-6s">
                <img src="/assets/images/gellary/gallery-two6.jpg" alt="Gallery" />
                {' '}
                <div className="gallery-content">
                  <a href="/assets/images/gellary/gallery-two6.jpg" className="icon" data-lightbox="image"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
