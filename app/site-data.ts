// Central place for the details that repeat across the site (header, footer,
// contact page). Copied from the current Jae Stylez site (iamjaestylez.com).

export const site = {
  name: 'Jae Stylez',
  tagline: 'Loctician & Natural Hair Stylist',
  owner: 'Jae Rashawn',
  phone: '(346) 377-7185',
  phoneHref: 'tel:+13463777185',
  email: 'booking@iamjaestylez.com',
  address: '630 Murphy Rd Ste 211, Stafford, TX 77477',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=630+Murphy+Rd+Ste+211+Stafford+TX+77477',
  logo: '/assets/images/logos/jae-stylez-logo.png',
  blurb: 'Healthy-hair-first styling from a licensed loctician serving Greater Houston.',
  hoursSummary: 'Tue - Thu until 7 pm · Closed Sunday',
  hours: [
    { day: 'Monday', time: 'Appointments by request' },
    { day: 'Tuesday', time: '9:00 am – 7:00 pm' },
    { day: 'Wednesday', time: '9:00 am – 7:00 pm' },
    { day: 'Thursday', time: '9:00 am – 7:00 pm' },
    { day: 'Friday', time: '9:00 am – 5:00 pm' },
    { day: 'Saturday', time: '8:00 am – 4:00 pm' },
    { day: 'Sunday', time: 'Closed' },
  ],
  social: [
    { icon: 'fab fa-instagram', label: 'Instagram', href: 'https://www.instagram.com/jaestylez/' },
    { icon: 'fab fa-facebook-f', label: 'Facebook', href: 'https://www.facebook.com/JaeStlyezz' },
    { icon: 'fab fa-tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@jaestylez' },
  ],
  googleReviewsUrl: 'https://share.google/tyXGOFilenpVDbY6m',
};

export type NavItem = { label: string; href?: string; children?: NavItem[] };

export const styleLinks: NavItem[] = [
  { label: 'Two-Strand Twists', href: '/two-strand-twists' },
  { label: 'Instant Locs', href: '/instant-locs' },
  { label: 'Loc Retwist and Palm Roll', href: '/loc-retwist-and-palm-roll' },
  { label: 'Starter Locs', href: '/starter-locs' },
  { label: 'Silk Press', href: '/silk-press' },
  { label: 'Interlocking Loc Maintenance', href: '/interlocking-loc-maintenance' },
  { label: 'Goddess Locs', href: '/goddess-locs' },
  { label: 'Microloc Extensions', href: '/micro-locs' },
];

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Hair Styles', href: '/hair-styles' },
  {
    label: 'Services',
    children: [{ label: 'All Services', href: '/services' }, { label: 'Pricing', href: '/pricing' }, ...styleLinks],
  },
  { label: 'Book Online', href: '/services#book' },
  { label: 'Monday Appointments', href: '/monday-appointments' },
  {
    label: 'Shop',
    children: [
      { label: 'All Products', href: '/shop' },
      { label: 'The Lox Box', href: '/shop?category=The%20Lox%20Box' },
      { label: 'Marilyn Jae Cosmetics', href: '/shop?category=Marilyn%20Jae%20Cosmetics' },
    ],
  },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
];

export const footerServices: NavItem[] = styleLinks.slice(0, 6);
