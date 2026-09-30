'use client';

import { usePathname } from 'next/navigation';
import { site } from '@/app/site-data';

export function MobileBookingBar() {
  const path = usePathname();

  const openBooking = (event: React.SyntheticEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.location.assign('/book');
  };

  if (path === '/book' || path === '/booking-confirmed') return null;

  return (
    <nav className="mobile-booking-bar" aria-label="Quick appointment actions">
      <a className="mobile-booking-call" href={site.phoneHref}>
        <i className="far fa-phone" aria-hidden="true"></i>
        <span>Call</span>
      </a>
      <a
        className="mobile-booking-primary"
        href="/book"
        onPointerUp={openBooking}
        onClick={openBooking}
      >
        <span>Book online</span>
        <i className="far fa-calendar-alt" aria-hidden="true"></i>
      </a>
    </nav>
  );
}
