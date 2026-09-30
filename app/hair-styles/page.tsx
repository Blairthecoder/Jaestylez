import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { GalleryGrid } from '@/app/components/gallery-grid';
import { PageBanner } from '@/app/components/sections';
import { Testimonials } from '@/app/components/reviews-ui';
import { reviewsFor } from '@/app/content/reviews';

export const metadata: Metadata = {
  title: 'Hair Styles',
  description:
    'Photos of locs, twists, braids, curls and silk presses by Jae Stylez, a loctician and natural hair stylist in Stafford, TX.',
};

export default function Page() {
  return (
    <SiteShell header="three" footerClassName="mt-80">
      <PageBanner title="Hair Styles" crumbs={[{ label: 'Hair Styles' }]} />
      <section className="gallery-page-area rel z-1 pt-120 rpt-90 pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center mb-50">
                <h2 className="title">Jae styles hair gallery</h2>
                <p>
                  Locs, twists, braids, curls and silk presses from the chair.
                  Filter by style and tap a photo to see it larger.
                </p>
                <span className="sub-title">gallery</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <GalleryGrid />
        </div>
        <div className="text-center mt-40">
          <a className="theme-btn" href="/book">
            book your style <i className="far fa-long-arrow-right"></i>
          </a>
        </div>
      </section>
      <Testimonials
        reviews={reviewsFor(['styles', 'gallery', 'first-visit'], 3)}
        title="What our clients say"
        text="Google reviews from clients about their styles."
      />
    </SiteShell>
  );
}
