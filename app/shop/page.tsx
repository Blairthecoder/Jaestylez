import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { ShopCatalog, ShopProvider, ShopSidebar } from '@/app/components/shop';
import { PageBanner } from '@/app/components/sections';
import { Testimonials } from '@/app/components/reviews-ui';
import { reviewsFor } from '@/app/content/reviews';

export const metadata: Metadata = {
  title: { absolute: 'Natural Hair Products Made in Houston | Jae Stylez' },
  description:
    'Shop The Lox Box by Jae Stylez for Houston-made hair oils, hydration mists, styling products and healthy-hair essentials for locs and natural textures.',
};

export default function Page() {
  return (
    <SiteShell header="three" footerClassName="">
      <PageBanner title="Shop" crumbs={[{ label: 'Shop' }]} />

      <section className="shop-page-area bg-lighter-two pt-130 rpt-100 pb-210 rpb-150">
        <div className="container">
          <ShopProvider>
            <div className="row">
              <div className="col-xl-3 col-lg-4">
                <ShopSidebar />
              </div>
              <div className="col-xl-9 col-lg-8">
                <ShopCatalog />
              </div>
            </div>
          </ShopProvider>
        </div>
      </section>

      <Testimonials
        reviews={reviewsFor(['shop', 'healthy', 'locs'], 2)}
        title="What our clients say"
        text="The Lox Box line is made in Houston and sold in the salon and online."
      />
    </SiteShell>
  );
}
