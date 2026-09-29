import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { Slider } from '@/app/components/slider';
import { NiceSelect } from '@/app/components/nice-select';
import { NetlifyForm } from '@/app/components/forms';

export const metadata: Metadata = {
  title: "Barbers & Hair Cutting Salon",
};

export default function Page() {
  return (
    <SiteShell header="one" footerClassName="pb-30">
      <section className="hero-section py-250" style={{ backgroundImage: "url(/assets/images/hero/hero-bg.jpg)" }}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-7 col-lg-8">
              <div className="hero-content py-10 rpt-0 text-white rmb-70">
                <h1 className="wow fadeInUp delay-0-2s">Barbers & Hair Cutting</h1>
                <p className="wow fadeInUp delay-0-4s">
                  Sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua suspendisse ultrices gravida
                </p>
                {' '}
                <a href="/services" className="theme-btn wow fadeInUp delay-0-6s">
                  explore our services
                  {' '}
                  <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hero-video text-lg-right wow zoomIn delay-0-6s">
                <a href="https://www.youtube.com/watch?v=9Y7ma241N8k" className="mfp-iframe video-play" data-lightbox="video">
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bg-shapes"></div>
      </section>
      <section className="what-we-do-area pb-130 rpb-100">
        <div className="container">
          <div className="what-we-do-inner">
            <div className="row">
              <div className="col-xl-4">
                <div className="feature-image wow fadeInLeft delay-0-2s" style={{ backgroundImage: "url(/assets/images/about/what-we-do.jpg)" }}></div>
              </div>
              <div className="col-xl-8 align-self-center">
                <div className="what-we-do-content wow fadeInRight delay-0-2s">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="section-title mb-35">
                        <h2 className="title">What We Do</h2>
                        <p>
                          Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua suspendisse
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="feature-item">
                        <div className="icon">
                          <i className="flaticon-scissors"></i>
                        </div>
                        <div className="content">
                          <h4>
                            <a href="/service-details">Hair Cutting</a>
                          </h4>
                          <p>Quis autem vel eumu reres ender quiea voluptate</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="feature-item">
                        <div className="icon">
                          <i className="flaticon-straight-razor"></i>
                        </div>
                        <div className="content">
                          <h4>
                            <a href="/service-details">Shaving Style</a>
                          </h4>
                          <p>Quis autem vel eumu reres ender quiea voluptate</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="feature-item">
                        <div className="icon">
                          <i className="flaticon-beauty-treatment"></i>
                        </div>
                        <div className="content">
                          <h4>
                            <a href="/service-details">Spa & GYM</a>
                          </h4>
                          <p>Quis autem vel eumu reres ender quiea voluptate</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="feature-item">
                        <div className="icon">
                          <i className="flaticon-hot-stones"></i>
                        </div>
                        <div className="content">
                          <h4>
                            <a href="/service-details">Body Treatments</a>
                          </h4>
                          <p>Quis autem vel eumu reres ender quiea voluptate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us-area">
        <div className="row">
          <div className="col-xl-3 col-sm-6">
            <div className="about-left-image wow fadeInUp delay-0-2s">
              <img src="/assets/images/about/about-left.jpg" alt="About Left" />
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 order-xl-2">
            <div className="about-right-image wow fadeInUp delay-0-6s">
              <img src="/assets/images/about/about-right.jpg" alt="About Right" />
            </div>
          </div>
          <div className="col-xl-6 align-self-center">
            <div className="about-content rp-15 rpb-90 text-center wow fadeInUp delay-0-4s">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="section-title mb-35">
                    <h2 className="title">we’re Best barbers & hair cutting salon</h2>
                  </div>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
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
      </section>
      <section className="cta-area bgs-cover bg-yellow text-white py-40" style={{ backgroundImage: "url(/assets/images/background/cta-bg.png)" }}>
        <div className="container">
          <div className="row justify-content-center text-center align-items-center">
            <div className="col-xl-6 col-lg-7">
              <div className="section-title mt-5 wow fadeInLeft delay-0-2s">
                <h2>Ready to get our service ?</h2>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <a href="/contact" className="theme-btn btn-border my-10 wow fadeInRight delay-0-2s">
                appointment now
                {' '}
                <i className="far fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="services-area rel z-1 pt-120 rpt-90 pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="section-title text-center mb-55">
                <h2 className="title">Service we provide</h2>
                <p>
                  Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua suspendisse
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-salon"></i>
                </div>
                <div className="content">
                  <h3>
                    <a href="/service-details">Hair Cutting Style</a>
                  </h3>
                  <p>
                    Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  {' '}
                  <a href="/service-details" className="details-btn">
                    <i className="far fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="flaticon-shampoo"></i>
                </div>
                <div className="content">
                  <h3>
                    <a href="/service-details">Hair Washing</a>
                  </h3>
                  <p>
                    Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  {' '}
                  <a href="/service-details" className="details-btn">
                    <i className="far fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp delay-0-6s">
                <div className="icon">
                  <i className="flaticon-hot-stone"></i>
                </div>
                <div className="content">
                  <h3>
                    <a href="/service-details">Body Treatments</a>
                  </h3>
                  <p>
                    Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  {' '}
                  <a href="/service-details" className="details-btn">
                    <i className="far fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-treatment"></i>
                </div>
                <div className="content">
                  <h3>
                    <a href="/service-details">Beauty & Spa</a>
                  </h3>
                  <p>
                    Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  {' '}
                  <a href="/service-details" className="details-btn">
                    <i className="far fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="flaticon-shaving-razor"></i>
                </div>
                <div className="content">
                  <h3>
                    <a href="/service-details">Stylist Shaving</a>
                  </h3>
                  <p>
                    Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  {' '}
                  <a href="/service-details" className="details-btn">
                    <i className="far fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp delay-0-6s">
                <div className="icon">
                  <i className="flaticon-hair-dye"></i>
                </div>
                <div className="content">
                  <h3>
                    <a href="/service-details">Multi Hair Colors</a>
                  </h3>
                  <p>
                    Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  {' '}
                  <a href="/service-details" className="details-btn">
                    <i className="far fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="services-shapes">
          <img className="shape-one" src="/assets/images/shapes/service-one.png" alt="Shape" />
          {' '}
          <img className="shape-two" src="/assets/images/shapes/service-two.png" alt="Shape" />
        </div>
      </section>
      <section className="pricing-plan-area bgs-cover pt-120 rpt-90 pb-130 rpb-100" style={{ backgroundImage: "url(/assets/images/background/pricing-plan-bg.jpg)" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="section-title text-white text-center mb-55">
                <h2 className="title">awesome pricing plan</h2>
                <p>
                  Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua suspendisse
                </p>
              </div>
            </div>
          </div>
          <div className="price-tab-wrap p-40 bg-white">
            <ul className="nav nav-justified price-tab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#hair">
                  <i className="flaticon-beauty-salon"></i>
                  {' '}
                  <span>hair solutions</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#beauty">
                  <i className="flaticon-relax"></i>
                  {' '}
                  <span>beauty & spa</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#bodyy">
                  <i className="flaticon-massage"></i>
                  {' '}
                  <span>body treatments</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#washing">
                  <i className="flaticon-spa"></i>
                  {' '}
                  <span>Fash washing</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#meditations">
                  <i className="flaticon-yoga"></i>
                  {' '}
                  <span>meditations</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#shaving">
                  <i className="flaticon-razor-blade"></i>
                  {' '}
                  <span>shaving</span>
                </a>
              </li>
            </ul>
            <div className="tab-content price-tab-content">
              <div className="tab-pane fade show active" id="hair">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="price-item wow fadeInUp delay-0-2s">
                      <div className="image">
                        <img src="/assets/images/price/pp-image1.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Hair Cutting & Fitting</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$89</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item wow fadeInUp delay-0-4s">
                      <div className="image">
                        <img src="/assets/images/price/pp-image2.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Shaving & Facial</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$45</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item wow fadeInUp delay-0-2s">
                      <div className="image">
                        <img src="/assets/images/price/pp-image3.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Hair Color & Wash</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$35</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item wow fadeInUp delay-0-4s">
                      <div className="image">
                        <img src="/assets/images/price/pp-image4.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Body Massage</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$56</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item wow fadeInUp delay-0-2s">
                      <div className="image">
                        <img src="/assets/images/price/pp-image5.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Beauty & Spa</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$27</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item wow fadeInUp delay-0-4s">
                      <div className="image">
                        <img src="/assets/images/price/pp-image6.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Facial & Face Wash</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$63</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item wow fadeInUp delay-0-2s">
                      <div className="image">
                        <img src="/assets/images/price/pp-image7.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Backbone Massage</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$43</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item wow fadeInUp delay-0-4s">
                      <div className="image">
                        <img src="/assets/images/price/pp-image8.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Meditation & Massage</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$74</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="beauty">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image6.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Facial & Face Wash</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$63</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image7.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Backbone Massage</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$43</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image1.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Hair Cutting & Fitting</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$89</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image2.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Shaving & Facial</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$45</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image3.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Hair Color & Wash</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$35</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image4.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Body Massage</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$56</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image5.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Beauty & Spa</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$27</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image8.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Meditation & Massage</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$74</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="bodyy">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image4.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Body Massage</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$56</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image5.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Beauty & Spa</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$27</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image6.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Facial & Face Wash</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$63</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image1.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Hair Cutting & Fitting</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$89</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image2.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Shaving & Facial</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$45</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image3.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Hair Color & Wash</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$35</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image7.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Backbone Massage</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$43</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image8.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Meditation & Massage</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$74</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="washing">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image2.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Shaving & Facial</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$45</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image3.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Hair Color & Wash</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$35</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image1.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Hair Cutting & Fitting</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$89</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image4.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Body Massage</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$56</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image5.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Beauty & Spa</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$27</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image6.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Facial & Face Wash</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$63</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image7.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Backbone Massage</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$43</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image8.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Meditation & Massage</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$74</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="meditations">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image3.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Hair Color & Wash</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$35</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image4.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Body Massage</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$56</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image5.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Beauty & Spa</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$27</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image6.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Facial & Face Wash</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$63</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image1.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Hair Cutting & Fitting</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$89</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image2.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Shaving & Facial</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$45</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image7.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Backbone Massage</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$43</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image8.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Meditation & Massage</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$74</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="shaving">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image6.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Facial & Face Wash</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$63</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image7.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Backbone Massage</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$43</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image8.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Meditation & Massage</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$74</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image1.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Hair Cutting & Fitting</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$89</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image2.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Shaving & Facial</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$45</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image3.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Hair Color & Wash</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$35</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image4.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Body Massage</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$56</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="price-item">
                      <div className="image">
                        <img src="/assets/images/price/pp-image5.jpg" alt="Price" />
                      </div>
                      <div className="content">
                        <h5>Beauty & Spa</h5>
                        {' '}
                        <span>Clean & simple 30-40 minutes</span>
                      </div>
                      {' '}
                      <span className="price">$27</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery-area rel z-1 pt-120 rpt-90 pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-between align-items-end mb-40">
            <div className="col-xl-5 col-lg-6">
              <div className="section-title mb-15 wow fadeInLeft delay-0-2s">
                <h2 className="title">Latest photo gallery</h2>
                <p>
                  Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua suspendisse
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="section-header-btn text-lg-right mb-20 wow fadeInRight delay-0-2s">
                <a href="/portfolio" className="theme-btn">
                  explore more gallery
                  {' '}
                  <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-sm-6">
              <div className="gallery-item wow fadeInUp delay-0-2s">
                <img src="/assets/images/gellary/gallery1.jpg" alt="Gallery" />
                {' '}
                <div className="gallery-content">
                  <h3>Hair Cutting</h3>
                  <p>Barbers & Salon Services</p>
                  {' '}
                  <a href="/portfolio-details" className="details-btn">
                    <i className="far fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="gallery-item wow fadeInUp delay-0-4s">
                <img src="/assets/images/gellary/gallery2.jpg" alt="Gallery" />
                {' '}
                <div className="gallery-content">
                  <h3>Hair Cutting</h3>
                  <p>Barbers & Salon Services</p>
                  {' '}
                  <a href="/portfolio-details" className="details-btn">
                    <i className="far fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="gallery-item wow fadeInUp delay-0-6s">
                <img src="/assets/images/gellary/gallery3.jpg" alt="Gallery" />
                {' '}
                <div className="gallery-content">
                  <h3>Hair Cutting</h3>
                  <p>Barbers & Salon Services</p>
                  {' '}
                  <a href="/portfolio-details" className="details-btn">
                    <i className="far fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="gallery-item wow fadeInUp delay-0-8s">
                <img src="/assets/images/gellary/gallery4.jpg" alt="Gallery" />
                {' '}
                <div className="gallery-content">
                  <h3>Hair Cutting</h3>
                  <p>Barbers & Salon Services</p>
                  {' '}
                  <a href="/portfolio-details" className="details-btn">
                    <i className="far fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-area rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8"></div>
          </div>
          <div className="contact-form-wrap">
            <div className="image wow fadeInUp delay-0-2s" style={{ backgroundImage: "url(/assets/images/contact/left.jpg)" }}></div>
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
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="text" id="name" name="name" className="form-control" defaultValue="" placeholder="Your Full Name" required />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="email" id="email" name="email" className="form-control" defaultValue="" placeholder="Email Address" required />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="text" id="phone" name="phone" className="form-control" defaultValue="" placeholder="Phone Number" required />
                  </div>
                </div>
                <div className="col-lg-6 mb-20">
                  <div className="form-group">
                    <NiceSelect name="select-category" id="select-category" options={[{"value":"Select Category","label":"Select Category"},{"value":"Beauty & Spa","label":"Beauty & Spa"},{"value":"Body Massage","label":"Body Massage"},{"value":"Shaving & Facial","label":"Shaving & Facial"},{"value":"Hair Color","label":"Hair Color"}]} />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="date-time">
                      <i className="far fa-calendar-alt"></i>
                    </label>
                    {' '}
                    <input type="datetime-local" id="date-time" name="date-time" className="form-control" defaultValue="" placeholder="Appointment Date & Time" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <textarea name="message" id="message" className="form-control" rows={4} placeholder="Write Message" required></textarea>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mb-0">
                    <button type="submit" className="theme-btn btn-border w-100">
                      appointment now
                      <i className="far fa-long-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </NetlifyForm>
            <div className="image wow fadeInUp delay-0-6s" style={{ backgroundImage: "url(/assets/images/contact/right.jpg)" }}></div>
          </div>
        </div>
        <div className="contact-shapes">
          <img className="shape-one" src="/assets/images/shapes/contact-one.png" alt="Shape" />
          {' '}
          <img className="shape-two" src="/assets/images/shapes/contact-two.png" alt="Shape" />
        </div>
      </section>
      <section className="team-area rel z-1 pt-120 rpt-90 pb-95 rpb-65">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="section-title text-center mb-50">
                <h2 className="title">Meet our specialist</h2>
                <p>
                  Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua suspendisse
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="team-member-wrap">
            <div className="team-member wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="/assets/images/team/member1.jpg" alt="Member" />
                {' '}
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  {' '}
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  {' '}
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                  {' '}
                  <a href="#">
                    <i className="fab fa-rocketchat"></i>
                  </a>
                </div>
              </div>
              <div className="content">
                <h3>Scott K. Henderson</h3>
                {' '}
                <span className="designation">Hair Specialist</span>
              </div>
            </div>
            <div className="team-member wow fadeInUp delay-0-3s">
              <div className="image">
                <img src="/assets/images/team/member2.jpg" alt="Member" />
                {' '}
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  {' '}
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  {' '}
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                  {' '}
                  <a href="#">
                    <i className="fab fa-rocketchat"></i>
                  </a>
                </div>
              </div>
              <div className="content">
                <h3>Donald J. Cuellar</h3>
                {' '}
                <span className="designation">Hair Specialist</span>
              </div>
            </div>
            <div className="team-member wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="/assets/images/team/member3.jpg" alt="Member" />
                {' '}
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  {' '}
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  {' '}
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                  {' '}
                  <a href="#">
                    <i className="fab fa-rocketchat"></i>
                  </a>
                </div>
              </div>
              <div className="content">
                <h3>Nicholas E. Sapien</h3>
                {' '}
                <span className="designation">Hair Specialist</span>
              </div>
            </div>
            <div className="team-member wow fadeInUp delay-0-5s">
              <div className="image">
                <img src="/assets/images/team/member4.jpg" alt="Member" />
                {' '}
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  {' '}
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  {' '}
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                  {' '}
                  <a href="#">
                    <i className="fab fa-rocketchat"></i>
                  </a>
                </div>
              </div>
              <div className="content">
                <h3>Richard L. Miller</h3>
                {' '}
                <span className="designation">Hair Specialist</span>
              </div>
            </div>
            <div className="team-member wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="/assets/images/team/member5.jpg" alt="Member" />
                {' '}
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  {' '}
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  {' '}
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                  {' '}
                  <a href="#">
                    <i className="fab fa-rocketchat"></i>
                  </a>
                </div>
              </div>
              <div className="content">
                <h3>Melvin L. Hoffman</h3>
                {' '}
                <span className="designation">Hair Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-video-area rel z-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="cta-part bg-yellow text-center text-white p-40 rpy-55 wow fadeInLeft delay-0-2s" style={{ backgroundImage: "url(/assets/images/background/video-cta-bg.png)" }}>
                <div className="section-title mb-15">
                  <h2>
                    Come &
                    <br />
                    {' '}
                    get Freshness
                  </h2>
                  <p>
                    Sit amet consectetur adipiscing do eiusmod tempor incididunt labore dolore magna aliqua suspen
                  </p>
                </div>
                {' '}
                <a href="/contact" className="theme-btn btn-border">
                  contact with us
                  {' '}
                  <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="video-part rmt-30 wow fadeInRight delay-0-2s">
                <img src="/assets/images/background/video-bg.jpg" alt="Video" />
                {' '}
                <a href="https://www.youtube.com/watch?v=9Y7ma241N8k" className="mfp-iframe video-play" data-lightbox="video">
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial-area rel z-1 pt-120 rpt-90 pb-125 rpb-95">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="section-title text-center mb-50">
                <h2 className="title">What our clients say</h2>
                <p>
                  Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua suspendisse
                </p>
              </div>
            </div>
          </div>
          <Slider className="testimonial-wrap" slidesToShow={2} responsive={[[1199,1]]} dots={true}>
            <div className="testimonial-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="/assets/images/testimonials/testimonial1.jpg" alt="Author" />
              </div>
              <div className="description">
                <p>
                  Quis autem vel eum iure repreh enderit quin voluptate velit esse quam nihil molestiae consequa tur veillumqus dolore fugiat quo voluptas pariatuLorem psum
                </p>
                <h4>Donald A. Guthrie</h4>
                {' '}
                <span className="designation">Senior Manager</span>
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
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
            <div className="testimonial-item wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="/assets/images/testimonials/testimonial2.jpg" alt="Author" />
              </div>
              <div className="description">
                <p>
                  Sed ut perspiciatis unde omnis natus error sit voluac cusantium doloremque laudantium totame rem aperiam eaque quae abillo inventore veritatis et quase
                </p>
                <h4>Justin D. Thompson</h4>
                {' '}
                <span className="designation">Senior Manager</span>
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
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
            <div className="testimonial-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="/assets/images/testimonials/testimonial1.jpg" alt="Author" />
              </div>
              <div className="description">
                <p>
                  Quis autem vel eum iure repreh enderit quin voluptate velit esse quam nihil molestiae consequa tur veillumqus dolore fugiat quo voluptas pariatuLorem psum
                </p>
                <h4>Donald A. Guthrie</h4>
                {' '}
                <span className="designation">Senior Manager</span>
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
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
            <div className="testimonial-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="/assets/images/testimonials/testimonial2.jpg" alt="Author" />
              </div>
              <div className="description">
                <p>
                  Sed ut perspiciatis unde omnis natus error sit voluac cusantium doloremque laudantium totame rem aperiam eaque quae abillo inventore veritatis et quase
                </p>
                <h4>Justin D. Thompson</h4>
                {' '}
                <span className="designation">Senior Manager</span>
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
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="testimonial-bg bg-lighter">
          <img className="bg" src="/assets/images/shapes/testi-bg.png" alt="BG" />
          {' '}
          <img className="shape" src="/assets/images/shapes/testi-right.png" alt="Shape" />
        </div>
      </section>
      <section className="news-area rel z-2 pt-120 rpt-90 pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-between align-items-end mb-10">
            <div className="col-xl-5 col-lg-6">
              <div className="section-title mb-15">
                <h2 className="title">Latest Blog & News</h2>
                <p>
                  Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua suspendisse
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="slider-btns text-lg-right mb-20">
                <button className="news-prev">
                  <i className="far fa-long-arrow-left"></i>
                </button>
                {' '}
                <button className="news-next">
                  <i className="far fa-long-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <Slider className="news-slider-wrap" slidesToShow={3} responsive={[[1199,2],[768,1]]} arrows={true}>
            <div className="news-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="/assets/images/blog/news1.jpg" alt="News" />
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
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantim doloremque laudantium totam
                </p>
                {' '}
                <a href="/blog-details" className="read-more">
                  Read more
                  {' '}
                  <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="news-item wow fadeInUp delay-0-4s">
              <div className="image">
                <img src="/assets/images/blog/news2.jpg" alt="News" />
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
                  <a href="/blog-details">Video Playback On The Web Video See Delivery Best Practices Part 2</a>
                </h5>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantim doloremque laudantium totam
                </p>
                {' '}
                <a href="/blog-details" className="read-more">
                  Read more
                  {' '}
                  <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="news-item wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="/assets/images/blog/news3.jpg" alt="News" />
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
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantim doloremque laudantium totam
                </p>
                {' '}
                <a href="/blog-details" className="read-more">
                  Read more
                  {' '}
                  <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="news-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="/assets/images/blog/news1.jpg" alt="News" />
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
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantim doloremque laudantium totam
                </p>
                {' '}
                <a href="/blog-details" className="read-more">
                  Read more
                  {' '}
                  <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="news-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="/assets/images/blog/news2.jpg" alt="News" />
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
                  <a href="/blog-details">Video Playback On The Web Video See Delivery Best Practices Part 2</a>
                </h5>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantim doloremque laudantium totam
                </p>
                {' '}
                <a href="/blog-details" className="read-more">
                  Read more
                  {' '}
                  <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="news-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="/assets/images/blog/news3.jpg" alt="News" />
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
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantim doloremque laudantium totam
                </p>
                {' '}
                <a href="/blog-details" className="read-more">
                  Read more
                  {' '}
                  <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <section className="client-logo-area rel z-1 pb-130 rpb-100">
        <div className="container">
          <div className="client-logo-inner">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-10">
                <div className="section-title text-center mb-50">
                  <h2 className="title">premium sponsors</h2>
                  <p>
                    Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua suspendisse
                  </p>
                </div>
              </div>
            </div>
            <Slider className="client-logo-active" slidesToShow={6} responsive={[[1200,4],[992,3],[480,2]]}>
              <div className="client-logo-item wow fadeInUp delay-0-2s">
                <a href="#">
                  <img src="/assets/images/client-logos/logo1.png" alt="Client Logo" />
                </a>
              </div>
              <div className="client-logo-item wow fadeInUp delay-0-3s">
                <a href="#">
                  <img src="/assets/images/client-logos/logo2.png" alt="Client Logo" />
                </a>
              </div>
              <div className="client-logo-item wow fadeInUp delay-0-4s">
                <a href="#">
                  <img src="/assets/images/client-logos/logo3.png" alt="Client Logo" />
                </a>
              </div>
              <div className="client-logo-item wow fadeInUp delay-0-5s">
                <a href="#">
                  <img src="/assets/images/client-logos/logo4.png" alt="Client Logo" />
                </a>
              </div>
              <div className="client-logo-item wow fadeInUp delay-0-6s">
                <a href="#">
                  <img src="/assets/images/client-logos/logo5.png" alt="Client Logo" />
                </a>
              </div>
              <div className="client-logo-item wow fadeInUp delay-0-7s">
                <a href="#">
                  <img src="/assets/images/client-logos/logo6.png" alt="Client Logo" />
                </a>
              </div>
              <div className="client-logo-item wow fadeInUp delay-0-8s">
                <a href="#">
                  <img src="/assets/images/client-logos/logo1.png" alt="Client Logo" />
                </a>
              </div>
              <div className="client-logo-item wow fadeInUp delay-0-2s">
                <a href="#">
                  <img src="/assets/images/client-logos/logo2.png" alt="Client Logo" />
                </a>
              </div>
              <div className="client-logo-item wow fadeInUp delay-0-2s">
                <a href="#">
                  <img src="/assets/images/client-logos/logo3.png" alt="Client Logo" />
                </a>
              </div>
              <div className="client-logo-item wow fadeInUp delay-0-2s">
                <a href="#">
                  <img src="/assets/images/client-logos/logo4.png" alt="Client Logo" />
                </a>
              </div>
              <div className="client-logo-item wow fadeInUp delay-0-2s">
                <a href="#">
                  <img src="/assets/images/client-logos/logo5.png" alt="Client Logo" />
                </a>
              </div>
              <div className="client-logo-item wow fadeInUp delay-0-2s">
                <a href="#">
                  <img src="/assets/images/client-logos/logo6.png" alt="Client Logo" />
                </a>
              </div>
            </Slider>
          </div>
        </div>
        {' '}
        <img className="client-logo-bg" src="/assets/images/background/client-logo-bg.png" alt="Background" />
      </section>
    </SiteShell>
  );
}
