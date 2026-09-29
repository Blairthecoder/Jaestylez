import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { ShopCatalog, ShopProvider, ShopSidebar } from '@/app/components/shop';
import { PageBanner } from '@/app/components/sections';
import { ReviewCards } from '@/app/components/reviews-ui';
import { reviewsFor } from '@/app/content/reviews';
import { photos, photoUrl } from '@/app/content/photos';

export const metadata: Metadata = {
  title: { absolute: 'Natural Hair Products Made in Houston | Jae Stylez' },
  description:
    'Shop The Lox Box by Jae Stylez for Houston-made hair oils, hydration mists, styling products and healthy-hair essentials for locs and natural textures.',
};

export default function Page() {
  return (
    <SiteShell header="three" footerClassName="">
      <PageBanner title="Shop" crumbs={[{ label: 'Shop' }]} />

      <section className="shop-intro py-80 rpy-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="landing-eyebrow">THE LOX BOX · MADE IN HOUSTON</span>
              <h2 className="landing-heading mb-20">Loc and Natural Hair Care From the Salon</h2>
              <p>
                The Lox Box line (growth tonic, peppermint hair whip, hydration mist, styling gel, and bundles) is made
                in Houston and sold in the salon and online.
              </p>
              <p>
                Pick them up at the salon or order them here. Marilyn Jae Cosmetics is the beauty line from the same founder.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="landing-photo rmt-55">
                <img src={photoUrl(photos.loxBox)} alt={photos.loxBox.alt} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shop-page-area bg-lighter-two pt-100 rpt-80 pb-150 rpb-100">
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

      <ReviewCards reviews={reviewsFor(['shop', 'healthy', 'locs'], 2)} title="Clients on Jae and Her Products" />
    </SiteShell>
  );
}
