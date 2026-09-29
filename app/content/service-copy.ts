// Supporting copy for every service page: what the style is, what to expect, aftercare and FAQs.
// Written per style family; each page fills in its own name, length, size, price, time and deposit so no two pages
// read the same. Facts that come from Jae's own pages (maintenance intervals, maturity timelines, how long a
// silk press lasts, what a consultation covers) are reused; everything else is general, hedged style knowledge.

import type { BookableService } from '@/app/lib/service-model';
import { site } from '@/app/site-data';

export type ServiceCopy = {
  about: string[];
  expect: string[];
  care: string[];
  faqs: { q: string; a: string }[];
  /** A guide page that covers this style in more depth. */
  pillar?: { label: string; href: string };
  /** Short label for the style, used in headings and descriptions. */
  style: string;
  description: string;
};

type Traits = {
  length?: string;
  size?: string;
  hairAdded: boolean;
  noHair: boolean;
  color: boolean;
  partial: boolean;
};

const LENGTHS: [RegExp, string][] = [
  [/neck/i, 'neck'],
  [/shoulder/i, 'shoulder'],
  [/lower back/i, 'lower-back'],
  [/mid[- ]?back|midb/i, 'mid-back'],
  [/waist/i, 'waist'],
  [/butt/i, 'butt'],
  [/thigh/i, 'thigh'],
];

function traitsOf(name: string): Traits {
  const n = name.toLowerCase();
  const size = n.match(/\b(small|medium|med|large|mini)\b/)?.[1];
  return {
    length: LENGTHS.find(([re]) => re.test(name))?.[1],
    size: size === 'med' ? 'medium' : size,
    hairAdded: /hair added|extension|extention|faux|butterfly|goddess|invisible locs w\/|nu locs|soft locs|crochet loose|individual locs|feed in|tribal|lemonade|passion|straight back|zig zag/i.test(name) && !/no hair added/i.test(name),
    noHair: /no hair added/i.test(name),
    color: /color/i.test(name),
    partial: /partial/i.test(name),
  };
}

const money = (s: BookableService) => (s.price ? (/^from/i.test(s.price) ? ` starting at ${s.price.replace(/^from\s*/i, '')}` : ` for ${s.price}`) : '');
const time = (s: BookableService) => (s.duration ? `about ${s.duration}` : 'a long appointment');
const deposit = (s: BookableService) => (s.deposit ? ` A ${s.deposit} non-refundable deposit reserves your time and is applied to your total.` : ' A non-refundable deposit reserves your time and is applied to your total.');
const confirmNote = 'Final timing depends on your hair length and density and is confirmed when you book.';

type Family = {
  id: string;
  test: RegExp;
  build: (s: BookableService, t: Traits) => Omit<ServiceCopy, 'description' | 'style'> & { style: string };
};

const shampooFaq = { q: 'Is a shampoo included?', a: 'Yes. Every service includes a shampoo except braided styles.' };
const ownHairFaq = {
  q: 'Do I bring my own hair?',
  a: 'For styles that use added hair, clients bring their own. Jae gives recommendations on brand, texture and quantity when you book, so you buy the right amount.',
};
const takedownFaq = {
  q: 'When should this style come down?',
  a: 'Jae gives you a takedown recommendation at your appointment. Damage usually happens when a style is too tight at the hairline or worn past its window, so take it down on time.',
};

const FAMILIES: Family[] = [
  {
    id: 'consultation',
    test: /consult/i,
    build: (s) => ({
      style: 'Consultation',
      about: [
        `An in-salon consultation is a short, one-on-one appointment to plan your hair before you book a bigger service. Jae looks at your hair's condition, length and density, talks through your goals and routine, and recommends the method and service that fit.`,
        `${s.name} is ${time(s)}${money(s)}. It is the right first step if you are starting locs for the first time, switching methods, transferring from another stylist, or not sure what your hair needs.`,
      ],
      expect: [
        'Tell Jae what you want your hair to do and how much time you want to spend on it.',
        'Share your hair history: color, chemical services and any past loc methods.',
        'Bring photos of styles you like.',
        'Leave with a recommended service and a clear idea of timing and pricing.',
      ],
      care: ['Once you have a plan, book the recommended service online. Your visit is easier when the plan is already agreed.'],
      faqs: [
        {
          q: 'Who should book a consultation first?',
          a: 'First-time loc clients, anyone changing loc methods, clients transferring from another stylist, and anyone whose locs are matted, thinning or overdue. It is optional for standard retwists, silk press and familiar repeat services.',
        },
        { q: 'What does the consultation cover?', a: 'Thirty minutes on your hair, your goals and a real service recommendation, so your next appointment is booked with confidence.' },
        { q: 'What should I bring?', a: 'Photos of styles you like and a note of anything that has been done to your hair, including color and past loc methods.' },
      ],
      pillar: { label: 'Starter Locs', href: '/starter-locs' },
    }),
  },
  {
    id: 'interlock',
    test: /interlock/i,
    build: (s) => ({
      style: 'Interlocking',
      about: [
        'Interlocking is a loc maintenance method where the loc is pulled through its own root to lock new growth in place. It holds longer than palm rolling, roughly six to ten weeks, and it survives washing, swimming and workouts.',
        `${s.name} is ${time(s)}${money(s)}. It suits active lifestyles, fine or thin hair, and anyone who cannot get in every month. It is also harder to reverse than a palm roll, which is why the method is chosen with care. ${confirmNote}`,
      ],
      expect: [
        'Jae checks your roots and the condition of each loc before choosing a pattern.',
        'Roots are cleaned with a shampoo first.',
        'Each loc is interlocked at the root with even tension, firm but not painful.',
        'Locs are fully dried before you leave.',
      ],
      care: [
        'Wash and swim as usual; interlocking is built for it.',
        'Avoid pulling on the roots between visits.',
        'Plan your next appointment for about six to ten weeks out.',
      ],
      faqs: [
        { q: 'How is interlocking different from a retwist?', a: 'A palm roll wraps new growth around the outside of the loc and holds about four to six weeks. Interlocking pulls the loc through its own root and holds about six to ten weeks.' },
        { q: 'Can interlocking be undone?', a: 'Not easily. Interlocking is much harder to reverse than palm rolling, so book a consultation first if you are unsure which method your locs need.' },
        { q: 'Who is interlocking best for?', a: 'Active clients, fine or thin hair, and anyone who cannot get in every month.' },
      ],
      pillar: { label: 'Interlocking Loc Maintenance', href: '/interlocking-loc-maintenance' },
    }),
  },
  {
    id: 'retwist',
    test: /^(retwist|partial retwist)/i,
    build: (s, t) => {
      const n = s.name.toLowerCase();
      const addOns: string[] = [];
      if (/detox/.test(n)) addOns.push('a clarifying detox to clear product buildup from your locs and scalp');
      if (/natural color/.test(n)) addOns.push('natural-toned color');
      else if (/basic color/.test(n)) addOns.push('a basic color service');
      if (/rope/.test(n)) addOns.push('rope twists, where two locs are twisted around each other');
      if (/barrel/.test(n)) addOns.push(/curly hair added/.test(n) ? 'barrel curls with curly hair added for volume' : 'barrel curls, where locs are rolled into rounded barrels');
      const braids = n.match(/(\d) braids/)?.[1];
      if (braids) addOns.push(`your locs styled into ${braids} large braids`);
      if (/fishtail/.test(n)) addOns.push('fishtail braids');
      if (/plaits/.test(n)) addOns.push('plaits (simple three-strand braids) of your locs');
      if (/two strands|two strand/.test(n)) addOns.push('two-strand twists of your locs');
      if (/updo/.test(n)) addOns.push('an updo');
      if (/curls/.test(n) && !/barrel/.test(n)) addOns.push('a curl set');
      if (/petal/.test(n)) addOns.push('a petals style, with locs looped into petal shapes');
      if (/miracle knot/.test(n)) addOns.push('a miracle knot loc style');
      if (/repair/.test(n)) addOns.push('loc repair for thin or weak spots');
      const detail = t.partial
        ? 'A partial retwist covers the perimeter and the parts that show, such as the hairline, edges and top, instead of every loc. It is useful between full appointments or before an event.'
        : addOns.length
          ? `This version adds ${addOns.join(' and ')} to the standard retwist.`
          : 'This is the standard retwist with no extra styling, focused on clean, secure roots.';
      return {
        style: 'Loc Retwist',
        about: [
          'A retwist (also called a palm roll) maintains established locs by twisting the new growth at the root so it blends into the loc. It keeps roots neat, sections defined and locs from joining together. Palm roll retwists are typically booked every four to six weeks.',
          `${s.name} is ${time(s)}${money(s)}. ${detail} ${confirmNote}`,
        ],
        expect: [
          'Jae checks your roots for thinning, tension spots and locs that have started to join.',
          'A shampoo is included so your roots are clean before they are twisted.',
          'New growth is parted and retwisted firm but never painful, because tension at the base is what costs hair.',
          addOns.length ? `Locs are dried, then ${addOns[0]}${addOns.length > 1 ? ' and the rest of the styling' : ''} is finished last.` : 'Locs are fully dried before you leave so the retwist holds.',
        ],
        care: [
          'Sleep in a satin bonnet or on a satin pillowcase.',
          'Do not re-twist your own roots between visits; over-twisting is what thins them.',
          'Keep moisture light, and book your next visit before your locs start to join.',
        ],
        faqs: [
          { q: `How often should I book ${s.name}?`, a: 'Palm roll retwists are usually done every four to six weeks. Slower growth, larger locs or thicker density can go a little longer, but retwisting more often than needed thins the root over time.' },
          shampooFaq,
          { q: 'What if it has been months since my last retwist?', a: 'Still book. Overdue roots take longer and may need separation work, so mention the timeframe when you book. If your locs are matted or thinning, start with the consultation.' },
          { q: 'Can you retwist locs another stylist made?', a: 'Yes. New clients are welcome. If you are not sure which method was used on your locs, book the consultation first so Jae can build a plan.' },
        ],
        pillar: { label: 'Loc Retwist and Palm Roll', href: '/loc-retwist-and-palm-roll' },
      };
    },
  },
  {
    id: 'starter',
    test: /starter|2 strand start|two strand start/i,
    build: (s, t) => {
      const cover = /half head/i.test(s.name)
        ? 'This is a half-head start, so locs are started on part of the head instead of all of it.'
        : /half shaved/i.test(s.name)
          ? 'This version is half shaved: part of the head is shaved and locs are started on the rest.'
          : t.size === 'small'
            ? 'Small starter locs mean more locs and a finer look with more styling options, which also means a longer install.'
            : t.size === 'large'
              ? 'Large starter locs mean fewer, bolder locs and a shorter install.'
              : t.size === 'medium'
                ? 'Medium starter locs are the balanced middle: a classic size that is neither too fine nor too bold.'
                : 'The size and pattern are chosen to suit your hair and how you want your locs to look.';
      const length = t.length ? ` on ${t.length}-length hair` : '';
      return {
        style: 'Starter Locs',
        about: [
          'Starter locs are the first stage of a loc journey. Natural hair is sectioned and formed into locs using a method such as two-strand twists, comb coils or interlocking. They begin soft and neat, then tighten and mature over time.',
          `${s.name}${length} is ${time(s)}${money(s)}. ${cover} Two-strand starts typically take about four to six months to mature, and comb coils six to twelve months. ${confirmNote}`,
        ],
        expect: [
          'Jae reviews your hair length, density and lifestyle, and confirms the method, size and pricing before you commit.',
          'Your hair is shampooed so the parts and locs start clean.',
          'Locs are sectioned with clean parts and low tension at the base, in a consistent size across your head.',
          'You get a plan for the first weeks, including when to come back for maintenance.',
        ],
        care: [
          'Expect frizz and shrinkage in the early months; that is the loc journey, not a problem.',
          'Sleep in a satin bonnet.',
          'Keep washing gentle and avoid heavy products that build up.',
        ],
        faqs: [
          { q: 'How long do starter locs take to mature?', a: 'Roughly four to six months for two-strand starts and six to twelve months for comb coils. Instant locs are locked from day one instead.' },
          { q: 'Do I need a consultation first?', a: 'Yes for a first-time loc install. Method, size and pricing are confirmed before you commit, and the consultation is $30.' },
          { q: 'What size should I choose?', a: 'Small gives the most versatility and the longest install, large is the fastest and boldest, and medium is the balanced default. Your hair density and lifestyle also affect the recommendation.' },
        ],
        pillar: { label: 'Starter Locs', href: '/starter-locs' },
      };
    },
  },
  {
    id: 'instant',
    test: /instant/i,
    build: (s, t) => ({
      style: 'Instant Locs',
      about: [
        'Instant locs are installed with a crochet method that builds fully locked locs in a single appointment, so you leave with a mature-looking loc style instead of waiting months for locs to form.',
        `${s.name} is ${time(s)}${money(s)}.${t.partial ? ' This is a partial install, covering part of the head.' : ''}${t.length ? ` The ${t.length} stretched length is measured with your hair pulled straight, which is why it is a different service from the shorter options.` : ''} Instant locs are locked from day one and fully soften over about four to eight weeks. ${confirmNote}`,
      ],
      expect: [
        'Consultation-style planning up front: length, density and how many locs you want.',
        'A shampoo first, then your hair is sectioned into even locs.',
        'Each loc is crocheted to lock it from root to end, so the whole install takes several hours.',
        'Aftercare guidance for the first weeks, while the locs settle and soften.',
      ],
      care: ['Keep the first weeks gentle and avoid pulling on the locs.', 'Sleep in a satin bonnet.', 'Book your first maintenance visit as advised so the roots stay neat as new growth comes in.'],
      faqs: [
        { q: 'How do instant locs differ from starter locs?', a: 'Instant locs are locked at install and look mature on day one. Starter locs begin soft and form over four to twelve months, depending on the method.' },
        { q: 'How long does the install take?', a: `${s.name} is ${time(s)}. Full instant loc installs commonly run several hours, depending on length and density.` },
        { q: 'When do instant locs feel soft?', a: 'They are locked from day one and fully soften over about four to eight weeks.' },
      ],
      pillar: { label: 'Instant Locs', href: '/instant-locs' },
    }),
  },
  {
    id: 'micro',
    test: /micro/i,
    build: (s, t) => {
      const retie = /retie/i.test(s.name);
      const weeks = s.name.match(/(\d+\s?-?\s?\d*\s?\+?)\s*weeks?/i)?.[0];
      return {
        style: retie ? 'Microloc Retie' : 'Microlocs',
        about: [
          retie
            ? 'A microloc retie re-tightens the roots of very small locs as new growth comes in, keeping them neat and secure. Because there are so many locs, the time needed depends mostly on how long it has been since your last visit.'
            : 'Microlocs are very small locs, giving a fine, versatile look. Because there are many more locs than a traditional style, installs and maintenance take longer than larger sizes.',
          retie
            ? `${s.name} is ${time(s)}${money(s)}. ${weeks ? `It is booked for clients who are about ${weeks.toLowerCase()} since their last retie` : 'Choose the retie that matches how long it has been since your last visit'}, so enough time is set aside. ${confirmNote}`
            : `${s.name} is ${time(s)}${money(s)}. ${/twist/i.test(s.name) ? 'The locs are started with twists.' : /braid/i.test(s.name) ? 'The locs are started with braids.' : ''}${/extent|extens/i.test(s.name) ? ' Extensions add length and fullness.' : ''}${/natural/i.test(s.name) ? ' This one uses your own hair only.' : ''} ${confirmNote}`,
        ],
        expect: [
          'Jae checks the condition of your roots and locs.',
          'A shampoo first, so buildup does not get locked in.',
          retie ? 'Roots are retied section by section, with even tension.' : 'Hair is parted into small, even sections and started with the chosen method.',
          'You leave with a maintenance schedule that suits the size of your locs.',
        ],
        care: ['Sleep in a satin bonnet or a loose satin cap.', 'Wash gently and rinse well so residue does not build up in small locs.', 'Book your next retie based on how fast your hair grows.'],
        faqs: [
          { q: 'How do I choose the right microloc retie?', a: 'Book by how many weeks it has been since your last visit. Partial reties cover two to three weeks, and there are longer options for six to eight, nine to ten and ten-plus weeks.' },
          { q: 'Why do microlocs take so long?', a: 'There are many small locs, and each one is done individually. Longer hair and higher density take longer still.' },
          ...(t.hairAdded ? [ownHairFaq] : []),
        ],
        pillar: { label: 'Microloc Extensions', href: '/micro-locs' },
      };
    },
  },
  {
    id: 'loc-extensions',
    test: /loc extensions|(2|two) strand twist ?\/? ?ext/i,
    build: (s, t) => ({
      style: 'Loc Extensions',
      about: [
        /twist/i.test(s.name)
          ? 'Two-strand twist extensions are twists made with added hair blended into your natural hair, giving you length and fullness without waiting for your hair to grow.'
          : 'Loc extensions add length and fullness to locs with added hair, so you can have a longer look while your own locs keep growing.',
        `${s.name} is ${time(s)}${money(s)}.${t.length ? ` The ${t.length} length is what sets this option apart from the shorter ones.` : ''} It is a long appointment, so eat beforehand and bring water. ${confirmNote}`,
      ],
      expect: ['Length, fullness and hair type are agreed at the start.', 'A shampoo first, then hair is parted evenly.', 'Extension hair is worked in with low tension at the base.', 'Aftercare and a recommended wear window at the end.'],
      care: ['Sleep in a satin bonnet.', 'Keep the scalp clean and lightly moisturized.', 'Book maintenance before new growth starts loosening the roots.'],
      faqs: [ownHairFaq, takedownFaq, { q: 'How long is the appointment?', a: `${s.name} is ${time(s)}. Bring a snack, water and something to watch.` }],
      pillar: { label: 'Microloc Extensions', href: '/micro-locs' },
    }),
  },
  {
    id: 'artificial',
    test: /butterfly|goddess|faux|invisible|nu locs|soft locs|individual locs|crochet loose/i,
    build: (s, t) => {
      const n = s.name.toLowerCase();
      const kind = /butterfly/.test(n)
        ? 'Butterfly locs are a textured, distressed faux loc style with loops and loose bits that give a soft, lived-in look.'
        : /goddess/.test(n)
          ? 'Goddess locs are faux locs finished with soft, curly ends for a boho, flowing look.'
          : /invisible/.test(n)
            ? 'Invisible locs are a lightweight faux loc style designed to look like natural locs, with the wrap kept flat and close.'
            : /nu locs/.test(n)
              ? 'Nu locs are a soft, textured loc look installed with added hair.'
              : /soft locs/.test(n)
                ? 'Knotless soft locs are installed with added hair without a knot at the base, for a lighter feel at the root.'
                : /individual/.test(n)
                  ? 'Individual locs are installed one at a time with added hair, so each loc is placed exactly where it belongs.'
                  : /crochet loose/.test(n)
                    ? 'Crochet loose hair styles use a crochet needle to work loose hair into braids or locs for a full, textured look.'
                    : 'Faux locs give the look of locs without the long-term commitment, using added hair wrapped or installed on your own hair.';
      const styleName = /butterfly/.test(n) ? 'Butterfly Locs' : /goddess/.test(n) ? 'Goddess Locs' : /invisible/.test(n) ? 'Invisible Locs' : /nu locs/.test(n) ? 'Nu Locs' : /soft locs/.test(n) ? 'Knotless Soft Locs' : /individual/.test(n) ? 'Individual Locs' : /crochet/.test(n) ? 'Crochet Loose Hair' : 'Faux Locs';
      return {
        style: styleName,
        about: [
          `${kind} It is a protective style, which means it gives your own hair a break from daily styling.`,
          `${s.name} is ${time(s)}${money(s)}.${t.length ? ` The ${t.length} length affects how much hair is needed and how long the install takes.` : ''}${t.noHair ? ' This version uses your own hair only, with no hair added.' : ' Hair is added for length and volume.'} ${confirmNote}`,
        ],
        expect: ['Length, size and finish are confirmed before Jae starts.', 'Hair is parted with clean sections and low tension at the base.', 'The style is installed section by section; expect a long appointment.', 'You leave with care tips and a recommended takedown window.'],
        care: ['Sleep in a satin bonnet.', 'Keep the scalp clean with diluted shampoo and let it dry fully.', 'Take the style down on schedule so it does not mat at the root.'],
        faqs: [ownHairFaq, takedownFaq, { q: 'Will this damage my hair?', a: 'Not when it is installed with low tension and taken down on time. Damage happens when styles are too tight at the hairline or worn too long.' }],
        pillar: { label: 'Goddess Locs', href: '/goddess-locs' },
      };
    },
  },
  {
    id: 'crochet-roots',
    test: /crochet roots/i,
    build: (s) => ({
      style: 'Crochet Loc Maintenance',
      about: [
        'Crochet loc maintenance uses a small crochet tool to work new growth back into each loc at the root, keeping locs neat without a full retwist.',
        `${s.name} is ${time(s)}${money(s)}. It is often chosen by clients who want a smooth, secure root and low tension. ${confirmNote}`,
      ],
      expect: ['Jae checks each root and the condition of your locs.', 'A shampoo first so the roots are clean.', 'New growth is crocheted into the loc, section by section.', 'Locs are dried and finished before you leave.'],
      care: ['Sleep in a satin bonnet.', 'Avoid pulling at loose ends between visits.', 'Book your next visit as new growth builds.'],
      faqs: [
        { q: 'How is crochet maintenance different from a retwist?', a: 'A retwist twists new growth at the root. Crochet maintenance works new growth into the loc with a tool, which some clients prefer for a smoother root.' },
        shampooFaq,
      ],
      pillar: { label: 'Loc Retwist and Palm Roll', href: '/loc-retwist-and-palm-roll' },
    }),
  },
  {
    id: 'loc-utility',
    test: /loc repair only|loc reattaching|loc comb out|loc style only|loc knot bob|pipe cleaner|loc two strands/i,
    build: (s) => {
      const n = s.name.toLowerCase();
      const [style, def, expect, faq]: [string, string, string[], { q: string; a: string }] = /repair/.test(n)
        ? ['Loc Repair', 'Loc repair addresses locs that have thinned, weakened or broken so they can hold together and keep growing.', ['Jae assesses which locs need repair and how much length remains.', 'The repair method is chosen to suit the damage.', 'You get advice on protecting the repaired locs.'], { q: 'Can a broken loc be saved?', a: 'It depends on how much of the loc remains. Jae assesses in person, and a consultation is a good start if many locs are affected.' }]
        : /reattach/.test(n)
          ? ['Loc Reattaching', 'Loc reattaching reconnects locs that have broken off, so length and fullness can be restored.', ['Jae reviews the broken locs and the length you want to keep.', 'Each loc is reattached individually.', 'You get aftercare to protect the reattached locs.'], { q: 'How long does reattaching take?', a: `${s.name} is ${time(s)} because each loc is done individually.` }]
          : /comb out/.test(n)
            ? ['Loc Comb Out', 'A loc comb out takes locs out and returns the hair to its unlocked state by separating and combing each loc. It is a long, careful service.', ['Jae talks through what to expect and how much length may be lost.', 'Each loc is loosened and combed out with conditioner.', 'Your hair is washed and detangled at the end.'], { q: 'Can combed-out locs be locked again?', a: 'Combed-out hair is starting over. If you want locs again, talk to Jae about starter locs or instant locs.' }]
            : /style only/.test(n)
              ? ['Loc Styling', 'A loc styling appointment is for styling locs that are already maintained, such as updos, braids or curls, without a full retwist.', ['Tell Jae the look you want and bring a photo.', 'Locs are styled with care for the roots.', 'You get tips to keep the style fresh.'], { q: 'Is a retwist included?', a: 'No. Loc Style Only is styling only. If your roots also need work, book a retwist with a styling add-on.' }]
              : /bob/.test(n)
                ? ['Loc Knot Bob', 'A loc knot bob shapes locs into a short, knotted bob for a sculpted look.', ['Length and shape are agreed first.', 'Locs are twisted and knotted into the bob shape.', 'You get advice on keeping the shape neat.'], { q: 'Who is a knot bob for?', a: 'Clients who want a short, polished loc look and have enough length to knot.' }]
                : /pipe cleaner/.test(n)
                  ? ['Loc Curls', 'Pipe cleaner curls are spiral curls set on locs, giving them a bouncy, defined look.', ['Curl size is agreed first.', 'Locs are set section by section.', 'You get tips for keeping the curls.'], { q: 'How long do the curls last?', a: 'It depends on humidity, sleep habits and how you wear them. Wrap the curls at night to help them last.' }]
                  : ['Boho Loc Style', 'A two-strand boho loc style pairs twisted locs with loose, curly ends for a relaxed, textured look.', ['Jae confirms the look and length.', 'Locs are twisted and finished with soft, loose ends.', 'You get care tips to keep them neat.'], { q: 'Is this a protective style?', a: 'It is a styled look on your own locs. Ask Jae if it suits the state of your roots.' }];
      return {
        style,
        about: [def, `${s.name} is ${time(s)}${money(s)}. ${confirmNote}`],
        expect: expect,
        care: /comb out/.test(n)
          ? ['Expect a full wash and deep condition at home in the days after.', 'Detangle gently from the ends up and use plenty of conditioner.', 'Talk to Jae about what comes next, whether that is a new style or new locs.']
          : /repair|reattach/.test(n)
            ? ['Handle repaired locs gently and avoid pulling.', 'Sleep in a satin bonnet.', 'Book a retwist or maintenance visit as Jae advises to keep the repair secure.']
            : ['Sleep in a satin bonnet.', 'Keep moisture light so the style lasts.', 'Book your next maintenance visit as advised.'],
        faqs: [faq, shampooFaq],
        pillar: { label: 'Loc Retwist and Palm Roll', href: '/loc-retwist-and-palm-roll' },
      };
    },
  },
  {
    id: 'two-strand',
    test: /two strand|2 strand/i,
    build: (s, t) => {
      const braided = /braided base/i.test(s.name);
      const mini = /mini/i.test(s.name);
      const kind = braided
        ? 'Each twist starts with a small braid at the root, then continues as a two-strand twist for the length. That gives extra hold and cleaner roots, and it typically lasts about three to four weeks with proper care.'
        : t.hairAdded || /hair added/i.test(s.name)
          ? 'Extension hair is added at the root and twisted with your own hair for length, volume and longevity. Twists with hair added typically last about four to eight weeks, depending on size and care.'
          : 'Your natural hair is sectioned and twisted in two strands with no hair added. These twists are quick to install and typically last one to two weeks worn as-is, or work as a base for a twist-out.';
      const size = t.size ? ` This is the ${t.size} size.` : '';
      return {
        style: 'Two-Strand Twists',
        about: [
          `Two-strand twists are a versatile protective style made by twisting two sections of hair around each other. Done well, they give your hair a break from heat, tension and daily manipulation. ${kind}`,
          `${s.name} is ${time(s)}${money(s)}.${size}${mini ? ' Mini twists are very small, so they take the longest and give the most detailed look.' : ''} ${confirmNote}`,
        ],
        expect: ['Twist size, length and whether hair is added are confirmed at the start.', 'A shampoo first when natural hair is used, so the twists grip clean hair.', 'Clean parts, consistent size and low tension at the base, with each twist rolled firm but never painful.', 'Aftercare and a takedown recommendation before you leave.'],
        care: ['Sleep on satin every night.', 'Refresh every two to three weeks with a diluted shampoo instead of scrubbing.', 'Do not re-twist between visits, and take the style down on time.'],
        faqs: [
          { q: 'How long do two-strand twists last?', a: 'Natural hair twists last about one to two weeks as-is, twists with a braided base about three to four weeks, and twists with hair added about four to eight weeks, depending on size and care.' },
          ...(t.hairAdded || /hair added/i.test(s.name) ? [ownHairFaq] : []),
          { q: 'Can I wear them as a twist-out?', a: 'Yes. Twists left in for two to five days and then unraveled give a defined twist-out. Slightly damp hair at install gives the best result.' },
          takedownFaq,
        ],
        pillar: { label: 'Two-Strand Twists', href: '/two-strand-twists' },
      };
    },
  },
  {
    id: 'silk-press',
    test: /silk press|thermal|wand curls/i,
    build: (s) => {
      const wand = /wand/i.test(s.name);
      const thermal = /thermal/i.test(s.name);
      return {
        style: wand ? 'Wand Curls' : thermal ? 'Thermal Styling' : 'Silk Press',
        about: [
          wand
            ? 'Wand curls are heat-styled curls set with a curling wand, giving loose, defined curls with shine and movement.'
            : thermal
              ? 'A thermal service styles hair with controlled heat, smoothing and shaping it without adding other services.'
              : 'A silk press smooths and straightens natural hair with heat while keeping movement, body and shine, without chemical relaxers. Hair is washed, deep conditioned, blown out with tension and flat ironed in small sections at a controlled temperature.',
          `${s.name} is ${time(s)}${money(s)}. ${wand || thermal ? 'Healthy hair and careful heat control make the difference.' : 'The result is sleek with bounce, not board-straight, and it typically lasts five to ten days depending on humidity, sleep habits and workouts.'}${/color/i.test(s.name) ? ' This version includes a permanent color service, which adds time.' : ''} ${confirmNote}`,
        ],
        expect: ['Jae checks your hair health and heat history first.', 'You are shampooed and deep conditioned.', 'Your hair is stretched with a blowout, then styled in small sections at a controlled temperature.', 'You leave with tips for wrapping your hair and protecting the style from humidity.'],
        care: ['Wrap your hair at night with a satin scarf or bonnet.', 'Avoid getting it wet; humidity is the main reason a press reverts.', 'Spacing presses out protects your curl pattern.'],
        faqs: [
          { q: 'Will a silk press damage my hair?', a: 'It requires precise heat control. Too much heat can damage your curl pattern, so healthy hair and careful temperatures matter more than getting it bone-straight.' },
          { q: 'How long does it last?', a: 'Typically five to ten days depending on humidity, how you sleep and whether you work out.' },
          { q: 'Should my hair be product-free?', a: 'Arrive with clean, product-free hair when you can. A shampoo is included, and skipping heavy oil or gel the day of helps.' },
        ],
        pillar: { label: 'Silk Press', href: '/silk-press' },
      };
    },
  },
  {
    id: 'curls',
    test: /flexi|perm rod|curl definition|bantu|comb coil/i,
    build: (s) => {
      const n = s.name.toLowerCase();
      const [style, def]: [string, string] = /flexi/.test(n)
        ? ['Flexi Rod Set', 'A flexi rod set wraps damp hair around flexible foam rods to create soft, bouncy, defined curls without heat.']
        : /perm rod/.test(n)
          ? ['Perm Rod Set', 'A perm rod set wraps damp hair around perm rods to create tight, uniform spiral curls that last for days.']
          : /definition/.test(n)
            ? ['Curl Definition', 'A curl definition service shapes and enhances your natural curl pattern so curls look moisturized, separated and defined.']
            : /bantu/.test(n)
              ? ['Bantu Knots', 'Bantu knots are small coiled knots of hair. Wear them as a style or take them out for a soft curly bantu knot-out.']
              : ['Comb Coils', 'Comb coils shape hair into small coils with a comb. They are a common way to start locs and can also be worn as a style.'];
      return {
        style,
        about: [
          def,
          `${s.name} is ${time(s)}${money(s)}. ${/comb coil/.test(n) ? 'As a loc-starting method, comb coils typically take six to twelve months to mature. ' : ''}${confirmNote}`,
        ],
        expect: ['Jae checks your hair and agrees the look with you.', 'Your hair is shampooed and prepped.', 'The style is set section by section.', 'You leave with care tips to help it last.'],
        care: ['Protect the style at night with a satin bonnet.', 'Avoid heavy product that weighs curls down.', 'Refresh with a light mist as needed.'],
        faqs: [
          { q: `How long does ${s.name} last?`, a: 'It depends on your hair, humidity and how you sleep. Protecting the style at night helps it last longer.' },
          shampooFaq,
        ],
        pillar: { label: 'Hair Styles Gallery', href: '/hair-styles' },
      };
    },
  },
  {
    id: 'natural-style',
    test: /flat twist|miracle knot|freestyle|plaits|cornrows natural/i,
    build: (s, t) => {
      const n = s.name.toLowerCase();
      const [style, def]: [string, string] = /flat twist out/.test(n)
        ? ['Flat Twist Out', 'A flat twist out uses flat twists on damp hair, then unravels them for defined, stretched waves and curls.']
        : /flat twist/.test(n)
          ? ['Flat Twist Updo', 'A flat twist updo lays twists flat against the scalp and pins them up into a polished style.']
          : /miracle/.test(n)
            ? ['Miracle Knots', 'Miracle knots is a natural hair style with knotted sections that create a sculpted, textured look.']
            : /freestyle/.test(n)
              ? ['Custom Style', 'A freestyle appointment lets Jae design a custom style around your hair, your ideas and your reference photos.']
              : /cornrows/.test(n)
                ? ['Cornrows', 'Cornrows are braids that lie flat against the scalp in rows, worn on natural hair with no hair added.']
                : ['Plaits', 'Plaits are simple three-strand braids, done in the size you choose for a protective or everyday style.'];
      return {
        style,
        about: [def, `${s.name} is ${time(s)}${money(s)}.${t.size ? ` This is the ${t.size} size.` : ''}${t.hairAdded ? ' Hair is added.' : ''} ${confirmNote}`],
        expect: ['Jae agrees the look, size and finish with you.', 'Your hair is prepped, with a shampoo included unless the style is braided.', 'The style is installed with clean parts and low tension.', 'You leave with care tips for the style.'],
        care: ['Sleep in a satin bonnet.', 'Keep moisture light and avoid heavy product buildup.', 'Take braided styles down on time.'],
        faqs: [{ q: `What should I bring for ${s.name}?`, a: 'Arrive with clean, product-free hair and a photo of the look you want. Tell Jae about anything that affects how the style should be done.' }, ...(t.hairAdded ? [ownHairFaq] : [])],
        pillar: { label: 'Hair Styles Gallery', href: '/hair-styles' },
      };
    },
  },
  {
    id: 'men',
    test: /\bman\b|\bmen\b|bund/i,
    build: (s) => ({
      style: /bund/i.test(s.name) ? 'Man Bun' : "Men's Braids",
      about: [
        /bund/i.test(s.name)
          ? 'A man bun style pairs a half-shaved cut with braids gathered into a bun, for a sharp, easy-to-wear look.'
          : "Men's braids are neat braids in patterns such as straight backs or full-head designs, kept close to the scalp for a clean look that lasts.",
        `${s.name} is ${time(s)}${money(s)}.${/color/i.test(s.name) ? ' This version includes a color service.' : ''} ${confirmNote}`,
      ],
      expect: ['Pattern, size and finish are agreed first.', 'Clean, even parts across the head.', 'Braids are installed close and neat with comfortable tension.', 'You leave with care tips to keep the style fresh.'],
      care: ['Sleep in a satin bonnet or durag.', 'Keep the scalp clean and lightly moisturized.', 'Take braids down on schedule.'],
      faqs: [{ q: 'How long do braids last on men?', a: 'It depends on hair type, braid size and care. Jae recommends when to take them down at your appointment.' }, { q: 'Is a shampoo included?', a: 'Every service includes a shampoo except braided styles, so arrive with clean hair.' }],
      pillar: { label: 'Hair Styles Gallery', href: '/hair-styles' },
    }),
  },
  {
    id: 'braids',
    test: /feed|straight back|zig zag|lemonade|tribal|fulani|passion|braid/i,
    build: (s, t) => {
      const n = s.name.toLowerCase();
      const [style, def]: [string, string] = /feed in ponytail/.test(n)
        ? ['Feed-In Ponytail', 'A feed-in ponytail braids the hair upward with braiding hair added gradually, finished in a sleek ponytail.']
        : /feed in/.test(n) && /passion/.test(n)
          ? ['Feed-In and Passion Twist', 'This style combines feed-in braids on one half with passion twists on the other, for two textures in one look.']
          : /feed in/.test(n)
            ? ['Feed-In Braids', 'Feed-in braids add braiding hair gradually as the braid is made, so the start looks natural and flat instead of bulky.']
            : /lemonade/.test(n)
              ? ['Lemonade Braids', 'Lemonade braids are side-swept cornrows that run to one side, usually finished long.']
              : /zig zag/.test(n)
                ? ['Zig Zag Braids', 'Zig zag straight-back braids use zig-zag parts for a graphic take on classic straight backs.']
                : /straight back/.test(n)
                  ? ['Straight-Back Braids', 'Straight-back braids run from the hairline straight to the back, worn long or short in the size you choose.']
                  : /tribal/.test(n)
                    ? ['Tribal Braids', 'Tribal braids are patterned cornrow-style braids, often finished with knotless braids or twists at the back.']
                    : ['Braids', 'Braids are a protective style that keeps your hair neatly held and low-maintenance.'];
      return {
        style,
        about: [
          `${def} It is a protective style, so it gives your own hair a break from daily styling.`,
          `${s.name} is ${time(s)}${money(s)}.${t.length ? ` The ${t.length} length affects how much hair is needed and the time it takes.` : ''} Braiding hair is not included in the price, so you bring your own. ${confirmNote}`,
        ],
        expect: ['Pattern, length and size are confirmed before starting.', 'Clean sections with low tension at the hairline.', 'Braids are installed neatly section by section.', 'Aftercare and a takedown recommendation at the end.'],
        care: ['Sleep in a satin bonnet.', 'Keep the scalp clean and lightly moisturized.', 'Take braids down on time to prevent matting at the root.'],
        faqs: [ownHairFaq, takedownFaq, { q: 'Is a shampoo included?', a: 'Every service includes a shampoo except braided styles, so arrive with clean, product-free hair.' }],
        pillar: { label: 'Hair Styles Gallery', href: '/hair-styles' },
      };
    },
  },
  {
    id: 'care',
    test: /shampoo|trim|detangle|detox|conditioning|permanent color/i,
    build: (s) => {
      const n = s.name.toLowerCase();
      const [style, def]: [string, string] = /detox/.test(n)
        ? ['Deep Conditioning Detox', 'A deep conditioning detox clarifies buildup from the hair and scalp, then restores moisture with a deep conditioner.']
        : /detangle/.test(n)
          ? ['Detangle Service', 'A detangle service carefully works knots and tangles out of hair with conditioner, to limit breakage.']
          : /trim/.test(n) && /shampoo/.test(n)
            ? ['Shampoo and Trim', 'A shampoo and trim cleans your hair and removes split or damaged ends.']
            : /trim/.test(n)
              ? ['Trim', 'A trim removes split or damaged ends to keep hair healthy and neat.']
              : /color/.test(n)
                ? ['Permanent Color', 'A single permanent color service applies one shade of color to your hair.']
                : ['Shampoo', 'A shampoo-only appointment gives your hair and scalp a professional cleanse.'];
      return {
        style,
        about: [def, `${s.name} is ${time(s)}${money(s)}. ${confirmNote}`],
        expect: ['Jae checks the condition of your hair and scalp.', 'The service is done gently, with care for the health of your hair.', 'You leave with tips to keep your hair healthy between visits.'],
        care: ['Keep moisture light and consistent.', 'Protect your hair at night with a satin bonnet.', 'Ask Jae how often this service suits your hair.'],
        faqs: [{ q: `How often should I book ${s.name}?`, a: 'It depends on your hair, routine and goals. Jae will recommend a schedule at your visit.' }],
        pillar: { label: 'Book Online', href: '/services#book' },
      };
    },
  },
];

const FALLBACK: Family['build'] = (s) => ({
  style: s.category,
  about: [
    `${s.name} is part of Jae Stylez's ${s.category.toLowerCase()} menu in Stafford, TX, done with healthy hair as the priority: clean parts, low tension at the base and honest advice about what your hair needs.`,
    `${s.name} is ${time(s)}${money(s)}. ${confirmNote}`,
  ],
  expect: ['Jae confirms the look and any details with you first.', 'Your hair is prepped, with a shampoo included unless the style is braided.', 'The service is done with low tension and care.', 'You leave with care tips.'],
  care: ['Sleep in a satin bonnet.', 'Keep moisture light.', 'Book your next visit as advised.'],
  faqs: [shampooFaq],
  pillar: { label: 'Book Online', href: '/services#book' },
});

/** Copy for one service. Order of FAMILIES matters: the first match wins. */
export function serviceCopy(s: BookableService): ServiceCopy {
  const t = traitsOf(s.name);
  const family = FAMILIES.find((f) => f.test.test(s.name)) ?? { build: FALLBACK };
  const base = family.build(s, t);

  const bookingFaq = {
    q: `How do I book ${s.name}?`,
    a: `Choose a day and time on this page and continue to secure checkout.${deposit(s)} Jae Stylez is at ${site.address}, and clients come from Sugar Land, Missouri City, Richmond, Southwest Houston, Manvel and Sienna.`,
  };
  const rescheduleFaq = {
    q: 'What if I need to reschedule?',
    a: 'Reschedule requests need at least 48 hours notice, and your deposit transfers to the new appointment when notice is given in time. Deposits are non-refundable.',
  };
  const durationFaq = {
    q: `How long does ${s.name} take?`,
    a: `${s.name} is ${time(s)}. ${confirmNote} Eat beforehand and bring water for longer appointments.`,
  };
  const own = base.faqs.slice(0, 4);
  const faqs = [...(own.length < 3 ? [...own, durationFaq] : own), bookingFaq, rescheduleFaq];
  const first = base.about[0].split('. ')[0].replace(/\.$/, '');
  const lead = `${s.name} in Stafford, TX${s.duration ? `: ${s.duration}` : ''}${s.price ? `, ${s.price}` : ''}. `;
  const room = 156 - lead.length;
  const trimmed = first.length > room ? `${first.slice(0, Math.max(0, room - 1)).replace(/\s+\S*$/, '')}…` : `${first}.`;
  const description = `${lead}${trimmed}`;

  return { ...base, faqs, description };
}
