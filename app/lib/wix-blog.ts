'use client';

import type { posts } from '@wix/blog';
import { wix, wixImageUrl } from '@/app/lib/wix';

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  minutes: number;
  image: string | null;
  thumb: string | null;
  categoryIds: string[];
};

export type BlogCategory = { id: string; label: string };

function toPost(p: posts.Post): BlogPost {
  return {
    id: p._id ?? '',
    slug: p.slug ?? '',
    title: p.title ?? '',
    excerpt: (p.excerpt ?? '').trim(),
    date: p.firstPublishedDate ? new Date(p.firstPublishedDate).toISOString() : '',
    minutes: p.minutesToRead ?? 0,
    image: wixImageUrl(p.media?.wixMedia?.image, 800, 560),
    thumb: wixImageUrl(p.media?.wixMedia?.image, 120, 120),
    categoryIds: p.categoryIds ?? [],
  };
}

export const formatDate = (iso: string) =>
  iso ? new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '';

let cachedPosts: Promise<BlogPost[]> | null = null;

/** All published posts, newest first. Shared so several widgets on a page make one request. */
export function loadPosts(): Promise<BlogPost[]> {
  cachedPosts ??= wix()
    .blogPosts.queryPosts()
    .descending('firstPublishedDate')
    .limit(100)
    .find()
    .then((result) => result.items.map(toPost))
    .catch((error) => {
      cachedPosts = null;
      throw error;
    });
  return cachedPosts;
}

export async function loadCategories(): Promise<BlogCategory[]> {
  const result = await wix().blogCategories.queryCategories().find();
  return result.items.map((c) => ({ id: c._id ?? '', label: c.label ?? '' }));
}

export type RichNode = {
  type: string;
  id?: string;
  nodes?: RichNode[];
  textData?: {
    text?: string;
    decorations?: { type: string; linkData?: { link?: { url?: string } } }[];
  };
  headingData?: { level?: number };
  imageData?: { image?: { src?: { id?: string } }; altText?: string };
  htmlData?: { html?: string };
};

export async function loadPostBySlug(slug: string): Promise<{ post: BlogPost; nodes: RichNode[] } | null> {
  const { post } = await wix().blogPosts.getPostBySlug(slug, { fieldsets: ['RICH_CONTENT'] });
  if (!post) return null;
  return { post: toPost(post), nodes: (post.richContent?.nodes ?? []) as RichNode[] };
}
