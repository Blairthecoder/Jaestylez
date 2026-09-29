import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { Slider } from '@/app/components/slider';

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return (
    <SiteShell header="three" footerClassName="mt-80">
      <section className="page-banner text-white py-190 rpy-130" style={{ backgroundImage: "url(/assets/images/banner/banner.jpg)" }}>
        <div className="container">
          <div className="banner-inner">
            <h1 className="page-title wow fadeInRight delay-0-2s">About Us</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center wow fadeInLeft delay-0-2s">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">About Us</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="about-us-area-two pt-130 rpt-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="about-image-two rmb-75 wow fadeInLeft delay-0-2s">
                <img src="/assets/images/about/about-two.jpg" alt="About" />
                {' '}
                <span className="big-letter">b</span>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 align-self-center">
              <div className="about-content-two wow fadeInRight delay-0-2s">
                <div className="logo mb-40">
                  <img src="/assets/images/about/logo.png" alt="Logo" />
                </div>
                <div className="section-title mb-25">
                  <h2 className="title">Best barbers & hair cutting salon</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusante doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventor eritatis et architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit aut sed beatae vitae
                </p>
                {' '}
                <a href="/about" className="theme-btn style-two mt-30">
                  more about us
                  {' '}
                  <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-choose-two pt-120 rpt-90">
        <div className="container rel z-1 pb-100 rpb-70">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7">
              <div className="section-title text-center mb-70">
                <h2 className="title">why choose qutter</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptate accusantium doloremque laudantium totam aperiam eaque quae abillo
                </p>
                {' '}
                <span className="sub-title">goals</span>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="service-three-item wow fadeInUp delay-0-2s">
                <i className="flaticon-scissors"></i>
                {' '}
                <h3>
                  <a href="/service-details">Hair Cutting & Colors</a>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis este natus error sit voluaccu antium doloremque laudante totam
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-three-item wow fadeInUp delay-0-4s">
                <i className="flaticon-beauty-treatment"></i>
                {' '}
                <h3>
                  <a href="/service-details">Beauty & Facial</a>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis este natus error sit voluaccu antium doloremque laudante totam
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-three-item wow fadeInUp delay-0-6s">
                <i className="flaticon-hot-stones"></i>
                {' '}
                <h3>
                  <a href="/service-details">Body Treatments</a>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis este natus error sit voluaccu antium doloremque laudante totam
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-area bg-black rel z-1 pt-120 rpt-90 pb-95 rpb-65">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="section-title text-white text-center mb-70">
                <h2 className="title">Meet our specialist</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptate accusantium doloremque laudantium totam aperiam eaque quae abillo
                </p>
                {' '}
                <span className="sub-title">member</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid text-white">
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
      <section className="cta-video-area pt-130 rpt-100 rel z-2">
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
      <section className="testimonial-area-two rel z-2 pt-120 rpt-90 pb-125 rpb-95">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-10">
              <div className="section-title text-center mb-55">
                <h2 className="title">What our clients say</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptate accusantium doloremque laudantium totam aperiam eaque quae abillo
                </p>
                {' '}
                <span className="sub-title">feedback</span>
              </div>
            </div>
          </div>
          <Slider className="testimonial-two-active" slidesToShow={3} responsive={[[1199,2],[768,1]]} dots={true}>
            <div className="testimonial-two-item bg-white wow fadeInUp delay-0-2s">
              <div className="logo">
                <img src="/assets/images/testimonials/logo1.png" alt="Logo" />
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium totam rem aperiam eaque ipsa quae inventore veritatis et quasi architecto
              </p>
              <div className="author">
                <img src="/assets/images/testimonials/author1.png" alt="Author" />
                {' '}
                <div className="des">
                  <h4>Donald A. Guthrie</h4>
                  {' '}
                  <span>Senior Manager</span>
                </div>
              </div>
            </div>
            <div className="testimonial-two-item bg-white wow fadeInUp delay-0-4s">
              <div className="logo">
                <img src="/assets/images/testimonials/logo2.png" alt="Logo" />
              </div>
              <p>
                Quis autem vel eum iurrepre henderit quinea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo volupts easy pariatur inventore veritatis
              </p>
              <div className="author">
                <img src="/assets/images/testimonials/author2.png" alt="Author" />
                {' '}
                <div className="des">
                  <h4>Mathew D. Wasson</h4>
                  {' '}
                  <span>Senior Manager</span>
                </div>
              </div>
            </div>
            <div className="testimonial-two-item bg-white wow fadeInUp delay-0-6s">
              <div className="logo">
                <img src="/assets/images/testimonials/logo3.png" alt="Logo" />
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium totam rem aperiam eaque ipsa quae inventore veritatis et quasi architecto
              </p>
              <div className="author">
                <img src="/assets/images/testimonials/author3.png" alt="Author" />
                {' '}
                <div className="des">
                  <h4>Russell B. Hopkins</h4>
                  {' '}
                  <span>Senior Manager</span>
                </div>
              </div>
            </div>
            <div className="testimonial-two-item bg-white wow fadeInUp delay-0-2s">
              <div className="logo">
                <img src="/assets/images/testimonials/logo1.png" alt="Logo" />
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium totam rem aperiam eaque ipsa quae inventore veritatis et quasi architecto
              </p>
              <div className="author">
                <img src="/assets/images/testimonials/author1.png" alt="Author" />
                {' '}
                <div className="des">
                  <h4>Donald A. Guthrie</h4>
                  {' '}
                  <span>Senior Manager</span>
                </div>
              </div>
            </div>
            <div className="testimonial-two-item bg-white wow fadeInUp delay-0-4s">
              <div className="logo">
                <img src="/assets/images/testimonials/logo2.png" alt="Logo" />
              </div>
              <p>
                Quis autem vel eum iurrepre henderit quinea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo volupts easy pariatur inventore veritatis
              </p>
              <div className="author">
                <img src="/assets/images/testimonials/author2.png" alt="Author" />
                {' '}
                <div className="des">
                  <h4>Mathew D. Wasson</h4>
                  {' '}
                  <span>Senior Manager</span>
                </div>
              </div>
            </div>
            <div className="testimonial-two-item bg-white wow fadeInUp delay-0-6s">
              <div className="logo">
                <img src="/assets/images/testimonials/logo3.png" alt="Logo" />
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium totam rem aperiam eaque ipsa quae inventore veritatis et quasi architecto
              </p>
              <div className="author">
                <img src="/assets/images/testimonials/author3.png" alt="Author" />
                {' '}
                <div className="des">
                  <h4>Russell B. Hopkins</h4>
                  {' '}
                  <span>Senior Manager</span>
                </div>
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
