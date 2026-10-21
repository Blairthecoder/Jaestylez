'use client';

import { wix } from '@/app/lib/wix';
import { toPost, type BlogCategory, type BlogPost, type RichNode } from '@/app/lib/blog-shared';

export { formatDate } from '@/app/lib/blog-shared';
export type { BlogCategory, BlogPost, RichNode } from '@/app/lib/blog-shared';

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

export async function loadPostBySlug(slug: string): Promise<{ post: BlogPost; nodes: RichNode[] } | null> {
  const { post } = await wix().blogPosts.getPostBySlug(slug, { fieldsets: ['RICH_CONTENT'] });
  if (!post) return null;
  return { post: toPost(post), nodes: (post.richContent?.nodes ?? []) as RichNode[] };
}
