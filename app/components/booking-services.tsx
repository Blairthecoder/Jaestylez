'use client';

import { useEffect, useMemo, useState } from 'react';
import { loadServices, serviceHref, type BookableService } from '@/app/lib/wix-bookings';

/**
 * Full service menu from Wix Bookings, laid out with the template's pricing tabs (one tab per category).
 * Each row links to the service page and to that service's booking calendar.
 */
export function BookingServices() {
  const [services, setServices] = useState<BookableService[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [category, setCategory] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    let cancelled = false;
    loadServices()
      .then((items) => {
        if (cancelled) return;
        setServices(items);
        const wanted = new URLSearchParams(window.location.search).get('category');
        if (wanted && items.some((s) => s.category === wanted)) setCategory(wanted);
        setStatus('ready');
      })
      .catch(() => !cancelled && setStatus('error'));
    return () => {
      cancelled = true;
    };
  }, []);

  const categories = useMemo(() => {
    const seen = new Map<string, number>();
    for (const s of services) if (!seen.has(s.category)) seen.set(s.category, s.categoryOrder);
    return [...seen.entries()].sort((a, b) => a[1] - b[1]).map(([name]) => name);
  }, [services]);

  const active = category ?? categories[0] ?? null;
  const q = query.trim().toLowerCase();
  const items = useMemo(
    () =>
      services.filter((s) =>
        q ? `${s.name} ${s.tagline} ${s.description} ${s.category}`.toLowerCase().includes(q) : s.category === active,
      ),
    [services, active, q],
  );

  return (
    <section id="book" className="pricing-plan-page bg-lighter-two pt-120 rpt-90 pb-130 rpb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-11">
            <div className="section-title text-center mb-55">
              <h2 className="title">Book your service</h2>
              <p>Pick a category, choose a service and reserve your appointment online.</p>
            </div>
          </div>
        </div>

        <div className="price-tab-wrap p-40 bg-white">
          <div className="booking-search-row mb-30">
            <input
              type="search"
              className="form-control"
              placeholder="Search all services"
              aria-label="Search all services"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>

          {!q && categories.length > 0 && (
            <ul className="nav price-tab booking-tabs" role="tablist">
              {categories.map((name) => (
                <li key={name} className="nav-item">
                  <a
                    className={`nav-link${name === active ? ' active' : ''}`}
                    href="#"
                    role="tab"
                    aria-selected={name === active}
                    onClick={(event) => {
                      event.preventDefault();
                      setCategory(name);
                    }}
                  >
                    <span>{name}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}

          <div className="tab-content price-tab-content">
            <p className="text-center" role="status">
              {status === 'loading' && 'Loading services…'}
              {status === 'error' &&
                'Services could not be loaded right now. Please try again shortly or contact us to book.'}
              {status === 'ready' && items.length === 0 && 'No services match that search.'}
            </p>
            <div className="tab-pane fade show active">
              <div className="row">
                {items.map((service) => (
                  <div key={service.id} className="col-lg-6">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
