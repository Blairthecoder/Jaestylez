import type { BlogPost } from '@/app/lib/blog-shared';

// Which service pages, products and client reviews to show beside a blog post, keyed on words in its slug or title.

export const RELATED: { match: RegExp; links: { label: string; href: string }[]; topics: string[] }[] = [
  {
    match: /palm-roll|interlock/,
    links: [
      { label: 'Loc Retwist and Palm Roll', href: '/loc-retwist-and-palm-roll' },
      { label: 'Interlocking Loc Maintenance', href: '/interlocking-loc-maintenance' },
    ],
    topics: ['retwist', 'interlocking', 'maintenance'],
  },
  {
    match: /retwist/,
    links: [
      { label: 'Loc Retwist and Palm Roll', href: '/loc-retwist-and-palm-roll' },
      { label: 'Interlocking Loc Maintenance', href: '/interlocking-loc-maintenance' },
    ],
    topics: ['retwist', 'maintenance'],
  },
  {
    match: /starter-loc/,
    links: [
      { label: 'Starter Locs', href: '/starter-locs' },
      { label: 'Instant Locs', href: '/instant-locs' },
    ],
    topics: ['starter', 'locs', 'first-visit'],
  },
  {
    match: /silk-press/,
    links: [
      { label: 'Silk Press', href: '/silk-press' },
      { label: 'Lavender Rose Hydration Mist', href: '/product-details?slug=lavender-rose-water' },
    ],
    topics: ['silk', 'styles'],
  },
  {
    match: /protective|natural-hairstyles/,
    links: [
      { label: 'Two-Strand Twists', href: '/two-strand-twists' },
      { label: 'Goddess Locs', href: '/goddess-locs' },
      { label: 'Hair Styles Gallery', href: '/hair-styles' },
    ],
    topics: ['twists', 'goddess', 'styles'],
  },
  {
    match: /humidity/,
    links: [
      { label: 'Silk Press', href: '/silk-press' },
      { label: 'The Lox Box', href: '/shop?category=The%20Lox%20Box' },
    ],
    topics: ['silk', 'shop', 'healthy'],
  },
  {
    match: /./,
    links: [
      { label: 'Book Online', href: '/services#book' },
      { label: 'About Jae', href: '/about' },
    ],
    topics: ['about', 'natural', 'first-visit', 'booking'],
  },
];

export function relatedFor(post: BlogPost) {
  const key = `${post.slug} ${post.title}`.toLowerCase();
  return RELATED.find((r) => r.match.test(key)) ?? RELATED[RELATED.length - 1];
}

