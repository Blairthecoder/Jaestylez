// Build-time access to the Wix blog, used to pre-render one static page per post (so Google gets the post text,
// title and schema in the HTML instead of waiting on browser JavaScript). Same public client ID as the browser code.

import { createClient, OAuthStrategy } from '@wix/sdk';
import { categories, posts } from '@wix/blog';
import { toPost, type BlogCategory, type BlogPost, type RichNode } from '@/app/lib/blog-shared';

const CLIENT_ID = process.env.NEXT_PUBLIC_WIX_CLIENT_ID ?? '91133d63-5037-41ae-b7fd-f830b7719346';

export type FullPost = { post: BlogPost; nodes: RichNode[] };
export type BlogData = { posts: FullPost[]; categories: BlogCategory[] };

let cached: Promise<BlogData> | null = null;

async function load(): Promise<BlogData> {
  const client = createClient({ modules: { posts, categories }, auth: OAuthStrategy({ clientId: CLIENT_ID }) });
  let lastError: unknown;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const result = await client.posts
        .queryPosts({ fieldsets: ['RICH_CONTENT'] })
        .descending('firstPublishedDate')
        .limit(100)
        .find();
      const cats = await client.categories
        .queryCategories()
        .find()
        .then((r) => r.items.map((c) => ({ id: c._id ?? '', label: c.label ?? '' })))
        .catch(() => []);
      return {
        posts: result.items
          .filter((p) => p.slug)
          .map((p) => ({ post: toPost(p), nodes: (p.richContent?.nodes ?? []) as RichNode[] })),
        categories: cats,
      };
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, 800 * (attempt + 1)));
    }
  }
  throw lastError;
}

/** Every published post with its body, plus categories (fetched once per build). */
export function getBlog(): Promise<BlogData> {
  cached ??= load().catch((error) => {
    cached = null;
    throw error;
  });
  return cached;
}

export async function getPost(slug: string): Promise<FullPost | undefined> {
  return (await getBlog()).posts.find((p) => p.post.slug === slug);
}
