import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { PageBanner } from '@/app/components/sections';
import { Testimonials } from '@/app/components/reviews-ui';
import { reviewsFor } from '@/app/content/reviews';
import { photos, photoUrl } from '@/app/content/photos';
import { about } from '@/app/content/home';
import { site } from '@/app/site-data';

export const metadata: Metadata = {
  title: { absolute: 'Meet Jae Rashawn | Licensed Loctician in Stafford, TX' },
  description:
    'Meet Jae Rashawn, licensed natural hair stylist and loctician in Stafford, TX. 10+ years serving Sugar Land, Missouri City, and Greater Houston.',
};

const specialties = [
  {
    icon: 'flaticon-scissors',
    title: 'Locs',
    href: '/starter-locs',
    text: 'Starter locs, instant locs, retwist and palm roll, interlocking maintenance, and microloc extensions.',
  },
  {
    icon: 'flaticon-beauty-treatment',
    title: 'Protective styles',
    href: '/two-strand-twists',
    text: 'Two-strand twists, goddess locs, butterfly locs, and braids, installed with low tension at the base.',
  },
  {
    icon: 'flaticon-hot-stones',
    title: 'Silk press & natural hair',
    href: '/silk-press',
    text: 'Silk press, consultations, and healthy hair maintenance planned around your hair and your routine.',
  },
];

export default function Page() {
  return (
    <SiteShell header="three" footerClassName="mt-80">
      <PageBanner title="About Us" crumbs={[{ label: 'About Us' }]} />

      <section className="about-us-area-two pt-130 rpt-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="about-image-two rmb-75 wow fadeInLeft delay-0-2s">
                <img src={photoUrl(photos.jae)} alt={photos.jae.alt} /> <span className="big-letter">j</span>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 align-self-center">
              <div className="about-content-two wow fadeInRight delay-0-2s">
                <div className="logo mb-40">
                  <img className="about-logo" src={site.logo} alt={site.name} />
                </div>
                <div className="section-title mb-25">
                  <h2 className="title">Meet Jae Rashawn, licensed loctician</h2>
                </div>
                <p>
                  <strong>{about.tagline}</strong>
                </p>
                {about.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}{' '}
                <a href="/services#book" className="theme-btn style-two mt-30">
                  book online <i className="far fa-long-arrow-right"></i>
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
                <h2 className="title">what Jae specializes in</h2>
                <p>{about.specialtiesText}</p>
                <span className="sub-title">expertise</span>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {specialties.map((item, i) => (
              <div key={item.title} className="col-xl-4 col-md-6">
                <div className={`service-three-item wow fadeInUp delay-0-${i * 2 + 2}s`}>
                  <i className={item.icon}></i>{' '}
                  <h3>
                    <a href={item.href}>{item.title}</a>
                  </h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-story pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-40">
                <h2 className="title">{about.storyTitle}</h2>
                <span className="sub-title">journey</span>
              </div>
              {about.story.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-press pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-40">
                <h2 className="title">As featured in Voyage Houston</h2>
                <p>Jae Stylez was profiled in Voyage Houston Magazine&apos;s Hidden Gems series on local businesses.</p>
                <span className="sub-title">press</span>
              </div>
              <ul className="list-style-one my-20">
                <li>Ten years in the hair industry, trained at Ogle School of Hair, Skin &amp; Nails.</li>
                <li>Specializes in natural hair, from locs to intricate braid styles, with a focus on hair health.</li>
                <li>
                  Also behind Marilyn Jae Cosmetics, named for her late grandmother, and The Lox Box hair care line:
                  Lavender Rose Water hydration spray, Stimulating Scalp Oil, Crown Control gel and Hair Whip.
                </li>
              </ul>
              <div className="text-center mt-30">
                <a
                  className="theme-btn"
                  href="https://voyagehouston.com/interview/hidden-gems-meet-jasmin-lafond-of-jaestylez/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  read the interview <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-video-area pt-130 rpt-100 rel z-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="cta-part bg-yellow text-center text-white p-40 rpy-55 wow fadeInLeft delay-0-2s"
                style={{ backgroundImage: 'url(/assets/images/background/video-cta-bg.png)' }}
              >
                <div className="section-title mb-15">
                  <h2>
                    Open on
                    <br /> Mondays
                  </h2>
                  <p>Monday appointments are available by request, based on the online booking calendar.</p>
                </div>{' '}
                <a href="/monday-appointments" className="theme-btn btn-border">
                  monday appointments <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="video-part rmt-30 wow fadeInRight delay-0-2s">
                <img src={photoUrl(photos.collage)} alt={photos.collage.alt} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials
        reviews={reviewsFor(['about', 'natural', 'booking'], 5)}
        title="What our clients say"
        text="Google reviews from clients who have worked with Jae."
        className="pt-120 rpt-90 pb-125 rpb-95"
      />
    </SiteShell>
  );
}
