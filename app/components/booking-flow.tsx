'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useServices } from '@/app/components/live-services';
import {
  continueToCheckout,
  fetchTimeSlots,
  formatTime,
  SALON_TIME_ZONE,
  type TimeSlot,
} from '@/app/lib/wix-availability';
import { site } from '@/app/site-data';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const pad = (n: number) => String(n).padStart(2, '0');

/** Today's date in the salon's time zone as YYYY-MM-DD. */
const salonToday = () => new Intl.DateTimeFormat('en-CA', { timeZone: SALON_TIME_ZONE }).format(new Date());

const monthKey = (y: number, m: number) => `${y}-${pad(m + 1)}`;
const daysIn = (y: number, m: number) => new Date(y, m + 1, 0).getDate();

function longDate(date: string) {
  const [y, m, d] = date.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
}

/**
 * Pick a service, a day and a time on this site. The last step opens Wix's secure checkout for that exact slot
 * (client details and the deposit), then Wix sends the visitor back to /booking-confirmed.
 */
export function BookingFlow() {
  const { status, services } = useServices();
  const [slug, setSlug] = useState<string | null | undefined>(undefined);
  const [category, setCategory] = useState('');
  const today = useMemo(salonToday, []);
  const [cursor, setCursor] = useState(() => {
    const [y, m] = salonToday().split('-').map(Number);
    return { y, m: m - 1 };
  });
  const [byMonth, setByMonth] = useState<Record<string, TimeSlot[]>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [date, setDate] = useState<string | null>(null);
  const [slot, setSlot] = useState<TimeSlot | null>(null);
  const [going, setGoing] = useState(false);
  const [checkoutError, setCheckoutError] = useState(false);
  const [autoAdvance, setAutoAdvance] = useState(true);

  useEffect(() => setSlug(new URLSearchParams(window.location.search).get('service')), []);

  const service = services.find((s) => s.slug === slug);
  const categories = useMemo(() => [...new Set(services.map((s) => s.category))], [services]);

  useEffect(() => {
    if (service) setCategory(service.category);
  }, [service]);

  useEffect(() => {
    if (service) document.title = `Book ${service.name} | Jae Stylez`;
  }, [service]);

  const key = monthKey(cursor.y, cursor.m);
  const cacheKey = service ? `${service.id}:${key}` : '';

  useEffect(() => {
    if (!service || byMonth[cacheKey]) return;
    let cancelled = false;
    setLoading(true);
    setError(false);
    const first = `${key}-01`;
    const from = first < today ? today : first;
    const to = `${key}-${pad(daysIn(cursor.y, cursor.m))}`;
    fetchTimeSlots(service.id, from, to)
      .then((slots) => {
        if (cancelled) return;
        setByMonth((prev) => ({ ...prev, [cacheKey]: slots }));
      })
      .catch(() => !cancelled && setError(true))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [service?.id, cacheKey]);

  const slots = service ? (byMonth[cacheKey] ?? []) : [];
  const loaded = !!service && !!byMonth[cacheKey];
  const byDate = useMemo(() => {
    const map = new Map<string, TimeSlot[]>();
    for (const s of slots) {
      const d = s.start.slice(0, 10);
      map.set(d, [...(map.get(d) ?? []), s]);
    }
    return map;
  }, [slots]);

  // First visit: if this month has no openings, look ahead a few months so the calendar opens on real availability.
  useEffect(() => {
    if (!loaded || !autoAdvance) return;
    if (slots.length > 0) return setAutoAdvance(false);
    const [ty, tm] = today.split('-').map(Number);
    if ((cursor.y - ty) * 12 + (cursor.m - (tm - 1)) >= 3) return setAutoAdvance(false);
    setCursor((c) => (c.m === 11 ? { y: c.y + 1, m: 0 } : { y: c.y, m: c.m + 1 }));
  }, [loaded, slots.length, autoAdvance, cursor, today]);

  const move = useCallback((delta: number) => {
    setAutoAdvance(false);
    setDate(null);
    setSlot(null);
    setCursor((c) => {
      const d = new Date(c.y, c.m + delta, 1);
      return { y: d.getFullYear(), m: d.getMonth() };
    });
  }, []);

  const [ty, tm] = today.split('-').map(Number);
  const atCurrentMonth = cursor.y === ty && cursor.m === tm - 1;
  const firstWeekday = new Date(cursor.y, cursor.m, 1).getDay();
  const dayList = Array.from({ length: daysIn(cursor.y, cursor.m) }, (_, i) => `${key}-${pad(i + 1)}`);
  const times = date ? (byDate.get(date) ?? []) : [];

  function chooseService(nextSlug: string) {
    setSlug(nextSlug);
    setDate(null);
    setSlot(null);
    setAutoAdvance(true);
    const [y, m] = salonToday().split('-').map(Number);
    setCursor({ y, m: m - 1 });
    window.history.replaceState(null, '', `/book/?service=${encodeURIComponent(nextSlug)}`);
  }

  async function checkout() {
    if (!slot) return;
    setGoing(true);
    setCheckoutError(false);
    try {
      await continueToCheckout(slot);
    } catch {
      setCheckoutError(true);
      setGoing(false);
    }
  }

  return (
    <section className="service-details-area py-130 rpt-90 rpb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="service-details-content rmb-75">
              <div className="content mb-30">
                <h2>1. Choose your service</h2>
                {status === 'loading' && <p role="status">Loading services…</p>}
                {status === 'error' && <p role="alert">Services could not be loaded right now. Please try again or call {site.phone}.</p>}
                {status === 'ready' && (
                  <div className="row">
                    <div className="col-md-5 mb-15">
                      <label className="booking-label" htmlFor="book-category">
                        Category
                      </label>
                      <select
                        id="book-category"
                        className="form-control booking-select"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                      >
                        <option value="">Select a category</option>
                        {categories.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-7 mb-15">
                      <label className="booking-label" htmlFor="book-service">
                        Service
                      </label>
                      <select
                        id="book-service"
                        className="form-control booking-select"
                        value={service?.slug ?? ''}
                        onChange={(event) => event.target.value && chooseService(event.target.value)}
                      >
                        <option value="">Select a service</option>
                        {services
                          .filter((s) => !category || s.category === category)
                          .map((s) => (
                            <option key={s.id} value={s.slug}>
                              {s.name} — {s.price}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                )}
                {status === 'ready' && slug && !service && (
                  <p role="alert">We could not find that service. Please choose one above.</p>
                )}
              </div>

              {service && (
                <>
                  <div className="content mb-30">
                    <h2>2. Pick a day</h2>
                    <div className="qt-cal" aria-live="polite">
                      <div className="qt-cal-head">
                        <button type="button" onClick={() => move(-1)} disabled={atCurrentMonth} aria-label="Previous month">
                          ‹
                        </button>
                        <strong>
                          {new Date(cursor.y, cursor.m, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </strong>
                        <button type="button" onClick={() => move(1)} aria-label="Next month">
                          ›
                        </button>
                      </div>
                      <div className="qt-cal-grid">
                        {WEEKDAYS.map((d) => (
                          <span key={d} className="qt-cal-dow">
                            {d}
                          </span>
                        ))}
                        {Array.from({ length: firstWeekday }, (_, i) => (
                          <span key={`pad-${i}`} />
                        ))}
                        {dayList.map((d) => {
                          const open = byDate.has(d);
                          return (
                            <button
                              key={d}
                              type="button"
                              disabled={!open}
                              className={`qt-cal-day${open ? ' is-open' : ''}${date === d ? ' is-selected' : ''}`}
                              aria-label={`${longDate(d)}${open ? '' : ', unavailable'}`}
                              onClick={() => {
                                setDate(d);
                                setSlot(null);
                              }}
                            >
                              {Number(d.slice(8))}
                            </button>
                          );
                        })}
                      </div>
                      <p className="qt-cal-note" role="status">
                        {loading && 'Checking availability…'}
                        {error && 'Availability could not be loaded. Please try again or call us.'}
                        {!loading && !error && loaded && slots.length === 0 && 'No openings this month. Try the next month or call us.'}
                        {!loading && !error && slots.length > 0 && 'Days in gold have openings.'}
                      </p>
                    </div>
                  </div>

                  <div className="content mb-30">
                    <h2>3. Pick a time</h2>
                    {!date && <p>Choose a day to see open times.</p>}
                    {date && (
                      <>
                        <p>
                          <strong>{longDate(date)}</strong> · times are Central Time
                        </p>
                        <div className="qt-times">
                          {times.map((t) => (
                            <button
                              key={t.start}
                              type="button"
                              className={`qt-time${slot?.start === t.start ? ' is-selected' : ''}`}
                              onClick={() => setSlot(t)}
                            >
                              {formatTime(t.start)}
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="col-lg-4 col-md-7 col-sm-9">
            <div className="service-sidebar">
              <div className="widget widget-form">
                <h3 className="widget-title">Your Appointment</h3>
                {service ? (
                  <ul className="qt-summary">
                    <li>
                      <span>Service</span> {service.name}
                    </li>
                    {service.duration && (
                      <li>
                        <span>Length</span> {service.duration}
                      </li>
                    )}
                    <li>
                      <span>Price</span> {service.price}
                    </li>
                    {service.deposit && (
                      <li>
                        <span>Deposit</span> {service.deposit}
                      </li>
                    )}
                    <li>
                      <span>When</span>{' '}
                      {slot ? `${longDate(slot.start.slice(0, 10))}, ${formatTime(slot.start)}` : 'Choose a day and time'}
                    </li>
                    <li>
                      <span>Where</span> {slot?.locationAddress ?? site.address}
                    </li>
                  </ul>
                ) : (
                  <p className="text-white">Choose a service to begin.</p>
                )}
                <button type="button" className="theme-btn btn-border w-100" disabled={!slot || going} onClick={checkout}>
                  {going ? 'Opening checkout…' : 'continue to checkout'} <i className="far fa-long-arrow-right"></i>
                </button>
                {checkoutError && (
                  <p className="qt-summary-error" role="alert">
                    Checkout could not open. Please try again or call {site.phone}.
                  </p>
                )}
                <p className="qt-summary-note">
                  Next you enter your details and pay the deposit on Wix&apos;s secure checkout. Your time is not
                  reserved until that is complete, and you return to this site afterwards.
                </p>
              </div>
              <div className="widget widget-menu">
                <ul>
                  <li>
                    <a href={site.phoneHref}>
                      Prefer to call? {site.phone} <i className="far fa-phone"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/services#book">
                      Browse all services <i className="far fa-long-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
