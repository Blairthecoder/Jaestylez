// Central place for the details that repeat across the site (header, footer,
// contact page). Everything here is still the template's placeholder text.

export const site = {
  name: 'Qutter',
  tagline: 'Hair Salon',
  phone: '012 (345) 67 895',
  phoneHref: 'tel:+012345678895',
  phoneFooter: '+012 (345) 67 89',
  phoneFooterHref: 'tel:+01234567890',
  email: 'support@gmail.com',
  address: '454 main Street 72 Main Drive, Calibry, Florida 20304',
  hoursLong: 'Sunday - Friday, 08 am - 09 pm',
  hoursShort: 'Sun - Friday, 08 am - 09 pm',
  aboutBlurb:
    'Sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore dolore magna aliq uauis epsum suspendisse ultrices',
  social: [
    { icon: 'fab fa-facebook-f', label: 'Facebook', href: '#' },
    { icon: 'fab fa-twitter', label: 'Twitter', href: '#' },
    { icon: 'fab fa-youtube', label: 'YouTube', href: '#' },
    { icon: 'fab fa-rocketchat', label: 'Chat', href: '#' },
  ],
};

export type NavItem = { label: string; href?: string; children?: NavItem[] };

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    children: [
      { label: 'All Services', href: '/services' },
      { label: 'Service Details', href: '/service-details' },
    ],
  },
  {
    label: 'Portfolio',
    children: [
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Portfolio Details', href: '/portfolio-details' },
    ],
  },
  {
    label: 'Pages',
    children: [
      {
        label: 'Shop',
        children: [
          { label: 'Shop', href: '/shop' },
          { label: 'Product Details', href: '/product-details' },
        ],
      },
      { label: 'About Us', href: '/about' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Our Offers', href: '/offers' },
    ],
  },
  {
    label: 'Blog',
    children: [
      { label: 'Blog Standard', href: '/blog' },
      { label: 'Blog Details', href: '/blog-details' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export const footerServices = [
  { label: 'Hair Cutting', href: '/service-details' },
  { label: 'Shaving & Design', href: '/about' },
  { label: 'Hair Colors', href: '/service-details' },
  { label: 'Beauty & Spa', href: '/shop' },
  { label: 'Body Massages', href: '/service-details' },
];

export const footerNews = [
  {
    title: 'Get Started With Introduction HTTP ES6 JavaScript',
    date: '25 sep 2021',
    image: '/assets/images/widgets/news-widget3.jpg',
  },
  {
    title: 'Web Standards What The Why And How Learn CSS',
    date: '26 sep 2021',
    image: '/assets/images/widgets/news-widget4.jpg',
  },
];
