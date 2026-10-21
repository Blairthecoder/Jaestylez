import type { Metadata } from 'next';

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://iamjaestylez.com').replace(/\/$/, '');

const DEFAULT_IMAGE = '/images/jae/results-collage.jpg';

/** Canonical path with a trailing slash, matching how the static export serves every page. */
export const canonicalPath = (path: string) => (path === '/' ? '/' : `${path.replace(/\/$/, '')}/`);

type PageMeta = {
  /** Full <title>; used as-is (no site-name suffix). */
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
};

/** Title, description, canonical, Open Graph and Twitter tags for one page. */
export function pageMeta({ title, description, path, image = DEFAULT_IMAGE, type = 'website' }: PageMeta): Metadata {
  const url = canonicalPath(path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      siteName: 'Jae Stylez',
      locale: 'en_US',
      title,
      description,
      url,
      images: [{ url: image, alt: 'Locs, twists and braids by Jae Stylez in Stafford, TX' }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

export type Crumb = { name: string; path?: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      ...(c.path ? { item: `${siteUrl}${canonicalPath(c.path)}` } : {}),
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
