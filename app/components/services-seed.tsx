'use client';

import { createContext, useContext } from 'react';
import type { BookableService } from '@/app/lib/service-model';

const SeedContext = createContext<BookableService[] | null>(null);

/** Services fetched at build time, so prices and service names are already in the HTML. Widgets still refresh them live. */
export function ServicesSeed({ services, children }: { services: BookableService[]; children: React.ReactNode }) {
  return <SeedContext.Provider value={services}>{children}</SeedContext.Provider>;
}

export const useServicesSeed = () => useContext(SeedContext);
