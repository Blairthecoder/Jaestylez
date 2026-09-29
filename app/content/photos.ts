// Photos of Jae's work. Files live in /public/images/jae; the gallery data also keeps
// the older Wix-hosted gallery (see gallery-data.ts).

export type Photo = { file: string; alt: string; tags: ('locs' | 'twists' | 'braids' | 'curls' | 'kids')[] };

export const photos: Record<string, Photo> = {
  twists: {
    file: 'two-strand-twists',
    alt: 'Two-strand twists with clean parts, shown from the back',
    tags: ['twists'],
  },
  locsTop: {
    file: 'locs-top-view',
    alt: 'Neat loc roots with even parts, top view',
    tags: ['locs'],
  },
  locsTwisted: {
    file: 'locs-twisted-top-view',
    alt: 'Retwisted locs with clean diamond parts, top view',
    tags: ['locs'],
  },
  locsPonytail: {
    file: 'long-locs-ponytail',
    alt: 'Long locs styled in a high ponytail with a loc jewelry accent',
    tags: ['locs'],
  },
  locsUpdo: {
    file: 'locs-updo-purple',
    alt: 'Locs styled in an updo with defined roots',
    tags: ['locs'],
  },
  starterSide: {
    file: 'starter-locs-side-view',
    alt: 'Starter locs from the side with neat, low-tension parts',
    tags: ['locs'],
  },
  locsTwistsTop: {
    file: 'locs-twists-top-view',
    alt: 'Starter twists on natural hair, top view',
    tags: ['locs', 'twists'],
  },
  curlsClips: {
    file: 'curls-clips-install',
    alt: 'Curls sectioned with clips during a hair install',
    tags: ['curls'],
  },
  curlsUpdo: {
    file: 'curls-highlights-updo',
    alt: 'Curly updo with honey highlights',
    tags: ['curls'],
  },
  bantuCurls: {
    file: 'bantu-curls-top-view',
    alt: 'Bantu knot curl set, top view',
    tags: ['curls'],
  },
  menBraids: {
    file: 'braids-men-top-view',
    alt: 'Men’s braids with crisp square parts, top view',
    tags: ['braids'],
  },
  menBraidsCross: {
    file: 'braids-men-cross-parts',
    alt: 'Men’s braids with a cross-part pattern, top view',
    tags: ['braids'],
  },
  boxBraids: {
    file: 'box-braids-long',
    alt: 'Long box braids with triangle parts',
    tags: ['braids'],
  },
  feedIn: {
    file: 'feed-in-braids-long',
    alt: 'Long feed-in braids with straight-back parts',
    tags: ['braids'],
  },
  cornrowDesign: {
    file: 'cornrow-design-top-view',
    alt: 'Cornrow design with curved parts, top view',
    tags: ['braids'],
  },
  kidsBuns: {
    file: 'kids-braided-buns',
    alt: 'Child’s braided style with two buns',
    tags: ['kids', 'braids'],
  },
  kidsCornrows: {
    file: 'kids-cornrow-buns',
    alt: 'Child’s cornrows finished with two buns',
    tags: ['kids', 'braids'],
  },
  kidsStitch: {
    file: 'kids-stitch-braids',
    alt: 'Stitch braids on a young client',
    tags: ['kids', 'braids'],
  },
  loxBox: {
    file: 'lox-box-scalp-oils',
    alt: 'The Lox Box stimulating scalp oils in lavender and eucalyptus',
    tags: [],
  },
  collage: {
    file: 'results-collage',
    alt: 'Collage of locs, twists and curls by Jae Stylez',
    tags: [],
  },
  jae: {
    file: 'jae-rashawn-portrait',
    alt: 'Jae Rashawn, licensed loctician and natural hair stylist',
    tags: [],
  },
};

export const photoUrl = (p: Photo) => `/images/jae/${p.file}.jpg`;

/** Photos for the gallery filter, in display order. */
export const galleryPhotos = [
  'locsTop',
  'twists',
  'locsPonytail',
  'boxBraids',
  'locsTwisted',
  'curlsClips',
  'menBraids',
  'starterSide',
  'feedIn',
  'locsUpdo',
  'bantuCurls',
  'cornrowDesign',
  'locsTwistsTop',
  'curlsUpdo',
  'menBraidsCross',
  'kidsBuns',
  'kidsCornrows',
  'kidsStitch',
].map((k) => photos[k]);
