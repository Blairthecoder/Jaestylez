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

const FEATURE_ICONS = ['flaticon-scissors', 'flaticon-straight-razor', 'flaticon-beauty-treatment', 'flaticon-hot-stones'];
const SERVICE_ICONS = [
  'flaticon-salon',
  'flaticon-shampoo',
  'flaticon-hot-stone',
  'flaticon-treatment',
  'flaticon-shaving-razor',
  'flaticon-hair-dye',
];
const TAB_ICONS = [
  'flaticon-beauty-salon',
  'flaticon-relax',
  'flaticon-massage',
  'flaticon-spa',
  'flaticon-yoga',
  'flaticon-razor-blade',
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

/** "What we do" tiles: the four biggest service categories. */
export function FeatureCategories() {
  const { status, services } = useServices();
  const categories = topCategories(services, 4);
  return (
    <div className="row">
      <div className="col-12">
        <StatusLine status={status} count={categories.length} />
      </div>
      {categories.map((category, i) => (
        <div key={category.name} className="col-md-6">
          <div className="feature-item">
            <div className="icon">
              <i className={FEATURE_ICONS[i % FEATURE_ICONS.length]}></i>
            </div>
            <div className="content">
              <h4>
                <a href={categoryHref(category.name)}>{category.name}</a>
              </h4>
              <p>{summary(category)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

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

const serviceMeta = (service: BookableService) =>
  [service.duration, service.deposit && `${service.deposit} deposit`].filter(Boolean).join(' · ');

/** Tabbed price list (one tab per big category) linking each service to its details page. */
export function PricingTabs() {
  const { status, services } = useServices();
  const categories = topCategories(services, 6);
  const [active, setActive] = useState(0);
  const current = categories[active];

  return (
    <div className="price-tab-wrap p-40 bg-white">
      {categories.length === 0 ? (
        <StatusLine status={status} count={0} />
      ) : (
        <>
          <ul className="nav nav-justified price-tab" role="tablist">
            {categories.map((category, i) => (
              <li key={category.name} className="nav-item">
                <a
                  className={`nav-link${i === active ? ' active' : ''}`}
                  href="#"
                  role="tab"
                  aria-selected={i === active}
                  onClick={(event) => {
                    event.preventDefault();
                    setActive(i);
                  }}
                >
                  <i className={TAB_ICONS[i % TAB_ICONS.length]}></i> <span>{category.name}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="tab-content price-tab-content">
            <div className="tab-pane fade show active">
              <div className="row">
                {current.services.slice(0, 12).map((service) => (
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
                        <span>{serviceMeta(service)}</span>
                      </div>{' '}
                      <span className="price">{service.price}</span>
                    </div>
                  </div>
                ))}
              </div>
              {current.services.length > 12 && (
                <div className="text-center mt-20">
                  <a href={categoryHref(current.name)} className="theme-btn">
                    see all {current.count} {current.name} <i className="far fa-long-arrow-right"></i>
                  </a>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/** Three price columns for the three biggest categories. */
export function PricingColumns() {
  const { status, services } = useServices();
  const categories = topCategories(services, 3);
  return (
    <div className="row justify-content-center">
      <div className="col-12">
        <StatusLine status={status} count={categories.length} />
      </div>
      {categories.map((category) => (
        <div key={category.name} className="col-xl-4 col-md-6">
          <div className="price-item-two">
            <h3>{category.name}</h3>
            <ul>
              {category.services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <div className="content">
                    <h5>
                      <a href={serviceHref(service)}>{service.name}</a>
                    </h5>{' '}
                    <span>{service.duration}</span>
                  </div>{' '}
                  <span className="price">{service.price}</span>
                </li>
              ))}
            </ul>
            <a href={categoryHref(category.name)} className="theme-btn">
              all {category.count} services <i className="far fa-long-arrow-right"></i>
            </a>
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
    if (service) document.title = `${service.name} | Qutter`;
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

const TILE_ICONS = ['flaticon-salon', 'flaticon-shampoo', 'flaticon-massage', 'flaticon-beauty-treatment', 'flaticon-shaving-razor', 'flaticon-hair-dye'];

/** The template's "what we offer" icon tiles, one per big service category. */
export function CategoryTiles() {
  const { status, services } = useServices();
  const categories = topCategories(services, 6);
  return (
    <div className="row justify-content-center">
      <div className="col-12">
        <StatusLine status={status} count={categories.length} />
      </div>
      {categories.map((category, i) => (
        <div key={category.name} className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
          <div className="ww-offer-item">
            <i className={TILE_ICONS[i % TILE_ICONS.length]}></i>{' '}
            <h4>
              <a href={categoryHref(category.name)}>{category.name}</a>
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}
