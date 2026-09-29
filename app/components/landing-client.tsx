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
        <div key={service.id} className="col-12">
          <div className="price-item">
            {service.image && (
              <div className="image">
                <img src={service.image} alt="" loading="lazy" />
              </div>
            )}
            <div className="content">
              <h5>
                <a href={serviceHref(service)}>{service.name}</a>
              </h5>{' '}
              <span>
                {[service.duration, service.deposit && `${service.deposit} deposit`].filter(Boolean).join(' · ')}
              </span>{' '}
              <a className="booking-link" href={service.bookingUrl} target="_blank" rel="noopener noreferrer">
                Book now →
              </a>
            </div>{' '}
            <span className="price">{service.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Faq({
  items,
  className = 'mt-35',
}: {
  items: { q: string; a?: string; list?: string[] }[];
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={`faqs ${className}`}>
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
              {item.a && <p>{item.a}</p>}
              {item.list && (
                <ul className="list-style-one">
                  {item.list.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
