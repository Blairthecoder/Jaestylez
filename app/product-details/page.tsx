import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { NetlifyForm, AddToCartForm } from '@/app/components/forms';

export const metadata: Metadata = {
  title: "Product Details",
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
                <li className="breadcrumb-item active">Product Details</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="product-details-page bg-lighter-two pt-130 rpt-100 pb-95 rpb-65">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="product-image-tab rmb-50 wow fadeInLeft delay-0-2s">
                <div className="preview-images tab-content">
                  <div className="preview-item tab-pane fade show active" id="previewOne">
                    <a href="/assets/images/shop/product-preview-1.png" data-lightbox="image">
                      <img src="/assets/images/shop/product-preview-1.png" alt="Preview" />
                    </a>
                  </div>
                  <div className="preview-item tab-pane fade" id="previewTwo">
                    <a href="/assets/images/shop/product-preview-1.png" data-lightbox="image">
                      <img src="/assets/images/shop/product-preview-1.png" alt="Preview" />
                    </a>
                  </div>
                  <div className="preview-item tab-pane fade" id="previewThree">
                    <a href="/assets/images/shop/product-preview-1.png" data-lightbox="image">
                      <img src="/assets/images/shop/product-preview-1.png" alt="Preview" />
                    </a>
                  </div>
                </div>
                <div className="thumb-images nav">
                  <a className="thumb-item nav-item active" href="#previewOne" data-toggle="tab">
                    <img src="/assets/images/shop/product-thumb-1.png" alt="Thumb" />
                  </a>
                  {' '}
                  <a className="thumb-item nav-item" href="#previewTwo" data-toggle="tab">
                    <img src="/assets/images/shop/product-thumb-2.png" alt="Thumb" />
                  </a>
                  {' '}
                  <a className="thumb-item nav-item" href="#previewThree" data-toggle="tab">
                    <img src="/assets/images/shop/product-thumb-3.png" alt="Thumb" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="product-details-content pt-20 wow fadeInRight delay-0-2s">
                <h3 className="title">
                  Cosmetic Product Packaging
                  {' '}
                  <span className="price">75</span>
                </h3>
                <div className="subtitle-ratting">
                  <span>Feature flexible, Cotton-covered</span>
                  {' '}
                  <div className="ratting">
                    <i className="fas fa-star"></i>
                    {' '}
                    <i className="fas fa-star"></i>
                    {' '}
                    <i className="fas fa-star"></i>
                    {' '}
                    <i className="fas fa-star"></i>
                    {' '}
                    <i className="far fa-star"></i>
                    {' '}
                    <span>(12)</span>
                  </div>
                </div>
                <div className="colors mt-15 mb-30">
                  <h5>Color</h5>
                  {' '}
                  <button className="bg-black"></button>
                  {' '}
                  <button className="bg-blue"></button>
                  {' '}
                  <button className="bg-yellow"></button>
                  {' '}
                  <button className="bg-gray"></button>
                  {' '}
                  <button className="bg-white"></button>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab ilinventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem
                </p>
                <ul className="category-tags pt-5">
                  <li>
                    <b>Categories:</b>
                    {' '}
                    <a href="#">Essentials</a>
                    {' '}
                    <a href="#">Lights</a>
                  </li>
                  <li>
                    <b>Tags:</b>
                    {' '}
                    <a href="#">Decor</a>
                    {' '}
                    <a href="#">Interior</a>
                  </li>
                </ul>
                <AddToCartForm className="add-to-cart mt-15">
                  {' '}
                  <button type="submit" className="theme-btn">Add to Cart</button>
                  {' '}
                  <button className="love">
                    <i className="far fa-heart"></i>
                  </button>
                </AddToCartForm>
              </div>
            </div>
          </div>
          <ul className="nav justify-content-center product-information-tab pt-100 rpt-65 mb-40">
            <li>
              <a href="#details" data-toggle="tab" className="active show">Description</a>
            </li>
            <li>
              <a href="#information" data-toggle="tab">Information</a>
            </li>
            <li>
              <a href="#review" data-toggle="tab">Review (5k)</a>
            </li>
          </ul>
          <div className="tab-content wow fadeInUp delay-0-2s">
            <div className="tab-pane active show" id="details">
              <h3>About Products</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
              </p>
            </div>
            <div className="tab-pane" id="information">
              <p>
                inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
              </p>
              <ul className="list-style-one my-15">
                <li>Strong lens for long distance surveillance.</li>
                <li>WIFI technology can view and view the Internet</li>
                <li>Wide Angle and Long Length</li>
                <li>Smart zooming point</li>
                <li>HD quality video output.</li>
                <li>Smart Alarming System</li>
                <li>Power system 12 volts (without adapter)</li>
              </ul>
              <p>
                Now wherever you are, wherever you are, you can easily monitor your CCTV videos through your mobile, tab, laptop or PC. With the wireless camera, you can view the camera from your mobile or computer to the right-left 0 to 360-degree video. Cover the flower room with a camera.
              </p>
            </div>
            <div className="tab-pane" id="review">
              <div className="comment-list">
                <h3 className="title mb-25">5k Reviews</h3>
                <div className="comment-body">
                  <div className="author-thumb">
                    <img src="/assets/images/blog/author1.jpg" alt="Author" />
                  </div>
                  <div className="comment-content">
                    <div className="name-date">
                      <h5>John F. Medina</h5>
                      {' '}
                      <span className="comment-date">25 Feb 2022</span>
                      {' '}
                      <div className="ratting">
                        <i className="fas fa-star"></i>
                        {' '}
                        <i className="fas fa-star"></i>
                        {' '}
                        <i className="fas fa-star"></i>
                        {' '}
                        <i className="fas fa-star"></i>
                        {' '}
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                    </p>
                    {' '}
                    <a href="#" className="reply-link">
                      Reply
                      {' '}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
                <div className="comment-body child-comment">
                  <div className="author-thumb">
                    <img src="/assets/images/blog/author2.jpg" alt="Author" />
                  </div>
                  <div className="comment-content">
                    <div className="name-date">
                      <h5>Jeffrey T. Kelly</h5>
                      {' '}
                      <span className="comment-date">25 Feb 2022</span>
                      {' '}
                      <div className="ratting">
                        <i className="fas fa-star"></i>
                        {' '}
                        <i className="fas fa-star"></i>
                        {' '}
                        <i className="fas fa-star"></i>
                        {' '}
                        <i className="fas fa-star"></i>
                        {' '}
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                    </p>
                    {' '}
                    <a href="#" className="reply-link">
                      Reply
                      {' '}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
                <div className="comment-body">
                  <div className="author-thumb">
                    <img src="/assets/images/blog/author3.jpg" alt="Author" />
                  </div>
                  <div className="comment-content">
                    <div className="name-date">
                      <h5>Richard B. Zellmer</h5>
                      {' '}
                      <span className="comment-date">25 Feb 2022</span>
                      {' '}
                      <div className="ratting">
                        <i className="fas fa-star"></i>
                        {' '}
                        <i className="fas fa-star"></i>
                        {' '}
                        <i className="fas fa-star"></i>
                        {' '}
                        <i className="fas fa-star"></i>
                        {' '}
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                    </p>
                    {' '}
                    <a href="#" className="reply-link">
                      Reply
                      {' '}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <NetlifyForm formName="comment" className="comment-form mt-55">
                <h3 className="title-two mb-15">Leave a Review</h3>
                <div className="your-ratting mb-25">
                  <h6>Your Ratting</h6>
                  <div className="ratting">
                    <i className="fas fa-star"></i>
                    {' '}
                    <i className="fas fa-star"></i>
                    {' '}
                    <i className="fas fa-star"></i>
                    {' '}
                    <i className="fas fa-star"></i>
                    {' '}
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" id="name" name="name" className="form-control" defaultValue="" placeholder="Full name here" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="email" id="email" name="email" className="form-control" defaultValue="" placeholder="Email Address" required />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea name="message" id="message" className="form-control" rows={4} placeholder="Write comment" required></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button type="submit" className="theme-btn w-100">
                        send comments
                        {' '}
                        <i className="far fa-long-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </NetlifyForm>
            </div>
          </div>
        </div>
      </section>
      <section className="related-product-area bg-lighter-two pb-175 rpb-145">
        <div className="container">
          <div className="section-title text-center mb-45">
            <h2>Related product</h2>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="/assets/images/shop/product2.png" alt="Product" />
                  {' '}
                  <div className="product-btns">
                    <a href="#">
                      <i className="fas fa-expand-wide"></i>
                    </a>
                    {' '}
                    <a href="#">
                      <i className="far fa-heart"></i>
                    </a>
                    {' '}
                    <a href="#">
                      <i className="far fa-shopping-cart"></i>
                    </a>
                  </div>
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star"></i>
                    {' '}
                    <i className="fas fa-star"></i>
                    {' '}
                    <i className="fas fa-star"></i>
                    {' '}
                    <i className="fas fa-star"></i>
                    {' '}
                    <i className="fas fa-star"></i>
                  </div>
                  <h5>
                    <a href="/product-details">Hair Dryer Blue Surface</a>
                  </h5>
                  {' '}
                  <span className="price">$23.97</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="/assets/images/shop/product3.png" alt="Product" />
                  {' '}
                  <div className="product-btns">
                    <a href="#">
                      <i className="fas fa-expand-wide"></i>
                    </a>
                    {' '}
                    <a href="#">
                      <i className="far fa-heart"></i>
                    </a>
                    {' '}
                    <a href="#">
                      <i className="far fa-shopping-cart"></i>
                    </a>
                  </div>
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star"></i>
                    {' '}
                    <i className="fas fa-star"></i>
                    {' '}
                    <i className="fas fa-star"></i>
                    {' '}
                    <i className="fas fa-star"></i>
                    {' '}
                    <i className="fas fa-star"></i>
                  </div>
                  <h5>
                    <a href="/product-details">Hair Dryer Blue Surface</a>
                  </h5>
                  {' '}
                  <span className="price">$23.97</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="/assets/images/shop/product4.png" alt="Product" />
                  {' '}
                  <div className="product-btns">
                    <a href="#">
                      <i className="fas fa-expand-wide"></i>
                    </a>
                    {' '}
                    <a href="#">
                      <i className="far fa-heart"></i>
                    </a>
                    {' '}
                    <a href="#">
                      <i className="far fa-shopping-cart"></i>
                    </a>
                  </div>
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star"></i>
                    {' '}
                    <i className="fas fa-star"></i>
                    {' '}
                    <i className="fas fa-star"></i>
                    {' '}
                    <i className="fas fa-star"></i>
                    {' '}
                    <i className="fas fa-star"></i>
                  </div>
                  <h5>
                    <a href="/product-details">Hair Dryer Blue Surface</a>
                  </h5>
                  {' '}
                  <span className="price">$23.97</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-8s">
                <div className="image">
                  <img src="/assets/images/shop/product5.png" alt="Product" />
                  {' '}
                  <div className="product-btns">
                    <a href="#">
                      <i className="fas fa-expand-wide"></i>
                    </a>
                    {' '}
                    <a href="#">
                      <i className="far fa-heart"></i>
                    </a>
                    {' '}
                    <a href="#">
                      <i className="far fa-shopping-cart"></i>
                    </a>
                  </div>
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star"></i>
                    {' '}
                    <i className="fas fa-star"></i>
                    {' '}
                    <i className="fas fa-star"></i>
                    {' '}
                    <i className="fas fa-star"></i>
                    {' '}
                    <i className="fas fa-star"></i>
                  </div>
                  <h5>
                    <a href="/product-details">Hair Dryer Blue Surface</a>
                  </h5>
                  {' '}
                  <span className="price">$23.97</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
