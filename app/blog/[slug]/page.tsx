import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/app/site-shell';
import { Sidebar } from '@/app/components/blog-client';
import { Meta, renderNodes } from '@/app/components/blog-render';
import { ReviewCards } from '@/app/components/reviews-ui';
import { relatedFor } from '@/app/content/blog-related';
import { reviewsFor } from '@/app/content/reviews';
import { getBlog, getPost } from '@/app/lib/wix-blog-server';
import { breadcrumbSchema, canonicalPath, pageMeta, siteUrl } from '@/app/lib/seo';
import { site } from '@/app/site-data';

type Params = { slug: string };

// One static page per Wix blog post, generated at build time so the full text is in the HTML.
export async function generateStaticParams() {
  return (await getBlog()).posts.map((p) => ({ slug: p.post.slug }));
}

const clip = (text: string, max: number) => (text.length <= max ? text : `${text.slice(0, max - 1).trimEnd()}…`);

export async function generateMetadata({ params }: { params: Promise<Params> | Params }): Promise<Metadata> {
  const { slug } = await params;
  const found = await getPost(slug);
  if (!found) return {};
  const { post } = found;
  return pageMeta({
    title: `${clip(post.title, 52)} | Jae Stylez`,
    description: clip(post.excerpt || `${post.title}. Loc and natural hair advice from Jae Stylez in Stafford, TX.`, 158),
    path: `/blog/${post.slug}`,
    image: post.ogImage ?? undefined,
    type: 'article',
  });
}

export default async function Page({ params }: { params: Promise<Params> | Params }) {
  const { slug } = await params;
  const [found, blog] = await Promise.all([getPost(slug), getBlog()]);
  if (!found) notFound();
  const { post, nodes } = found;
  const related = relatedFor(post);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        mainEntityOfPage: `${siteUrl}${canonicalPath(`/blog/${post.slug}`)}`,
        ...(post.ogImage ? { image: [post.ogImage] } : {}),
        ...(post.date ? { datePublished: post.date } : {}),
        dateModified: post.modified || post.date || undefined,
        author: { '@type': 'Person', name: site.owner, url: `${siteUrl}/about/` },
        publisher: { '@id': `${siteUrl}/#business` },
      },
      breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: post.title }]),
    ],
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
            <p className="page-title wow fadeInRight delay-0-2s">Blog</p>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center wow fadeInLeft delay-0-2s">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/blog">Blog</a>
                </li>
                <li className="breadcrumb-item active">Post</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="blog-details-area py-130 rpy-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <article className="blog-details-content">
                {post.image && (
                  <div className="image mb-30">
                    <img src={post.image} alt={post.title} />
                  </div>
                )}
                <Meta post={post} />
                <h1 className="h2">{post.title}</h1>
                <div className="blog-body">{renderNodes(nodes)}</div>
                <div className="mt-40">
                  <h5 className="mb-10">Related services</h5>
                  <ul className="list-style-one landing-list">
                    {related.links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                  <a className="theme-btn mt-15" href="/services#book">
                    book an appointment <i className="far fa-long-arrow-right"></i>
                  </a>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-7 col-sm-9">
              <Sidebar blog={{ status: 'ready', posts: blog.posts.map((p) => p.post), categories: blog.categories }} />
            </div>
          </div>
        </div>
        <ReviewCards reviews={reviewsFor(related.topics, 1)} title="A Client Review" />
      </section>
    </SiteShell>
  );
}
