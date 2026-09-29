import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { ProductDetail } from '@/app/components/product-detail';

export const metadata: Metadata = {
  title: 'Product Details',
};

// One static page serves every product: the product is picked from ?slug=... in the browser.
export default function Page() {
  return (
    <SiteShell header="three" footerClassName="">
      <section
        className="page-banner text-white py-190 rpy-130"
        style={{ backgroundImage: 'url(/images/jae/banner.jpg)' }}
      >
        <div className="container">
          <div className="banner-inner">
            <h1 className="page-title wow fadeInRight delay-0-2s">Shop</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center wow fadeInLeft delay-0-2s">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/shop">Shop</a>
                </li>
                <li className="breadcrumb-item active">Product Details</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <ProductDetail />
    </SiteShell>
  );
}
