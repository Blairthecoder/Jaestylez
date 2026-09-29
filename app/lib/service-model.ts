// Turns Wix Bookings services into the shape the site uses. Pure functions, shared by the browser (live lists)
// and the server (static per-service pages generated at build time).

import type { services } from '@wix/bookings';
import { isOwnUpload, wixImageUrl } from '@/app/lib/wix-media';

export type BookableService = {
  id: string;
  slug: string;
  /** Numeric price (lowest for variable pricing) for sorting and "from" labels; null when not priced. */
  amount: number | null;
  /** Length in minutes, when the listing has one. */
  minutes: number | null;
  name: string;
  category: string;
  categoryOrder: number;
  description: string;
  tagline: string;
  duration: string;
  price: string;
  deposit: string;
  /** Short plain-text blurb for lists (empty when the listing has none). */
  summary: string;
  /** Large photo, only when the owner uploaded one for this service. */
  imageLarge: string;
  detailsUrl: string;
  bookingUrl: string;
};

const SMALL_WORDS = new Set(['a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'in', 'nor', 'of', 'on', 'or', 'the', 'to', 'vs', 'via', 'w/']);

/** Headline Case for service and category names, tidying the stray spacing in the Wix data. */
export function titleCase(input: string): string {
  const cleaned = input
    .trim()
    .replace(/extentions?/gi, (m) => (m.toLowerCase().endsWith('s') ? 'extensions' : 'extension'))
    .replace(/\s+/g, ' ')
    .replace(/\(\s+/g, '(')
    .replace(/\s+\)/g, ')')
    .replace(/\s*\+\s*/g, ' + ')
    .replace(/\bw\/(?=\S)/gi, 'w/ ')
    .replace(/(\S) \/(?=\S)/g, '$1/ ')
    .replace(/(\d)([a-z]{3,})/gi, '$1 $2');
  const words = cleaned.split(' ');
  const cap = (part: string) => part.replace(/[A-Za-z]/, (c) => c.toUpperCase());
  return words
    .map((word, i) => {
      const bare = word.replace(/[^A-Za-z/]/g, '').toLowerCase();
      const edge = i === 0 || i === words.length - 1;
      // Keep CamelCase brand words such as MicroLocs as written.
      if (word.toLowerCase() === 'microlocs') return 'MicroLocs';
      if (SMALL_WORDS.has(bare) && !edge && !word.endsWith('/')) return word.toLowerCase();
      return word
        .toLowerCase()
        .split(/([-/])/)
        .map((part) => (part === '-' || part === '/' ? part : cap(part)))
        .join('');
    })
    .join(' ')
    .replace(/W\/(?= )/g, 'w/');
}

// Lines that only repeat booking policy (deposit and payment notes) make poor list blurbs.
const BOILERPLATE = /deposit|zelle|cash app|hair (is )?not included|arrive with|prep/i;

/** First useful sentence(s) of the description (or tagline), capped for use under a service name. */
function summarize(description?: string | null, tagline?: string | null, max = 140): string {
  const lines = [description, tagline]
    .flatMap((text) => (text ?? '').split(/\n+/))
    .map((line) => line.trim())
    .filter((line) => line && !BOILERPLATE.test(line));
  const text = (lines[0] ?? '').replace(/\s+/g, ' ');
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const stop = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('! '), cut.lastIndexOf('? '));
  if (stop > 60) return cut.slice(0, stop + 1);
  return `${cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:\s]+$/, '')}…`;
}

function money(value?: string | null, currency = 'USD'): string {
  if (value === undefined || value === null || value === '') return '';
  const amount = Number(value);
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: amount % 1 ? 2 : 0,
  }).format(amount);
}

export function formatDuration(minutes?: number | null): string {
  if (!minutes) return '';
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return [h ? `${h} hr` : '', m ? `${m} min` : ''].filter(Boolean).join(' ');
}

function priceAmount(payment: NonNullable<services.Service['payment']>): number | null {
  const raw =
    payment.rateType === 'FIXED'
      ? payment.fixed?.price?.value
      : payment.rateType === 'VARIED'
        ? (payment.varied?.minPrice?.value ?? payment.varied?.defaultPrice?.value)
        : null;
  return raw ? Number(raw) : null;
}

function formatPrice(payment: NonNullable<services.Service['payment']>): { price: string; deposit: string } {
  if (payment.rateType === 'FIXED' && payment.fixed?.price) {
    const p = payment.fixed.price;
    return {
      price: money(p.value, p.currency ?? 'USD'),
      deposit: money(payment.fixed.deposit?.value, p.currency ?? 'USD'),
    };
  }
  if (payment.rateType === 'VARIED' && payment.varied) {
    const v = payment.varied;
    const min = v.minPrice?.value ?? v.defaultPrice?.value;
    const max = v.maxPrice?.value;
    const currency = v.defaultPrice?.currency ?? v.minPrice?.currency ?? 'USD';
    const price =
      max && max !== min ? `${money(min, currency)} - ${money(max, currency)}` : `From ${money(min, currency)}`;
    return { price, deposit: money(v.deposit?.value, currency) };
  }
  if (payment.rateType === 'CUSTOM') {
    return { price: payment.custom?.description ?? 'Contact for pricing', deposit: '' };
  }
  return { price: '', deposit: '' };
}

/** Keeps only visible services that can be booked online. */
export const isBookable = (s: services.Service) =>
  !!(s._id && s.name && !s.hidden && s.onlineBooking?.enabled !== false && s.urls?.bookingPage);

export function toBookableService(s: services.Service): BookableService {
  const slug = s.mainSlug?.name ?? s.urls!.bookingPage!.split('/').pop() ?? '';
  const mainImage = s.media?.mainMedia?.image;
  const own = isOwnUpload(mainImage);
  const { price, deposit } = formatPrice(s.payment ?? {});
  const constraints = s.schedule?.availabilityConstraints;
  const minutes = constraints?.durations?.[0]?.minutes ?? constraints?.sessionDurations?.[0] ?? null;
  return {
    id: s._id as string,
    slug,
    amount: priceAmount(s.payment ?? {}),
    minutes,
    name: titleCase(s.name!),
    category: titleCase(s.category?.name || 'Other Services'),
    categoryOrder: s.category?.sortOrder ?? Number.MAX_SAFE_INTEGER,
    description: (s.description ?? '').trim(),
    tagline: (s.tagLine ?? '').trim(),
    duration: formatDuration(minutes),
    price,
    deposit,
    summary: summarize(s.description, s.tagLine),
    imageLarge: own ? (wixImageUrl(mainImage, 900, 700) as string) : '',
    detailsUrl: s.urls?.servicePage ?? s.urls!.bookingPage!,
    bookingUrl: `/book?service=${encodeURIComponent(slug)}`,
  };
}

export type ServiceCategory = { name: string; count: number; fromAmount: number | null; services: BookableService[] };

/** Categories ordered by how many services they hold (ties keep the Wix category order). */
export function topCategories(services: BookableService[], limit: number): ServiceCategory[] {
  const map = new Map<string, ServiceCategory & { order: number }>();
  for (const s of services) {
    const entry = map.get(s.category) ?? { name: s.category, count: 0, fromAmount: null, services: [], order: s.categoryOrder };
    entry.count += 1;
    entry.services.push(s);
    if (s.amount !== null) entry.fromAmount = entry.fromAmount === null ? s.amount : Math.min(entry.fromAmount, s.amount);
    map.set(s.category, entry);
  }
  return [...map.values()].sort((a, b) => b.count - a.count || a.order - b.order).slice(0, limit);
}

export const categoryHref = (name: string) => `/services?category=${encodeURIComponent(name)}#book`;
/** Every service has its own static page at /services/<slug>/. */
export const serviceHref = (service: { slug: string }) => `/services/${encodeURIComponent(service.slug)}/`;
