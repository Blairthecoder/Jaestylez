// Service-area pages. Drive times and routes come from the salon address (630 Murphy Rd Ste 211, Stafford, TX 77477).
// Add real local detail here (landmarks, client quotes, photos) as the client supplies it; keep each page's facts distinct.

export type Area = {
  slug: string;
  city: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  drive: string;
  route: string;
  reasons: string[];
  faqs: { q: string; a: string }[];
};

const sharedNote =
  'All services are by appointment only. Walk-ins are not taken, and a non-refundable deposit reserves your time.';

export const areas: Area[] = [
  {
    slug: 'sugar-land',
    city: 'Sugar Land',
    title: 'Loctician Near Sugar Land, TX | Retwists & Starter Locs | Jae Stylez',
    description:
      'Licensed loctician about 10 minutes from Sugar Land, TX. Retwists, starter locs, instant locs, twists and silk press by appointment at 630 Murphy Rd, Stafford.',
    h1: 'Loctician Serving Sugar Land, TX',
    intro:
      'Jae Stylez is a licensed loctician in Stafford, about 10 minutes from Sugar Land. Sugar Land clients book retwists, starter locs, instant locs, two-strand twists and silk presses with Jasmin Lafond (Jae), who has ten years in the industry and puts hair health first.',
    drive: 'About 10 minutes from Sugar Land',
    route: 'Take US-59 (Southwest Freeway) to the Murphy Road exit in Stafford. The salon is at 630 Murphy Rd Ste 211, with on-site parking.',
    reasons: [
      'Loc maintenance on a schedule that fits your routine: retwist and palm roll, or interlocking.',
      'First time with a new loctician? Book the $30 In-Salon Consultation and leave with a plan.',
      'Evening appointments Tuesday through Thursday until 7 pm for after-work visits.',
    ],
    faqs: [
      {
        q: 'How far is Jae Stylez from Sugar Land?',
        a: 'About 10 minutes via US-59. The salon is at 630 Murphy Rd Ste 211, Stafford, TX 77477.',
      },
      {
        q: 'Do you have evening appointments for Sugar Land clients?',
        a: 'Yes. Tuesday through Thursday the salon is open until 7 pm. See live openings on the booking page.',
      },
      {
        q: 'Which service should I book if I am new?',
        a: 'If you are unsure about your hair or the method used on your locs, book the $30 In-Salon Consultation first. Otherwise pick the service you want and choose a day and time online.',
      },
    ],
  },
  {
    slug: 'missouri-city',
    city: 'Missouri City',
    title: 'Loctician Near Missouri City, TX | Loc Retwist & Twists | Jae Stylez',
    description:
      'Licensed loctician about 15 minutes from Missouri City, TX. Loc retwists, interlocking, starter locs, twists and silk press by appointment in Stafford.',
    h1: 'Loctician Serving Missouri City, TX',
    intro:
      'Missouri City clients drive about 15 minutes to Jae Stylez in Stafford for loc maintenance, starter locs, protective styles and silk press. Every visit starts with your scalp and hair condition, and ends with a plan you can keep up with.',
    drive: 'About 15 minutes from Missouri City',
    route: 'Take Highway 6 toward Stafford, then Murphy Road to 630 Murphy Rd Ste 211. Parking is on site.',
    reasons: [
      'Retwist and palm roll or interlocking maintenance, matched to how your locs are holding.',
      'Two-strand twists and goddess locs for protective styling with low tension at the base.',
      'Saturday appointments from 9 am to 4 pm, and Monday appointments from 8 am.',
    ],
    faqs: [
      {
        q: 'How long is the drive from Missouri City?',
        a: 'About 15 minutes via Highway 6.',
      },
      {
        q: 'Can you retwist locs another stylist started?',
        a: 'Yes. If they are thinning, matted, or you are unsure which method was used, book the In-Salon Consultation first so Jae can build a plan.',
      },
      {
        q: 'How do I reserve a time?',
        a: 'Book online with live availability, or call (346) 377-7185. A non-refundable deposit reserves your time.',
      },
    ],
  },
  {
    slug: 'richmond',
    city: 'Richmond',
    title: 'Loctician Near Richmond, TX | Starter Locs & Retwist | Jae Stylez',
    description:
      'Loctician about 15 minutes from Richmond, TX. Starter locs, instant locs, retwists, twists and silk press by appointment at Jae Stylez in Stafford.',
    h1: 'Loctician Serving Richmond, TX',
    intro:
      'Richmond clients are about 15 minutes from Jae Stylez in Stafford. Jae specializes in locs and natural hair, from starter locs and instant locs to retwists, microloc extensions and silk press.',
    drive: 'About 15 minutes from Richmond',
    route: 'Take US-59 northeast to the Murphy Road exit in Stafford. The salon is at 630 Murphy Rd Ste 211.',
    reasons: [
      'Starting locs? Compare starter locs, instant locs and microloc extensions before you book.',
      'Maintenance visits sized to your loc length and how long since your last appointment.',
      'Kids and men styles available. See the gallery for recent work.',
    ],
    faqs: [
      {
        q: 'How far is Stafford from Richmond?',
        a: 'About 15 minutes via US-59.',
      },
      {
        q: 'How long do starter locs take to mature?',
        a: 'Roughly 4 to 6 months for two-strand starts and 6 to 12 months for comb coils. Instant locs are locked from day one, with full softening at 4 to 8 weeks.',
      },
      {
        q: 'Do you sell loc care products?',
        a: 'Yes. The Lox Box line (growth tonic, peppermint hair whip, hydration mist, styling gel) is made in Houston and sold online and in the salon.',
      },
    ],
  },
  {
    slug: 'southwest-houston',
    city: 'Southwest Houston',
    title: 'Loctician in Southwest Houston | Natural Hair Stylist | Jae Stylez',
    description:
      'Loctician serving Southwest Houston, Manvel and Sienna from Stafford, TX. Locs, retwists, twists, braids and silk press. Book online with live availability.',
    h1: 'Loctician Serving Southwest Houston, TX',
    intro:
      'Clients come to Jae Stylez in Stafford from Southwest Houston (about 20 minutes via Beltway 8) and from Manvel and Sienna (about 25 minutes via Highway 6) for loc services, protective styles and silk press.',
    drive: 'About 20 minutes from Southwest Houston; about 25 minutes from Manvel and Sienna',
    route: 'From Southwest Houston take Beltway 8 to US-59 and exit at Murphy Road. From Manvel and Sienna take Highway 6. The salon is at 630 Murphy Rd Ste 211.',
    reasons: [
      'Houston humidity changes how natural hair behaves. Jae plans styles and aftercare around it.',
      'Silk press appointments before events, with prep instructions listed on the booking page.',
      'Full menu with live prices on the pricing page, so you know the cost before you book.',
    ],
    faqs: [
      {
        q: 'Is Jae Stylez in Houston?',
        a: 'The salon is in Stafford, TX, just southwest of Houston, off US-59 and Beltway 8.',
      },
      {
        q: 'Do you take walk-ins?',
        a: sharedNote,
      },
      {
        q: 'What are your hours?',
        a: 'Monday 8 am to 4 pm, Tuesday 9 am to 7 pm, Wednesday and Thursday 8 am to 7 pm, Friday 8:30 am to 5:30 pm, Saturday 9 am to 4 pm. Closed Sunday.',
      },
    ],
  },
];

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
