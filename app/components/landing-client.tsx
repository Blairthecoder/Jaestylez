'use client';

import { useState } from 'react';
import { serviceHref } from '@/app/lib/wix-bookings';
import { useServices } from '@/app/components/live-services';

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

/** Price cards for named services, filled in from the live Wix Bookings list (so prices never go stale). */
export function NamedServices({ names }: { names: string[] }) {
  const { status, services } = useServices();
  const found = names
    .map((name) => services.find((s) => norm(s.name) === norm(name)) ?? services.find((s) => norm(s.name).startsWith(norm(name))))
    .filter((s): s is NonNullable<typeof s> => !!s);

  if (found.length === 0) {
    return (
      <p className="text-center" role="status">
        {status === 'loading' ? 'Loading prices…' : 'See the full menu for current prices.'}
      </p>
    );
  }

  return (
    <div className="row justify-content-center">
      {found.map((service) => (
        <div key={service.id} className="col-lg-4 col-md-6 mb-30">
          <article className="landing-price-card">
            <h4>{service.name}</h4>
            <ul className="booking-meta">
              {service.duration && (
                <li>
                  <i className="far fa-clock"></i> {service.duration}
                </li>
              )}
              {service.deposit && <li>{service.deposit} deposit</li>}
            </ul>
            <div className="landing-price">{service.price}</div>
            <div className="booking-actions">
              <a className="theme-btn" href={service.bookingUrl} target="_blank" rel="noopener noreferrer">
                book now <i className="far fa-long-arrow-right"></i>
              </a>
              <a href={serviceHref(service)}>details</a>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faqs mt-35">
      {items.map((item, i) => (
        <div className="card" key={item.q}>
          <h5
            className={`card-header${open === i ? '' : ' collapsed'}`}
            role="button"
            tabIndex={0}
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                setOpen(open === i ? null : i);
              }
            }}
          >
            {item.q} <i className="far fa-long-arrow-right"></i>
          </h5>
          <div className={`collapse${open === i ? ' show' : ''}`}>
            <div className="card-body">
              <p>{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
