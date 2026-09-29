'use client';

import type { services } from '@wix/bookings';
import { wix } from '@/app/lib/wix';

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
  image: string | null;
  detailsUrl: string;
  bookingUrl: string;
};

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

// Wix stores images as wix:image://v1/<file id>/<name>#...; the public URL is built from the file id.
function wixImageUrl(uri: string | null | undefined, width: number, height: number): string | null {
  const match = uri?.match(/^wix:image:\/\/v1\/([^/#]+)/);
  return match
    ? `https://static.wixstatic.com/media/${match[1]}/v1/fill/w_${width},h_${height},al_c,q_80/file.jpg`
    : null;
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
      const { price, deposit } = formatPrice(s.payment ?? {});
      const constraints = s.schedule?.availabilityConstraints;
      const minutes = constraints?.durations?.[0]?.minutes ?? constraints?.sessionDurations?.[0];
      return {
        id: s._id as string,
        slug: s.mainSlug?.name ?? s.urls!.bookingPage!.split('/').pop() ?? '',
        amount: priceAmount(s.payment ?? {}),
        name: s.name!.trim(),
        category: s.category?.name?.trim() || 'Other Services',
        categoryOrder: s.category?.sortOrder ?? Number.MAX_SAFE_INTEGER,
        description: (s.description ?? '').trim(),
        tagline: (s.tagLine ?? '').trim(),
        duration: formatDuration(minutes),
        price,
        deposit,
        image: wixImageUrl(s.media?.mainMedia?.image, 160, 160),
        detailsUrl: s.urls?.servicePage ?? s.urls!.bookingPage!,
        bookingUrl: s.urls!.bookingPage!,
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
