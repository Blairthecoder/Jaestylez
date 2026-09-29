import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';

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
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="price-item-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="/assets/images/price/price-plan-icon.png" alt="Price" />
                </div>
                <h3>Regular plan</h3>
                <ul>
                  <li>
                    <div className="content">
                      <h5>Hair Cutting</h5>
                      {' '}
                      <span>Clean 30-40 minutes</span>
                    </div>
                    {' '}
                    <span className="price">$89</span>
                  </li>
                  <li>
                    <div className="content">
                      <h5>Beauty & Spa</h5>
                      {' '}
                      <span>Clean 30-40 minutes</span>
                    </div>
                    {' '}
                    <span className="price">$24</span>
                  </li>
                  <li>
                    <div className="content">
                      <h5>Body Treatments</h5>
                      {' '}
                      <span>Clean 30-40 minutes</span>
                    </div>
                    {' '}
                    <span className="price">$37</span>
                  </li>
                  <li>
                    <div className="content">
                      <h5>Facial & Massage</h5>
                      {' '}
                      <span>Clean 30-40 minutes</span>
                    </div>
                    {' '}
                    <span className="price">$52</span>
                  </li>
                </ul>
                {' '}
                <a href="/pricing" className="theme-btn style-three">
                  select your plan
                  {' '}
                  <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="price-item-two active-price wow fadeInUp delay-0-4s">
                <span className="price-type">popular</span>
                {' '}
                <div className="image">
                  <img src="/assets/images/price/price-plan-icon.png" alt="Price" />
                </div>
                <h3>Standard plan</h3>
                <ul>
                  <li>
                    <div className="content">
                      <h5>Hair Cutting</h5>
                      {' '}
                      <span>Clean 30-40 minutes</span>
                    </div>
                    {' '}
                    <span className="price">$99</span>
                  </li>
                  <li>
                    <div className="content">
                      <h5>Beauty & Spa</h5>
                      {' '}
                      <span>Clean 30-40 minutes</span>
                    </div>
                    {' '}
                    <span className="price">$42</span>
                  </li>
                  <li>
                    <div className="content">
                      <h5>Body Treatments</h5>
                      {' '}
                      <span>Clean 30-40 minutes</span>
                    </div>
                    {' '}
                    <span className="price">$63</span>
                  </li>
                  <li>
                    <div className="content">
                      <h5>Facial & Massage</h5>
                      {' '}
                      <span>Clean 30-40 minutes</span>
                    </div>
                    {' '}
                    <span className="price">$43</span>
                  </li>
                </ul>
                {' '}
                <a href="/pricing" className="theme-btn style-three">
                  select your plan
                  {' '}
                  <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="price-item-two wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="/assets/images/price/price-plan-icon.png" alt="Price" />
                </div>
                <h3>premium plan</h3>
                <ul>
                  <li>
                    <div className="content">
                      <h5>Hair Cutting</h5>
                      {' '}
                      <span>Clean 30-40 minutes</span>
                    </div>
                    {' '}
                    <span className="price">$89</span>
                  </li>
                  <li>
                    <div className="content">
                      <h5>Beauty & Spa</h5>
                      {' '}
                      <span>Clean 30-40 minutes</span>
                    </div>
                    {' '}
                    <span className="price">$24</span>
                  </li>
                  <li>
                    <div className="content">
                      <h5>Body Treatments</h5>
                      {' '}
                      <span>Clean 30-40 minutes</span>
                    </div>
                    {' '}
                    <span className="price">$37</span>
                  </li>
                  <li>
                    <div className="content">
                      <h5>Facial & Massage</h5>
                      {' '}
                      <span>Clean 30-40 minutes</span>
                    </div>
                    {' '}
                    <span className="price">$52</span>
                  </li>
                </ul>
                {' '}
                <a href="/pricing" className="theme-btn style-three">
                  select your plan
                  {' '}
                  <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
