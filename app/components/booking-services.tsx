'use client';

import { useEffect, useMemo, useState } from 'react';
import { loadServices, serviceHref, type BookableService } from '@/app/lib/wix-bookings';

function excerpt(text: string, max = 150): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  return clean.length > max ? `${clean.slice(0, max - 1).trimEnd()}…` : clean;
}

/** Live service menu from Wix Bookings. "Book Now" opens that service's Wix booking calendar. */
export function BookingServices() {
  const [services, setServices] = useState<BookableService[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [category, setCategory] = useState('All');
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

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    const matches = services.filter(
      (s) =>
        (category === 'All' || s.category === category) &&
        (!q || `${s.name} ${s.tagline} ${s.description}`.toLowerCase().includes(q)),
    );
    return categories
      .map((name) => ({ name, items: matches.filter((s) => s.category === name) }))
      .filter((g) => g.items.length > 0);
  }, [services, categories, category, query]);

  const total = groups.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <section id="book" className="booking-services-area pt-120 rpt-90 pb-100 rpb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="section-title text-center mb-40">
              <h2 className="title">Book Your Service</h2>
              <p>Pick a service to see open times and reserve your appointment online.</p>
              <span className="sub-title">Appointments</span>
            </div>
          </div>
        </div>

        <div className="booking-filters mb-40">
          <div className="booking-chips" role="tablist" aria-label="Service categories">
            {['All', ...categories].map((name) => (
              <button
                key={name}
                type="button"
                role="tab"
                aria-selected={category === name}
                className={category === name ? 'active' : undefined}
                onClick={() => setCategory(name)}
              >
                {name}
              </button>
            ))}
          </div>
          <input
            type="search"
            className="form-control booking-search"
            placeholder="Search services"
            aria-label="Search services"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>

        <div role="status" className="text-center mb-30">
          {status === 'loading' && 'Loading services…'}
          {status === 'error' && 'Services could not be loaded right now. Please try again shortly or contact us to book.'}
          {status === 'ready' && total === 0 && 'No services match that search.'}
        </div>

        {groups.map((group) => (
          <div key={group.name} className="booking-group mb-50">
            <h3 className="booking-group-title mb-25">{group.name}</h3>
            <div className="row">
              {group.items.map((service) => (
                <div key={service.id} className="col-lg-6 mb-30">
                  <article className="booking-card">
                    {service.image && <img className="booking-card-image" src={service.image} alt="" loading="lazy" />}
                    <div className="booking-card-body">
                      <h4>{service.name}</h4>
                      <ul className="booking-meta">
                        {service.duration && (
                          <li>
                            <i className="far fa-clock"></i> {service.duration}
                          </li>
                        )}
                        {service.price && (
                          <li>
                            <i className="far fa-tag"></i> <b>{service.price}</b>
                          </li>
                        )}
                        {service.deposit && <li>{service.deposit} deposit</li>}
                      </ul>
                      {(service.tagline || service.description) && (
                        <p>{excerpt(service.tagline || service.description)}</p>
                      )}
                      <div className="booking-actions">
                        <a className="theme-btn" href={service.bookingUrl} target="_blank" rel="noopener noreferrer">
                          book now <i className="far fa-long-arrow-right"></i>
                        </a>
                        <a href={serviceHref(service)}>details</a>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
