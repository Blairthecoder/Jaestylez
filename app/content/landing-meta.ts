import { photos, type Photo } from '@/app/content/photos';

// Per-page extras for the hair-style landing pages: the photo shown beside the intro, which reviews are
// relevant, and which pages/posts to link to (chosen for relevance to the reader's next question).

export type RelatedLink = { label: string; href: string; why: string };

export type LandingMeta = {
  photo: Photo;
  topics: string[];
  related: RelatedLink[];
};

const blog = (slug: string) => `/blog-details?slug=${slug}`;

export const landingMeta: Record<string, LandingMeta> = {
  'two-strand-twists': {
    photo: photos.twists,
    topics: ['twists', 'styles', 'natural'],
    related: [
      {
        label: 'Starter Locs',
        href: '/starter-locs',
        why: 'Two-strand twists are also the softest way to start locs.',
      },
      {
        label: 'Goddess Locs',
        href: '/goddess-locs',
        why: 'Another protective style with hair added.',
      },
      {
        label: 'Protective Style or Natural Style?',
        href: blog(
          'protective-style-or-natural-style-how-to-choose-without-damaging-your-hair',
        ),
        why: 'Read this before you pick a style for the season.',
      },
      {
        label: 'The Growth Tonic Scalp & Hair Oil',
        href: '/shop',
        why: 'Scalp care between twist appointments.',
      },
    ],
  },
  'instant-locs': {
    photo: photos.locsTwisted,
    topics: ['instant', 'crochet', 'locs', 'maintenance'],
    related: [
      {
        label: 'Starter Locs',
        href: '/starter-locs',
        why: 'The traditional loc journey, if you would rather grow into locs.',
      },
      {
        label: 'Loc Retwist and Palm Roll',
        href: '/loc-retwist-and-palm-roll',
        why: 'How instant locs are maintained after the install.',
      },
      {
        label: 'Microloc Extensions',
        href: '/micro-locs',
        why: 'Smaller locs, longer install.',
      },
      {
        label: 'A Simple Starter Loc Care Routine for the First 90 Days',
        href: blog('starter-loc-care-first-90-days'),
        why: 'Aftercare for new locs.',
      },
    ],
  },
  'loc-retwist-and-palm-roll': {
    photo: photos.locsTop,
    topics: ['retwist', 'maintenance', 'locs'],
    related: [
      {
        label: 'Interlocking Loc Maintenance',
        href: '/interlocking-loc-maintenance',
        why: 'The longer-holding alternative to palm rolling.',
      },
      {
        label: 'Palm Roll vs. Interlocking',
        href: blog('palm-roll-vs-interlocking-loc-maintenance'),
        why: 'A side-by-side guide to choosing a method.',
      },
      {
        label: 'How Often Should You Retwist Locs?',
        href: blog(
          'how-often-should-you-retwist-locs-signs-it-is-time-for-maintenance',
        ),
        why: 'Signs it is time for your next appointment.',
      },
      {
        label: 'The Lox Box',
        href: '/shop?category=The%20Lox%20Box',
        why: 'Loc care products made in Houston.',
      },
    ],
  },
  'starter-locs': {
    photo: photos.starterSide,
    topics: ['starter', 'locs', 'first-visit'],
    related: [
      {
        label: 'Instant Locs',
        href: '/instant-locs',
        why: 'Mature-looking locs in one appointment.',
      },
      {
        label: 'Two-Strand Twists',
        href: '/two-strand-twists',
        why: 'The two-strand method is a common way to start.',
      },
      {
        label: 'A Simple Starter Loc Care Routine for the First 90 Days',
        href: blog('starter-loc-care-first-90-days'),
        why: 'What to do after you leave the chair.',
      },
      {
        label: 'In-Salon Consultation',
        href: '/services/in-salon-consultation/',
        why: 'Not sure which method? Start here.',
      },
    ],
  },
  'silk-press': {
    photo: photos.curlsClips,
    topics: ['silk', 'natural', 'styles'],
    related: [
      {
        label: 'Silk Press Benefits and Booking Guide',
        href: blog(
          'stafford-houston-silk-press-benefits-and-booking-guide-for-natural-hair-care',
        ),
        why: 'What to expect before and after your press.',
      },
      {
        label: 'How Houston Humidity Changes Natural Hair',
        href: blog('houston-humidity-natural-hair'),
        why: 'Why a press behaves differently here.',
      },
      {
        label: 'Lavender Rose Hydration Mist',
        href: '/product-details?slug=lavender-rose-water',
        why: 'Refresh your hair between appointments.',
      },
      {
        label: 'Two-Strand Twists',
        href: '/two-strand-twists',
        why: 'A protective style for the weeks between presses.',
      },
    ],
  },
  'goddess-locs': {
    photo: photos.locsPonytail,
    topics: ['goddess', 'styles', 'braids'],
    related: [
      {
        label: 'Two-Strand Twists',
        href: '/two-strand-twists',
        why: 'Another protective style that gives your hair a break.',
      },
      {
        label: 'Hair Styles Gallery',
        href: '/hair-styles',
        why: 'See more finished looks.',
      },
      {
        label: 'Natural Hairstyles for Houston Weather, Workouts and Real Life',
        href: blog(
          'natural-hairstyles-that-make-sense-for-houston-weather-workouts-and-real-life',
        ),
        why: 'Which styles hold up in the heat.',
      },
      {
        label: 'Book Online',
        href: '/book',
        why: 'Choose your service and see live availability.',
      },
    ],
  },
  'micro-locs': {
    photo: photos.locsTwistsTop,
    topics: ['micro', 'locs', 'maintenance'],
    related: [
      {
        label: 'Instant Locs',
        href: '/instant-locs',
        why: 'Another same-day loc option.',
      },
      {
        label: 'Loc Retwist and Palm Roll',
        href: '/loc-retwist-and-palm-roll',
        why: 'How larger locs are maintained.',
      },
      {
        label: 'Interlocking Loc Maintenance',
        href: '/interlocking-loc-maintenance',
        why: 'A longer-holding maintenance method.',
      },
      {
        label: 'Book Micro Loc Retie',
        href: '/services?category=Micro%20Locs#book',
        why: 'See retie appointments by weeks since your last visit.',
      },
    ],
  },
  'interlocking-loc-maintenance': {
    photo: photos.locsUpdo,
    topics: ['interlocking', 'maintenance', 'locs'],
    related: [
      {
        label: 'Loc Retwist and Palm Roll',
        href: '/loc-retwist-and-palm-roll',
        why: 'The other maintenance method, compared.',
      },
      {
        label: 'Palm Roll vs. Interlocking',
        href: blog('palm-roll-vs-interlocking-loc-maintenance'),
        why: 'Which method fits your routine.',
      },
      {
        label: 'Starter Locs',
        href: '/starter-locs',
        why: 'Interlocking can also be used to start locs.',
      },
      {
        label: 'The Lox Box',
        href: '/shop?category=The%20Lox%20Box',
        why: 'Products for loc health between visits.',
      },
    ],
  },
  'monday-appointments': {
    photo: photos.collage,
    topics: ['monday', 'booking', 'about'],
    related: [
      {
        label: 'Book Online',
        href: '/book',
        why: 'Pick a service, then choose an available Monday.',
      },
      {
        label: 'In-Salon Consultation',
        href: '/services/in-salon-consultation/',
        why: 'First visit or changing methods? Book this first.',
      },
      {
        label: 'Loc Retwist and Palm Roll',
        href: '/loc-retwist-and-palm-roll',
        why: 'A common Monday appointment.',
      },
      {
        label: 'Starter Locs',
        href: '/starter-locs',
        why: 'Start your locs at the beginning of the week.',
      },
    ],
  },
};
