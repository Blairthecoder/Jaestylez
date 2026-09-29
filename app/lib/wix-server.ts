// Server-side (build time) access to Wix Bookings, used to generate one static page per service.
// Uses the same public Headless client ID as the browser code; no secrets involved.

import { createClient, OAuthStrategy } from '@wix/sdk';
import { services } from '@wix/bookings';
import { isBookable, toBookableService, type BookableService } from '@/app/lib/service-model';

const CLIENT_ID = process.env.NEXT_PUBLIC_WIX_CLIENT_ID ?? '91133d63-5037-41ae-b7fd-f830b7719346';

let cached: Promise<BookableService[]> | null = null;

async function load(): Promise<BookableService[]> {
  const client = createClient({ modules: { services }, auth: OAuthStrategy({ clientId: CLIENT_ID }) });
  let lastError: unknown;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      let result = await client.services.queryServices().limit(100).find();
      const all = [...result.items];
      while (result.hasNext()) {
        result = await result.next();
        all.push(...result.items);
      }
      return all.filter(isBookable).map(toBookableService);
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, 800 * (attempt + 1)));
    }
  }
  throw lastError;
}

/** All bookable services (fetched once per build). */
export function getServices(): Promise<BookableService[]> {
  cached ??= load().catch((error) => {
    cached = null;
    throw error;
  });
  return cached;
}

export async function getService(slug: string): Promise<BookableService | undefined> {
  return (await getServices()).find((s) => s.slug === slug);
}
