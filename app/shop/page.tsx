import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { PriceFilter, ShopCatalog, ShopProvider } from '@/app/components/shop';

export const metadata: Metadata = {
  title: "Shop",
};

export default function Page() {
  return (
    <SiteShell header="three" footerClassName="">
      <section className="page-banner text-white py-190 rpy-130" style={{ backgroundImage: "url(/assets/images/banner/banner.jpg)" }}>
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
              <div className="shop-sidebar rmb-75">
                <div className="widget widget-category  wow fadeInUp delay-0-2s">
                  <h5 className="widget-title">Product Categories</h5>
                  <ul className="list-style-one">
                    <li>
                      <a href="/shop">Canvas Basket</a>
                    </li>
                    <li>
                      <a href="/shop">Decoration</a>
                    </li>
                    <li>
                      <a href="/shop">Essentials</a>
                    </li>
                    <li>
                      <a href="/shop">Furniture</a>
                    </li>
                    <li>
                      <a href="/shop">Interior</a>
                    </li>
                    <li>
                      <a href="/shop">Lights</a>
                    </li>
                    <li>
                      <a href="/shop">outdoor</a>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-filter  wow fadeInUp delay-0-2s">
                  <h5 className="widget-title">Filter by Price</h5>
                  <PriceFilter />
                </div>
                <div className="widget widget-products  wow fadeInUp delay-0-2s">
                  <h5 className="widget-title">Sale Products</h5>
                  <ul>
                    <li>
                      <div className="image">
                        <img src="/assets/images/widgets/widget-product1.png" alt="Product" />
                      </div>
                      <div className="content">
                        <h5>
                          <a href="/product-details">Hair Surface</a>
                        </h5>
                        {' '}
                        <a href="#" className="category">Smart Watch</a>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img src="/assets/images/widgets/widget-product2.png" alt="Product" />
                      </div>
                      <div className="content">
                        <h5>
                          <a href="/product-details">Home Decore</a>
                        </h5>
                        {' '}
                        <a href="#" className="category">Table Lamp</a>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img src="/assets/images/widgets/widget-product3.png" alt="Product" />
                      </div>
                      <div className="content">
                        <h5>
                          <a href="/product-details">Shoe Collect</a>
                        </h5>
                        {' '}
                        <a href="#" className="category">Men Shoe</a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-tag-cloud  wow fadeInUp delay-0-2s">
                  <h5 className="widget-title">Product Tags</h5>
                  <div className="tag-coulds">
                    <a href="/shop">Contemporary</a>
                    {' '}
                    <a href="/shop">Medical</a>
                    {' '}
                    <a href="/shop">Minimal</a>
                    {' '}
                    <a href="/shop">Face Mask</a>
                    {' '}
                    <a href="/shop">Covid 19</a>
                  </div>
                </div>
              </div>
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
