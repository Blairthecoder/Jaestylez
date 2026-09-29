'use client';

import { useEffect, useState } from 'react';
import {
  categoryHref,
  loadServices,
  serviceHref,
  topCategories,
  type BookableService,
  type ServiceCategory,
} from '@/app/lib/wix-bookings';

const SERVICE_ICONS = [
  'flaticon-salon',
  'flaticon-shampoo',
  'flaticon-hot-stone',
  'flaticon-treatment',
  'flaticon-shaving-razor',
  'flaticon-hair-dye',
];

type State = { status: 'loading' | 'ready' | 'error'; services: BookableService[] };

export function useServices(): State {
  const [state, setState] = useState<State>({ status: 'loading', services: [] });
  useEffect(() => {
    let cancelled = false;
    loadServices()
      .then((services) => !cancelled && setState({ status: 'ready', services }))
      .catch(() => !cancelled && setState({ status: 'error', services: [] }));
    return () => {
      cancelled = true;
    };
  }, []);
  return state;
}

function StatusLine({ status, count }: { status: State['status']; count: number }) {
  if (status === 'ready' && count > 0) return null;
  return (
    <p className="text-center" role="status">
      {status === 'loading' && 'Loading services…'}
      {status === 'error' && 'Services could not be loaded right now. Please try again shortly.'}
      {status === 'ready' && count === 0 && 'No services are available to book right now.'}
    </p>
  );
}

const summary = (category: ServiceCategory) =>
  `${category.count} ${category.count === 1 ? 'service' : 'services'}${
    category.fromAmount !== null ? ` from $${category.fromAmount}` : ''
  }`;

/** "Service we provide" cards: the six biggest service categories. */
export function CategoryCards() {
  const { status, services } = useServices();
  const categories = topCategories(services, 6);
  return (
    <div className="row">
      <div className="col-12">
        <StatusLine status={status} count={categories.length} />
      </div>
      {categories.map((category, i) => (
        <div key={category.name} className="col-lg-4 col-md-6">
          <div className="service-item">
            <div className="icon">
              <i className={SERVICE_ICONS[i % SERVICE_ICONS.length]}></i>
            </div>
            <div className="content">
              <h3>
                <a href={categoryHref(category.name)}>{category.name}</a>
              </h3>
              <p>{summary(category)}. Tap to see the full menu and book online.</p>{' '}
              <a href={categoryHref(category.name)} className="details-btn" aria-label={`View ${category.name}`}>
                <i className="far fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Full details for one service, chosen by ?slug=..., with a sidebar of its category and a Book Now card. */
export function ServiceDetail() {
  const { status, services } = useServices();
  const [slug, setSlug] = useState<string | null | undefined>(undefined);
  useEffect(() => setSlug(new URLSearchParams(window.location.search).get('slug')), []);

  const service = slug === undefined ? undefined : (services.find((s) => s.slug === slug) ?? (slug ? undefined : services[0]));

  useEffect(() => {
    if (service) document.title = `${service.name} | Jae Stylez`;
  }, [service]);

  if (!service) {
    return (
      <section className="service-details-area py-130 rpt-90 rpb-100">
        <div className="container text-center" role="status">
          {(status === 'loading' || slug === undefined) && <p>Loading service…</p>}
          {status === 'error' && <p>This service could not be loaded right now. Please try again shortly.</p>}
          {status === 'ready' && slug !== undefined && (
            <>
              <p>We could not find that service.</p>
              <a href="/services#book" className="theme-btn">
                see all services <i className="far fa-long-arrow-right"></i>
              </a>
            </>
          )}
        </div>
      </section>
    );
  }

  const paragraphs = service.description.split(/\n+/).map((p) => p.trim()).filter(Boolean);
  const related = services.filter((s) => s.category === service.category);
  const bigImage = service.image?.replace(/w_\d+,h_\d+/, 'w_900,h_700');

  return (
    <section className="service-details-area py-130 rpt-90 rpb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="service-details-content rmb-75">
              <div className="content">
                <h2>{service.name}</h2>
                {service.tagline && <p>{service.tagline}</p>}
              </div>
              {bigImage && (
                <div className="image mb-45">
                  <img src={bigImage} alt={service.name} />
                </div>
              )}
              <div className="content">
                {paragraphs.length ? paragraphs.map((p, i) => <p key={i}>{p}</p>) : null}
                <ul className="list-style-one my-30">
                  <li>
                    <b>Category:</b> {service.category}
                  </li>
                  {service.duration && (
                    <li>
                      <b>Duration:</b> {service.duration}
                    </li>
                  )}
                  {service.price && (
                    <li>
                      <b>Price:</b> {service.price}
                    </li>
                  )}
                  {service.deposit && (
                    <li>
                      <b>Deposit to book:</b> {service.deposit}
                    </li>
                  )}
                </ul>
                <a className="theme-btn" href={service.bookingUrl} target="_blank" rel="noopener noreferrer">
                  book this service <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-7 col-sm-9">
            <div className="service-sidebar">
              <div className="widget widget-menu">
                <h3 className="widget-title">{service.category}</h3>
                <ul>
                  {related.slice(0, 12).map((s) => (
                    <li key={s.id}>
                      <a className={s.id === service.id ? 'active' : undefined} href={serviceHref(s)}>
                        {s.name} <i className="far fa-long-arrow-right"></i>
                      </a>
                    </li>
                  ))}
                  {related.length > 12 && (
                    <li>
                      <a href={categoryHref(service.category)}>
                        All {related.length} in this category <i className="far fa-long-arrow-right"></i>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
              <div className="widget widget-form">
                <h3 className="widget-title">Appointment</h3>
                <p className="text-white">
                  {service.price}
                  {service.duration ? ` · ${service.duration}` : ''}
                </p>
                <a className="theme-btn btn-border w-100" href={service.bookingUrl} target="_blank" rel="noopener noreferrer">
                  check availability <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

