'use client';

import { wix } from '@/app/lib/wix';
import { isBookable, toBookableService, type BookableService } from '@/app/lib/service-model';

export { categoryHref, serviceHref, topCategories } from '@/app/lib/service-model';
export type { BookableService, ServiceCategory } from '@/app/lib/service-model';

/** Every visible, online-bookable service from Wix Bookings. */
export async function fetchBookableServices(): Promise<BookableService[]> {
  let result = await wix().services.queryServices().limit(100).find();
  const all = [...result.items];
  while (result.hasNext()) {
    result = await result.next();
    all.push(...result.items);
  }
  return all.filter(isBookable).map(toBookableService);
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
