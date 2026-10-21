import type { Metadata } from 'next';
import { pageMeta } from '@/app/lib/seo';
import { SiteShell } from '@/app/site-shell';
import { ShopCatalog, ShopProvider, ShopSidebar } from '@/app/components/shop';
import { PageBanner } from '@/app/components/sections';
import { Testimonials } from '@/app/components/reviews-ui';
import { reviewsFor } from '@/app/content/reviews';

export const metadata: Metadata = pageMeta({
  title: 'Loc & Natural Hair Products Made in Houston | The Lox Box',
  description:
    'Shop The Lox Box: scalp oil, hair whip, hydration mist and styling gel for locs and natural hair, made in Houston by Jae Stylez.',
  path: '/shop',
});

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
