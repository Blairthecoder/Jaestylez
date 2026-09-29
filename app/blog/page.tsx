import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { SearchForm } from '@/app/components/forms';

export const metadata: Metadata = {
  title: "Blog",
};

export default function Page() {
  return (
    <SiteShell header="three" footerClassName="mt-80">
      <section className="page-banner text-white py-190 rpy-130" style={{ backgroundImage: "url(/assets/images/banner/banner.jpg)" }}>
        <div className="container">
          <div className="banner-inner">
            <h1 className="page-title wow fadeInRight delay-0-2s">Blog</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center wow fadeInLeft delay-0-2s">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">Blog Standard</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="blog-standard-area py-130 rpy-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-standard-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="/assets/images/blog/blog-standard-1.jpg" alt="Blog" />
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
                  <h3>
                    <a href="/blog-details">
                      Build An Ethical User Research Practice At Any Organization Interactive Gantt Chart Component JavaScript
                    </a>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium doloremq laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitaes dicta sunt explicabo enim ipsam voluptatem quia voluptas sit aspernatur
                  </p>
                  {' '}
                  <a href="/blog-details" className="theme-btn">
                    Read more
                    {' '}
                    <i className="far fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="blog-standard-item wow fadeInUp delay-0-2s">
                <div className="image video-news">
                  <img src="/assets/images/blog/blog-standard-2.jpg" alt="Blog" />
                  {' '}
                  <a href="https://www.youtube.com/watch?v=9Y7ma241N8k" className="mfp-iframe video-play" data-lightbox="video">
                    <i className="fas fa-play"></i>
                  </a>
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
                  <h3>
                    <a href="/blog-details">
                      Handling Mounting And Unmounting Of Navigation Routes React NativeBuild An Ethical User Research Practice
                    </a>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium doloremq laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitaes dicta sunt explicabo enim ipsam voluptatem quia voluptas sit aspernatur
                  </p>
                  {' '}
                  <a href="/blog-details" className="theme-btn">
                    Read more
                    {' '}
                    <i className="far fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="blog-standard-item blog-blockquote wow fadeInUp delay-0-2s">
                <div className="content">
                  <h3>
                    <a href="/blog-details">
                      New Smashing Workshops on Front-End & DesignHandling Mounting And Unmounting Of Navigation Routes React NativeBuild An Ethical User Research Practice
                    </a>
                  </h3>
                  <div className="author">
                    <img src="/assets/images/blog/blockquote-author.jpg" alt="Author" />
                    {' '}
                    <span className="name">Ralph A. Roebuck</span>
                  </div>
                </div>
              </div>
              <div className="blog-standard-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="/assets/images/blog/blog-standard-3.jpg" alt="Blog" />
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
                  <h3>
                    <a href="/blog-details">
                      Build An Ethical User Research Practice At Any Organization Interactive Gantt Chart Component JavaScript
                    </a>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium doloremq laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitaes dicta sunt explicabo enim ipsam voluptatem quia voluptas sit aspernatur
                  </p>
                  {' '}
                  <a href="/blog-details" className="theme-btn">
                    Read more
                    {' '}
                    <i className="far fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="blog-standard-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="/assets/images/blog/blog-standard-4.jpg" alt="Blog" />
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
                  <h3>
                    <a href="/blog-details">
                      Build An Ethical User Research Practice At Any Organization Interactive Gantt Chart Component JavaScript
                    </a>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium doloremq laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitaes dicta sunt explicabo enim ipsam voluptatem quia voluptas sit aspernatur
                  </p>
                  {' '}
                  <a href="/blog-details" className="theme-btn">
                    Read more
                    {' '}
                    <i className="far fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
              <nav aria-label="...">
                <ul className="pagination style-two flex-wrap pt-40 rpt-20 wow fadeInUp delay-0-2s">
                  <li className="page-item disabled">
                    <span className="page-link">
                      <i className="fas fa-arrow-left"></i>
                    </span>
                  </li>
                  <li className="page-item active">
                    <span className="page-link">
                      01
                      {' '}
                      <span className="sr-only">(current)</span>
                    </span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">02</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">03</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-4 col-md-7 col-sm-9">
              <div className="blog-sidebar rmt-75">
                <div className="widget widget-search wow fadeInUp delay-0-2s">
                  <h3 className="widget-title">Search</h3>
                  <SearchForm>
                    <input type="search" placeholder="Keywords" required />
                    {' '}
                    <button type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                  </SearchForm>
                </div>
                <div className="widget widget-menu wow fadeInUp delay-0-2s">
                  <h3 className="widget-title">Best category</h3>
                  <ul>
                    <li>
                      <a href="/blog">
                        Hair Cutting & Fitting
                        {' '}
                        <i className="far fa-long-arrow-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/blog">
                        Beauty & Spa
                        {' '}
                        <i className="far fa-long-arrow-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/blog">
                        Body Treatments
                        {' '}
                        <i className="far fa-long-arrow-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/blog">
                        Hair Colors
                        {' '}
                        <i className="far fa-long-arrow-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/blog">
                        Body Massages
                        {' '}
                        <i className="far fa-long-arrow-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/blog">
                        Fash Wash & Facial
                        {' '}
                        <i className="far fa-long-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-news  wow fadeInUp delay-0-2s">
                  <h5 className="widget-title">recent news</h5>
                  <ul>
                    <li>
                      <div className="image">
                        <img src="/assets/images/widgets/widget-news1.jpg" alt="News" />
                      </div>
                      <div className="content">
                        <span className="date">
                          <i className="fal fa-calendar-alt"></i>
                          {' '}
                          25 sep 2021
                        </span>
                        {' '}
                        <h6>
                          <a href="/blog-details">Build Ethical Research Prac Organiza</a>
                        </h6>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img src="/assets/images/widgets/widget-news2.jpg" alt="News" />
                      </div>
                      <div className="content">
                        <span className="date">
                          <i className="fal fa-calendar-alt"></i>
                          {' '}
                          25 sep 2021
                        </span>
                        {' '}
                        <h6>
                          <a href="/blog-details">Build Ethical Research Prac Organiza</a>
                        </h6>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img src="/assets/images/widgets/widget-news3.jpg" alt="News" />
                      </div>
                      <div className="content">
                        <span className="date">
                          <i className="fal fa-calendar-alt"></i>
                          {' '}
                          25 sep 2021
                        </span>
                        {' '}
                        <h6>
                          <a href="/blog-details">Build Ethical Research Prac Organiza</a>
                        </h6>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-tag-cloud  wow fadeInUp delay-0-2s">
                  <h5 className="widget-title">Product Tags</h5>
                  <div className="tag-coulds">
                    <a href="/blog">Salon</a>
                    {' '}
                    <a href="/blog">Beauty</a>
                    {' '}
                    <a href="/blog">Treatments</a>
                    {' '}
                    <a href="/blog">Massage</a>
                    {' '}
                    <a href="/blog">GYM & Yoga</a>
                    {' '}
                    <a href="/blog">Hair</a>
                    {' '}
                    <a href="/blog">Hair Color</a>
                    {' '}
                    <a href="/blog">Shaving</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
