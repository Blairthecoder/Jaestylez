import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { GalleryGrid } from '@/app/components/gallery-grid';
import { PageBanner } from '@/app/components/sections';
import { ReviewCards } from '@/app/components/reviews-ui';
import { reviewsFor } from '@/app/content/reviews';

export const metadata: Metadata = {
  title: 'Hair Styles',
  description:
    'Photos of locs, twists, braids, curls and silk presses by Jae Stylez, a loctician and natural hair stylist in Stafford, TX.',
};

export default function Page() {
  return (
    <SiteShell header="three" footerClassName="">
      <PageBanner title="Hair Styles" crumbs={[{ label: 'Hair Styles' }]} />
      <section className="gallery-page-area py-120 rpy-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center mb-40">
                <h2 className="title">Jae Styles Hair Gallery</h2>
                <p>
                  Locs, twists, braids, curls and silk presses from the chair. Filter by style and tap a photo to see it
                  larger.
                </p>
              </div>
            </div>
          </div>
          <GalleryGrid />
          <div className="text-center mt-30">
            <a className="theme-btn" href="/services#book">
              book your style <i className="far fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
      <ReviewCards reviews={reviewsFor(['styles', 'gallery', 'first-visit'], 3)} title="Clients on Their Styles" />
    </SiteShell>
  );
}
