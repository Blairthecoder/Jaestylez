import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { ServiceDetail } from '@/app/components/live-services';

export const metadata: Metadata = {
  title: "Service Details",
};

export default function Page() {
  return (
    <SiteShell header="three" footerClassName="mt-80">
      <section className="page-banner text-white py-190 rpy-130" style={{ backgroundImage: "url(/assets/images/banner/banner.jpg)" }}>
        <div className="container">
          <div className="banner-inner">
            <h1 className="page-title wow fadeInRight delay-0-2s">Details</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center wow fadeInLeft delay-0-2s">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">Service Details</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <ServiceDetail />
    </SiteShell>
  );
}
