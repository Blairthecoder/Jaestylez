'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '@/app/site-data';

export function MobileBookingBar() {
  const path = usePathname();

  if (path === '/book' || path === '/booking-confirmed') return null;

  return (
    <nav className="mobile-booking-bar" aria-label="Quick appointment actions">
      <a className="mobile-booking-call" href={site.phoneHref}>
        <i className="far fa-phone" aria-hidden="true"></i>
        <span>Call</span>
      </a>
      <Link className="mobile-booking-primary" href="/book">
        <span>Book online</span>
        <i className="far fa-calendar-alt" aria-hidden="true"></i>
      </Link>
    </nav>
  );
}
