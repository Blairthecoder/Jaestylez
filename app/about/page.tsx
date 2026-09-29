import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { CategoryCards } from '@/app/components/live-services';
import { PageBanner, ReviewsBand } from '@/app/components/sections';
import { about } from '@/app/content/home';
import { wixMedia } from '@/app/gallery-data';
import { site } from '@/app/site-data';

export const metadata: Metadata = {
  title: { absolute: 'Meet Jae Rashawn | Licensed Loctician in Stafford, TX' },
  description:
    'Meet Jae Rashawn, licensed natural hair stylist and loctician in Stafford, TX. 10+ years serving Sugar Land, Missouri City, and Greater Houston.',
};

export default function Page() {
  return (
    <SiteShell header="three" footerClassName="">
      <PageBanner title="About" crumbs={[{ label: 'About' }]} />

      <section className="about-jae py-120 rpy-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="about-photo rmb-55">
                <img src={wixMedia(about.photo, 720, 900)} alt={`${site.owner}, licensed loctician`} />
              </div>
            </div>
            <div className="col-lg-7">
              <span className="landing-eyebrow">{about.eyebrow}</span>
              <h2 className="landing-heading mb-20">{about.title}</h2>
              <p className="landing-lead">{about.tagline}</p>
              {about.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <div className="landing-ctas">
                <a className="theme-btn" href="/services#book">
                  book online <i className="far fa-long-arrow-right"></i>
                </a>
                <a className="theme-btn style-four" href="/contact">
                  contact jae <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
              <div className="social-style-two pt-25">
                {site.social.map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-story bg-lighter-two py-100 rpy-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <span className="landing-eyebrow">{about.storyEyebrow}</span>
              <h2 className="landing-heading mb-20">{about.storyTitle}</h2>
              {about.story.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-specialties pt-100 rpt-70 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-50">
                <span className="landing-eyebrow">{about.specialtiesEyebrow}</span>
                <h2 className="title">{about.specialtiesTitle}</h2>
                <p>{about.specialtiesText}</p>
              </div>
            </div>
          </div>
          <CategoryCards />
          <div className="text-center mt-20">
            <a className="theme-btn" href="/services#book">
              see every service <i className="far fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      <ReviewsBand />
    </SiteShell>
  );
}
