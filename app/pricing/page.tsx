import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { PricingTabs, PricingColumns } from '@/app/components/live-services';

export const metadata: Metadata = {
  title: "Pricing",
};

export default function Page() {
  return (
    <SiteShell header="three" footerClassName="mt-80">
      <section className="page-banner text-white py-190 rpy-130" style={{ backgroundImage: "url(/assets/images/banner/banner.jpg)" }}>
        <div className="container">
          <div className="banner-inner">
            <h1 className="page-title wow fadeInRight delay-0-2s">Pricing</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center wow fadeInLeft delay-0-2s">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">Pricing Plan</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="pricing-plan-page bg-lighter-two pt-120 rpt-90 pb-130 rpb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-11">
              <div className="section-title text-center mb-65">
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
      <section className="pricing-area-two pt-120 rpt-90 pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center mb-65">
                <h2 className="title">awesome pricing plan</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptate accusantium doloremque laudantium totam aperiam eaque quae abillo
                </p>
                {' '}
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
