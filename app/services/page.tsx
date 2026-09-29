import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { NiceSelect } from '@/app/components/nice-select';
import { NetlifyForm } from '@/app/components/forms';

export const metadata: Metadata = {
  title: "Services",
};

export default function Page() {
  return (
    <SiteShell header="three" footerClassName="mt-80">
      <section className="page-banner text-white py-190 rpy-130" style={{ backgroundImage: "url(/assets/images/banner/banner.jpg)" }}>
        <div className="container">
          <div className="banner-inner">
            <h1 className="page-title wow fadeInRight delay-0-2s">Services</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center wow fadeInLeft delay-0-2s">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">Services</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="about-us-four py-130 rpt-100 rpb-90">
        <div className="container">
          <div className="row align-items-center justify-content-around">
            <div className="col-lg-6">
              <div className="about-left-image rmb-55 wow fadeInUp delay-0-2s">
                <img src="/assets/images/about/service-page-about.jpg" alt="About Left" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="about-content-four wow fadeInUp delay-0-4s">
                <h3 className="experience mb-35">
                  <span className="number">25</span>
                  {' '}
                  years of experience
                </h3>
                <div className="section-title mb-35">
                  <h2 className="title">we’re Best barbers & hair cutting salon</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, consequuntur magni dolores eos qui ratione sed quia sequi nesciunt.
                </p>
                <div className="our-author mt-20">
                  <img src="/assets/images/about/author.jpg" alt="Authro" />
                  {' '}
                  <div className="content">
                    <h4>Randall J. Goodman</h4>
                    {' '}
                    <img src="/assets/images/about/signature.png" alt="Signature" />
                  </div>
                </div>
                {' '}
                <img className="about-bg-shape" src="/assets/images/about/about-bg-shape.png" alt="BG Shape" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="what-we-offer-three bg-black rel z-2 pt-120 rpt-90 pb-130 rpb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="section-title text-white text-center mb-55">
                <h2 className="title">what we offers</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptate accusantium doloremque laudantium totam aperiam eaque quae abillo
                </p>
                {' '}
                <span className="sub-title">Services</span>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
              <div className="ww-offer-item wow fadeInUp delay-0-2s">
                <i className="flaticon-salon"></i>
                {' '}
                <h4>
                  <a href="/service-details">Hair Cutting</a>
                </h4>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
              <div className="ww-offer-item wow fadeInUp delay-0-3s">
                <i className="flaticon-shampoo"></i>
                {' '}
                <h4>
                  <a href="/service-details">Hair Washing</a>
                </h4>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
              <div className="ww-offer-item wow fadeInUp delay-0-4s">
                <i className="flaticon-hot-stone"></i>
                {' '}
                <h4>
                  <a href="/service-details">Body Massage</a>
                </h4>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
              <div className="ww-offer-item wow fadeInUp delay-0-5s">
                <i className="flaticon-treatment"></i>
                {' '}
                <h4>
                  <a href="/service-details">Beauty & Spa</a>
                </h4>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
              <div className="ww-offer-item wow fadeInUp delay-0-6s">
                <i className="flaticon-shaving-razor"></i>
                {' '}
                <h4>
                  <a href="/service-details">Stylist Shaving</a>
                </h4>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
              <div className="ww-offer-item wow fadeInUp delay-0-7s">
                <i className="flaticon-hair-dye"></i>
                {' '}
                <h4>
                  <a href="/service-details">Hair Colors</a>
                </h4>
              </div>
            </div>
          </div>
          <div className="row align-items-center mt-30">
            <div className="col-lg-5">
              <div className="morder-tools-content text-white rmb-55 wow fadeInLeft delay-0-2s">
                <h3>modern tools for your hair style fashion</h3>
                <p>
                  Sed ut perspiciatis unde omnis natus voluptae accusantium doloremque laudantium totam aper iam eaque ipsa quae ab illo inventore veritatis et quase architecto beatae vitae dictae explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia
                </p>
                {' '}
                <a href="/about" className="theme-btn style-four mt-20">
                  learn more
                  {' '}
                  <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="morder-toots-image wow fadeInRight delay-0-2s">
                <img src="/assets/images/about/modern-tools.jpg" alt="Modern Tools" />
              </div>
            </div>
          </div>
        </div>
        <div className="services-shapes">
          <img className="shape-one" src="/assets/images/shapes/wwo-one.png" alt="Shape" />
          {' '}
          <img className="shape-two" src="/assets/images/shapes/wwo-two.png" alt="Shape" />
        </div>
      </section>
      <section className="working-contact pt-100 rpt-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="working-hour text-white bgs-cover mt-30 br-10 overflow-hidden p-60 py-50 wow fadeInUp delay-0-2s" style={{ backgroundImage: "url(/assets/images/background/working-hour-bg.jpg)" }}>
                <h3>working hours</h3>
                <p>Sit amet consectetur adipiscing elit eiusmod tempor incididunt labore dolorema</p>
                <table>
                  <tr>
                    <td>MONDAY</td>
                    <td>09.00-19.00</td>
                  </tr>
                  <tr>
                    <td>TUESDAY</td>
                    <td>09.00-19.00</td>
                  </tr>
                  <tr>
                    <td>FRIDAY</td>
                    <td>09.00-19.00</td>
                  </tr>
                  <tr>
                    <td>SATUREDAY</td>
                    <td>09.00-19.00</td>
                  </tr>
                  <tr>
                    <td>SUNDAY</td>
                    <td>
                      <span className="color-yellow">Closed</span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-form-wrap br-10 overflow-hidden mt-30">
                <NetlifyForm formName="appointment" className="bg-yellow bgs-cover wow fadeInUp delay-0-4s" style={{ backgroundImage: "url(/assets/images/contact/contact-bg.png)" }}>
                  <div className="row justify-content-center mb-35 text-white text-center">
                    <div className="col-lg-10">
                      <div className="section-title text-white">
                        <h2 className="title">Make appointment</h2>
                      </div>
                      <p>
                        Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua suspendisse
                      </p>
                    </div>
                  </div>
                  <div className="row small-gap">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" id="name" name="name" className="form-control" defaultValue="" placeholder="Your Full Name" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="email" id="email" name="email" className="form-control" defaultValue="" placeholder="Email Address" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" id="phone" name="phone" className="form-control" defaultValue="" placeholder="Phone Number" required />
                      </div>
                    </div>
                    <div className="col-md-6 mb-20">
                      <div className="form-group">
                        <NiceSelect name="select-category" id="select-category" options={[{"value":"Select Category","label":"Select Category"},{"value":"Beauty & Spa","label":"Beauty & Spa"},{"value":"Body Massage","label":"Body Massage"},{"value":"Shaving & Facial","label":"Shaving & Facial"},{"value":"Hair Color","label":"Hair Color"}]} />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="date-time">
                          <i className="far fa-calendar-alt"></i>
                        </label>
                        {' '}
                        <input type="datetime-local" id="date-time" name="date-time" className="form-control" defaultValue="" placeholder="Appointment Date & Time" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn btn-border w-100">
                          appointment now
                          <i className="far fa-long-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </NetlifyForm>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news-area-two rel z-2 pt-120 rpt-90 pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center mb-10">
            <div className="col-xl-6 col-lg-7">
              <div className="section-title text-center mb-60">
                <h2 className="title">latest news & blog</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptate accusantium doloremque laudantium totam aperiam eaque quae abillo
                </p>
                {' '}
                <span className="sub-title">blogs</span>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="news-item style-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="/assets/images/blog/news4.jpg" alt="News" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-user-circle"></i>
                      {' '}
                      <a href="#">Michael M.</a>
                    </li>
                    <li>
                      <i className="far fa-comments"></i>
                      {' '}
                      <a href="#">Comm (05)</a>
                    </li>
                  </ul>
                  <h5>
                    <a href="/blog-details">Started With Node An Introduction To APIs, HTTP And ES6+ JavaScript</a>
                  </h5>
                  {' '}
                  <a href="/blog-details" className="read-more">
                    Read more
                    {' '}
                    <i className="far fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item style-two wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="/assets/images/blog/news5.jpg" alt="News" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-user-circle"></i>
                      {' '}
                      <a href="#">Michael M.</a>
                    </li>
                    <li>
                      <i className="far fa-comments"></i>
                      {' '}
                      <a href="#">Comm (05)</a>
                    </li>
                  </ul>
                  <h5>
                    <a href="/blog-details">Deep Dive Into The Wonderful World Of SVG Displacement Filtering</a>
                  </h5>
                  {' '}
                  <a href="/blog-details" className="read-more">
                    Read more
                    {' '}
                    <i className="far fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item style-two wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="/assets/images/blog/news6.jpg" alt="News" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-user-circle"></i>
                      {' '}
                      <a href="#">Michael M.</a>
                    </li>
                    <li>
                      <i className="far fa-comments"></i>
                      {' '}
                      <a href="#">Comm (05)</a>
                    </li>
                  </ul>
                  <h5>
                    <a href="/blog-details">Started With Node An Introduction To APIs, HTTP And ES6+ JavaScript</a>
                  </h5>
                  {' '}
                  <a href="/blog-details" className="read-more">
                    Read more
                    {' '}
                    <i className="far fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
