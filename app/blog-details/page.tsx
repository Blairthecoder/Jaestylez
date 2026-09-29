import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { NiceSelect } from '@/app/components/nice-select';
import { NetlifyForm, SearchForm } from '@/app/components/forms';

export const metadata: Metadata = {
  title: "Blog Details",
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
                <li className="breadcrumb-item active">Blog Details</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="blog-details-area py-130 rpy-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-content">
                <ul className="blog-meta mb-30">
                  <li>
                    <i className="far fa-user-circle"></i>
                    {' '}
                    <a href="#">Leland M. Bormann</a>
                  </li>
                  <li>
                    <i className="far fa-calendar-alt"></i>
                    {' '}
                    <a href="#">25 September 2021</a>
                  </li>
                  <li>
                    <i className="far fa-comments"></i>
                    {' '}
                    <a href="#">Comments (05)</a>
                  </li>
                  <li>
                    <i className="far fa-eye"></i>
                    {' '}
                    <a href="#">View (3m)</a>
                  </li>
                </ul>
                <h3 className="title">
                  Build An Ethical User Research Practice At Any Organization Interactive Gantt Chart Component JavaScript
                </h3>
                <div className="image my-25 wow fadeInUp delay-0-2s">
                  <img src="/assets/images/blog/blog-details.jpg" alt="Blog" />
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur
                </p>
                <div className="blog-standard-item blog-blockquote mt-30 wow fadeInUp delay-0-2s">
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
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia wants consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                </p>
                <div className="tag-share pt-20">
                  <div className="tag-coulds pb-20">
                    <b>Tags:</b>
                    {' '}
                    <a href="/blog">Agency</a>
                    {' '}
                    <a href="/blog">Cosmetics</a>
                    {' '}
                    <a href="/blog">Beauty</a>
                  </div>
                  <div className="social-style-one pb-15">
                    <b>Share:</b>
                    {' '}
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    {' '}
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    {' '}
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="admin-comment bg-lighter mt-30 mb-55 p-50 py-35 wow fadeInUp delay-0-2s">
                  <div className="comment-body">
                    <div className="author-thumb">
                      <img src="/assets/images/blog/admin-comment.jpg" alt="Author" />
                    </div>
                    <div className="comment-content">
                      <div className="name-date">
                        <h5>Dennis R. Grimaldi</h5>
                      </div>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium to aperiam eaque ipsa quae abillo inventore veritatis quase
                      </p>
                      <div className="social-style-one pt-5">
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        {' '}
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        {' '}
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                        {' '}
                        <a href="#">
                          <i className="fab fa-behance"></i>
                        </a>
                        {' '}
                        <a href="#">
                          <i className="fab fa-dribbble"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="next-prev-post pb-10">
                  <div className="npp-item wow fadeInRight delay-0-2s">
                    <img src="/assets/images/blog/prev-post.jpg" alt="Blog" />
                    {' '}
                    <div className="content">
                      <h6>
                        <a href="/blog-details">New War Smashing Workshops Front-End & Design</a>
                      </h6>
                      {' '}
                      <span className="date">
                        <i className="far fa-calendar-alt"></i>
                        {' '}
                        25 Sep 2021
                      </span>
                    </div>
                  </div>
                  <div className="npp-item wow fadeInLeft delay-0-2s">
                    <img src="/assets/images/blog/next-post.jpg" alt="Blog" />
                    {' '}
                    <div className="content">
                      <h6>
                        <a href="/blog-details">Handling Mounting Unounting Navigation Routes Native</a>
                      </h6>
                      {' '}
                      <span className="date">
                        <i className="far fa-calendar-alt"></i>
                        {' '}
                        25 Sep 2021
                      </span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="comment-list pt-45 wow fadeInUp delay-0-2s">
                  <h3 className="title-two mb-35">Peopel Comments</h3>
                  <div className="comment-body">
                    <div className="author-thumb">
                      <img src="/assets/images/blog/author1.jpg" alt="Author" />
                    </div>
                    <div className="comment-content">
                      <div className="name-date">
                        <h5>John F. Medina</h5>
                        {' '}
                        <span className="comment-date">25 Feb 2022</span>
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
                <NetlifyForm formName="comment" className="comment-form mt-70 wow fadeInUp delay-0-2s">
                  <h3 className="title-two mb-35">Leave A Message</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" id="name" name="name" className="form-control" defaultValue="" placeholder="Full name" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" id="phone" name="phone" className="form-control" defaultValue="" placeholder="Phone Number" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="email" id="email" name="email" className="form-control" defaultValue="" placeholder="Email Address" required />
                      </div>
                    </div>
                    <div className="col-md-6 mb-30">
                      <div className="form-group">
                        <NiceSelect name="subject" id="subject" options={[{"value":"Subject :","label":"Subject :"},{"value":"Barber","label":"Barber"},{"value":"Hair","label":"Hair"},{"value":"Cutting","label":"Cutting"},{"value":"Trimmer","label":"Trimmer"}]} />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea name="message" id="message" className="form-control" rows={4} placeholder="Write message" required></textarea>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn w-100">
                          send message
                          {' '}
                          <i className="far fa-long-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </NetlifyForm>
              </div>
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
