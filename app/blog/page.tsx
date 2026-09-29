import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { BlogIndex } from '@/app/components/blog-client';

export const metadata: Metadata = {
  title: 'Blog',
};

export default function Page() {
  return (
    <SiteShell header="three" footerClassName="">
      <section
        className="page-banner text-white py-190 rpy-130"
        style={{ backgroundImage: 'url(/assets/images/banner/banner.jpg)' }}
      >
        <div className="container">
          <div className="banner-inner">
            <h1 className="page-title wow fadeInRight delay-0-2s">Blog</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center wow fadeInLeft delay-0-2s">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">Blog</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <BlogIndex />
    </SiteShell>
  );
}
