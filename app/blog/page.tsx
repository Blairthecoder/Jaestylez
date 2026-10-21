import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { BlogIndex } from '@/app/components/blog-client';
import { getBlog } from '@/app/lib/wix-blog-server';
import { breadcrumbSchema, pageMeta } from '@/app/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Loc Care & Natural Hair Blog | Jae Stylez, Stafford TX',
  description:
    'Loc care, retwist and palm roll guides, silk press tips and protective style advice for Houston weather, from licensed loctician Jae Stylez.',
  path: '/blog',
});

export default async function Page() {
  const blog = await getBlog();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Blog' }])],
  };
  return (
    <SiteShell header="three" footerClassName="">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section
        className="page-banner text-white py-190 rpy-130"
        style={{ backgroundImage: 'url(/images/jae/banner.jpg)' }}
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
      <BlogIndex seed={{ posts: blog.posts.map((p) => p.post), categories: blog.categories }} />
    </SiteShell>
  );
}
