// Blog types and mappers shared by the build-time (server) and browser Wix clients. No client/server marker.

import type { posts } from '@wix/blog';
import { wixImageUrl } from '@/app/lib/wix-media';

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  modified: string;
  minutes: number;
  image: string | null;
  thumb: string | null;
  ogImage: string | null;
  categoryIds: string[];
};

export type BlogCategory = { id: string; label: string };

export function toPost(p: posts.Post): BlogPost {
  return {
    id: p._id ?? '',
    slug: p.slug ?? '',
    title: p.title ?? '',
    excerpt: (p.excerpt ?? '').trim(),
    date: p.firstPublishedDate ? new Date(p.firstPublishedDate).toISOString() : '',
    modified: p.lastPublishedDate ? new Date(p.lastPublishedDate).toISOString() : '',
    minutes: p.minutesToRead ?? 0,
    image: wixImageUrl(p.media?.wixMedia?.image, 800, 560),
    thumb: wixImageUrl(p.media?.wixMedia?.image, 120, 120),
    ogImage: wixImageUrl(p.media?.wixMedia?.image, 1200, 630),
    categoryIds: p.categoryIds ?? [],
  };
}

export const formatDate = (iso: string) =>
  iso ? new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '';

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

