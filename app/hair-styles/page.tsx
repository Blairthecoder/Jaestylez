import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { galleryIds, wixMedia } from '@/app/gallery-data';

export const metadata: Metadata = {
  title: 'Hair Styles',
  description: 'Photos of locs, twists, silk presses and protective styles by Jae Stylez in Stafford, TX.',
};

export default function Page() {
  return (
    <SiteShell header="three" footerClassName="">
      <section
        className="page-banner text-white py-190 rpy-130"
        style={{ backgroundImage: 'url(/assets/images/banner/banner.jpg)' }}
      >
        <div className="container">
          <div className="banner-inner">
            <h1 className="page-title wow fadeInRight delay-0-2s">Hair Styles</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center wow fadeInLeft delay-0-2s">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">Hair Styles</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="gallery-page-area py-120 rpy-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center mb-50">
                <h2 className="title">Jae Styles Hair Gallery</h2>
                <p>Locs, twists, silk presses and protective styles from the chair. Tap a photo to see it larger.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {galleryIds.map((id, i) => (
              <div key={id} className="col-lg-4 col-md-6 mb-30">
                <a className="gallery-tile" href={wixMedia(id, 1400)} data-lightbox="image">
                  <img src={wixMedia(id, 640, 800)} alt={`Hair style by Jae Stylez, photo ${i + 1}`} loading="lazy" />
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-30">
            <a className="theme-btn" href="/services#book">
              book your style <i className="far fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
