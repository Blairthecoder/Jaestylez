import { site } from '@/app/site-data';

const CITIES = ['Stafford', 'Sugar Land', 'Missouri City', 'Richmond', 'Houston', 'Manvel', 'Sienna'];

// Opening hours as listed on the Google Business Profile (kept in step with site.hours in site-data.ts).
const HOURS: { days: string[]; opens: string; closes: string }[] = [
  { days: ['Monday'], opens: '08:00', closes: '16:00' },
  { days: ['Tuesday'], opens: '09:00', closes: '19:00' },
  { days: ['Wednesday', 'Thursday'], opens: '08:00', closes: '19:00' },
  { days: ['Friday'], opens: '08:30', closes: '17:30' },
  { days: ['Saturday'], opens: '09:00', closes: '16:00' },
];

const SERVICE_TYPES = [
  'Loc Maintenance (Retwist, Palm Roll, Interlocking)',
  'Starter Locs',
  'Instant Locs',
  'Microloc Extensions',
  'Two-Strand Twists',
  'Goddess and Butterfly Locs',
  'Braids',
  'Silk Press',
  'Natural Hair Consultation',
];

/** LocalBusiness (HairSalon) structured data for the whole site. Set NEXT_PUBLIC_SITE_URL to the live domain at launch. */
export function localBusinessSchema(siteUrl: string) {
  const url = siteUrl.replace(/\/$/, '');
  return {
    '@context': 'https://schema.org',
    '@type': ['HairSalon', 'LocalBusiness'],
    '@id': `${url}/#business`,
    name: site.name,
    description: `${site.blurb} Locs, retwists, starter locs, twists, braids and silk press in Stafford, TX.`,
    slogan: site.tagline,
    url,
    logo: `${url}${site.logo}`,
    image: [`${url}/images/jae/results-collage.jpg`, `${url}/images/jae/jae-owner-portrait.jpg`],
    telephone: '+1-346-377-7185',
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '630 Murphy Rd Ste 211',
      addressLocality: 'Stafford',
      addressRegion: 'TX',
      postalCode: '77477',
      addressCountry: 'US',
    },
    hasMap: site.mapsUrl,
    openingHoursSpecification: HOURS.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: CITIES.map((name) => ({ '@type': 'City', name })),
    founder: {
      '@type': 'Person',
      name: site.owner,
      alternateName: site.ownerNickname,
      jobTitle: 'Licensed loctician and natural hair stylist',
      image: `${url}/images/jae/jae-owner-portrait.jpg`,
      worksFor: { '@id': `${url}/#business` },
    },
    knowsAbout: ['Locs', 'Loc maintenance', 'Natural hair care', 'Protective styles', 'Braids', 'Silk press'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Hair services',
      itemListElement: SERVICE_TYPES.map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
    },
    paymentAccepted: 'Cash, Credit Card, Zelle',
    currenciesAccepted: 'USD',
    identifier: { '@type': 'PropertyValue', propertyID: 'Google Knowledge Graph ID', value: site.googleKgmid },
    sameAs: [...site.social.map((s) => s.href), site.googleBusinessUrl],
  };
}
