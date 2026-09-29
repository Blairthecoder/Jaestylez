import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { ShopCatalog, ShopProvider, ShopSidebar } from '@/app/components/shop';

export const metadata: Metadata = {
  title: 'Shop',
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
            <h1 className="page-title wow fadeInRight delay-0-2s">Shop</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center wow fadeInLeft delay-0-2s">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">Shop</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
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
    </SiteShell>
  );
}
