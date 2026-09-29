import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { PricingColumns, PricingTabs } from '@/app/components/live-services';
import { PageBanner } from '@/app/components/sections';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Live prices, times and deposits for locs, twists, braids, silk press and more at Jae Stylez in Stafford, TX.',
};

export default function Page() {
  return (
    <SiteShell header="three" footerClassName="mt-80">
      <PageBanner title="Pricing" crumbs={[{ label: 'Pricing Plan' }]} />
      <section className="pricing-plan-page bg-lighter-two pt-120 rpt-90 pb-130 rpb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-11">
              <div className="section-title text-center mb-65">
                <h2 className="title">service pricing</h2>
                <p>
                  Prices and times come straight from the booking calendar. A non-refundable deposit reserves your time
                  and is applied to your service total. All services include a shampoo, except braided styles.
                </p>
                <span className="sub-title">Pricing</span>
              </div>
            </div>
          </div>
          <PricingTabs />
        </div>
      </section>
      <section className="pricing-area-two pt-120 rpt-90 pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center mb-65">
                <h2 className="title">most booked categories</h2>
                <p>A quick look at what is on the menu. The full list is on the Book Online page.</p>
                <span className="sub-title">Pricing</span>
              </div>
            </div>
          </div>
          <PricingColumns />
        </div>
      </section>
    </SiteShell>
  );
}
