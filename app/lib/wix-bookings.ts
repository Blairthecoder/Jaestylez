'use client';

import type { services } from '@wix/bookings';
import { isOwnUpload, wix, wixImageUrl } from '@/app/lib/wix';
import { fallbackPhoto, servicePhoto, serviceThumb } from '@/app/content/service-photos';

export type BookableService = {
  id: string;
  slug: string;
  /** Numeric price (lowest for variable pricing) for sorting and "from" labels; null when not priced. */
  amount: number | null;
  name: string;
  category: string;
  categoryOrder: number;
  description: string;
  tagline: string;
  duration: string;
  price: string;
  deposit: string;
  image: string;
  imageLarge: string;
  detailsUrl: string;
  bookingUrl: string;
};

const SMALL_WORDS = new Set(['a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'in', 'nor', 'of', 'on', 'or', 'the', 'to', 'vs', 'via', 'w/']);

/** Headline Case for service and category names, tidying the stray spacing in the Wix data. */
export function titleCase(input: string): string {
  const cleaned = input
    .trim()
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
      if (/[a-z][A-Z]/.test(word)) return word;
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

function money(value?: string | null, currency = 'USD'): string {
  if (value === undefined || value === null || value === '') return '';
  const amount = Number(value);
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: amount % 1 ? 2 : 0,
  }).format(amount);
}

function formatDuration(minutes?: number | null): string {
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

/** Every visible, online-bookable service from Wix Bookings, with links to the Wix booking pages. */
export async function fetchBookableServices(): Promise<BookableService[]> {
  let result = await wix().services.queryServices().limit(100).find();
  const all = [...result.items];
  while (result.hasNext()) {
    result = await result.next();
    all.push(...result.items);
  }

  return all
    .filter((s) => s._id && s.name && !s.hidden && s.onlineBooking?.enabled !== false && s.urls?.bookingPage)
    .map((s) => {
      const slug = s.mainSlug?.name ?? s.urls!.bookingPage!.split('/').pop() ?? '';
      const name = titleCase(s.name!);
      const category = titleCase(s.category?.name || 'Other Services');
      const mainImage = s.media?.mainMedia?.image;
      const own = isOwnUpload(mainImage);
      const photo = fallbackPhoto(name, category, s._id as string);
      const { price, deposit } = formatPrice(s.payment ?? {});
      const constraints = s.schedule?.availabilityConstraints;
      const minutes = constraints?.durations?.[0]?.minutes ?? constraints?.sessionDurations?.[0];
      return {
        id: s._id as string,
        slug,
        amount: priceAmount(s.payment ?? {}),
        name,
        category,
        categoryOrder: s.category?.sortOrder ?? Number.MAX_SAFE_INTEGER,
        description: (s.description ?? '').trim(),
        tagline: (s.tagLine ?? '').trim(),
        duration: formatDuration(minutes),
        price,
        deposit,
        image: own ? (wixImageUrl(mainImage, 200, 200) as string) : serviceThumb(photo),
        imageLarge: own ? (wixImageUrl(mainImage, 900, 700) as string) : servicePhoto(photo),
        detailsUrl: s.urls?.servicePage ?? s.urls!.bookingPage!,
        bookingUrl: `/book?service=${encodeURIComponent(slug)}`,
      };
    });
}

let cached: Promise<BookableService[]> | null = null;

/** Same as fetchBookableServices, but shared so several sections on one page make a single request. */
export function loadServices(): Promise<BookableService[]> {
  cached ??= fetchBookableServices().catch((error) => {
    cached = null;
    throw error;
  });
  return cached;
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
export const serviceHref = (service: BookableService) => `/service-details?slug=${encodeURIComponent(service.slug)}`;
