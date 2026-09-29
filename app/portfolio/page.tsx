import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';

export const metadata: Metadata = {
  title: "Portfolio",
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
                <li className="breadcrumb-item active">Portfolio</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="gallery-page-area rel z-1 pt-120 rpt-90 pb-100 rpb-70">
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
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-md-8">
              <div className="gallery-item style-two wow fadeInUp delay-0-2s">
                <img src="/assets/images/gellary/gallery-big1.jpg" alt="Gallery" />
                {' '}
                <div className="gallery-content">
                  <a href="/assets/images/gellary/gallery-big1.jpg" className="icon" data-lightbox="image"></a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="gallery-item style-two wow fadeInUp delay-0-4s">
                <img src="/assets/images/gellary/gallery3.jpg" alt="Gallery" />
                {' '}
                <div className="gallery-content">
                  <a href="/assets/images/gellary/gallery3.jpg" className="icon" data-lightbox="image"></a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="gallery-item style-two wow fadeInUp delay-0-6s">
                <img src="/assets/images/gellary/gallery5.jpg" alt="Gallery" />
                {' '}
                <div className="gallery-content">
                  <a href="/assets/images/gellary/gallery5.jpg" className="icon" data-lightbox="image"></a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="gallery-item style-two wow fadeInUp delay-0-2s">
                <img src="/assets/images/gellary/gallery2.jpg" alt="Gallery" />
                {' '}
                <div className="gallery-content">
                  <a href="/assets/images/gellary/gallery2.jpg" className="icon" data-lightbox="image"></a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-8 order-mo-2">
              <div className="gallery-item style-two wow fadeInUp delay-0-4s">
                <img src="/assets/images/gellary/gallery-big2.jpg" alt="Gallery" />
                {' '}
                <div className="gallery-content">
                  <a href="/assets/images/gellary/gallery-big2.jpg" className="icon" data-lightbox="image"></a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="gallery-item style-two wow fadeInUp delay-0-6s">
                <img src="/assets/images/gellary/gallery4.jpg" alt="Gallery" />
                {' '}
                <div className="gallery-content">
                  <a href="/assets/images/gellary/gallery4.jpg" className="icon" data-lightbox="image"></a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-8">
              <div className="gallery-item style-two wow fadeInUp delay-0-2s">
                <img src="/assets/images/gellary/gallery-big5.jpg" alt="Gallery" />
                {' '}
                <div className="gallery-content">
                  <a href="/assets/images/gellary/gallery-big5.jpg" className="icon" data-lightbox="image"></a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="gallery-item style-two wow fadeInUp delay-0-4s">
                <img src="/assets/images/gellary/gallery7.jpg" alt="Gallery" />
                {' '}
                <div className="gallery-content">
                  <a href="/assets/images/gellary/gallery7.jpg" className="icon" data-lightbox="image"></a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="gallery-item style-two wow fadeInUp delay-0-6s">
                <img src="/assets/images/gellary/gallery8.jpg" alt="Gallery" />
                {' '}
                <div className="gallery-content">
                  <a href="/assets/images/gellary/gallery8.jpg" className="icon" data-lightbox="image"></a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-8">
              <div className="gallery-item style-two wow fadeInUp delay-0-4s">
                <img src="/assets/images/gellary/gallery-big6.jpg" alt="Gallery" />
                {' '}
                <div className="gallery-content">
                  <a href="/assets/images/gellary/gallery-big6.jpg" className="icon" data-lightbox="image"></a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="gallery-item style-two wow fadeInUp delay-0-6s">
                <img src="/assets/images/gellary/gallery10.jpg" alt="Gallery" />
                {' '}
                <div className="gallery-content">
                  <a href="/assets/images/gellary/gallery10.jpg" className="icon" data-lightbox="image"></a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="gallery-item style-two wow fadeInUp delay-0-2s">
                <img src="/assets/images/gellary/gallery9.jpg" alt="Gallery" />
                {' '}
                <div className="gallery-content">
                  <a href="/assets/images/gellary/gallery9.jpg" className="icon" data-lightbox="image"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
