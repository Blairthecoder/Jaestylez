'use client';

import { useEffect, useState } from 'react';

type Popup =
  | { kind: 'image'; items: string[]; index: number }
  | { kind: 'video'; src: string };

function videoEmbed(href: string): string {
  const yt = href.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}?autoplay=1`;
  const vimeo = href.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1`;
  return href;
}

/**
 * Page-wide behaviour that the original template got from jQuery plugins:
 * scroll reveal (WOW), number counters, Bootstrap collapse/tab toggles,
 * image + video popups and the scroll-to-top button. It renders no markup of
 * its own except the popup and the button.
 */
export function PageEffects() {
  const [popup, setPopup] = useState<Popup | null>(null);
  const [showTop, setShowTop] = useState(false);

  // Scroll reveal
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.wow:not(.animated)'));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('animated'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    nodes.forEach((node) => observer.observe(node));
    // Safety net: never leave content invisible.
    const timer = window.setTimeout(() => nodes.forEach((node) => node.classList.add('animated')), 6000);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  // Counters
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('.counter-item'));
    if (!items.length) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const item = entry.target as HTMLElement;
        observer.unobserve(item);
        const text = item.querySelector<HTMLElement>('.count-text');
        if (!text) continue;
        const stop = Number(text.dataset.stop ?? text.textContent) || 0;
        const duration = Number(text.dataset.speed) || 2000;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          text.textContent = String(Math.floor(stop * progress));
          if (progress < 1) requestAnimationFrame(tick);
          else text.textContent = String(stop);
        };
        requestAnimationFrame(tick);
      }
    });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  // Delegated clicks: collapse, tabs, popups, dead "#" links
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const lightbox = target.closest<HTMLAnchorElement>('a[data-lightbox]');
      if (lightbox) {
        event.preventDefault();
        const href = lightbox.getAttribute('href') ?? '';
        if (lightbox.dataset.lightbox === 'video') {
          setPopup({ kind: 'video', src: videoEmbed(href) });
        } else {
          const items = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[data-lightbox="image"]'))
            .map((a) => a.getAttribute('href') ?? '')
            .filter(Boolean);
          setPopup({ kind: 'image', items, index: Math.max(0, items.indexOf(href)) });
        }
        return;
      }

      const collapse = target.closest<HTMLElement>('[data-toggle="collapse"]');
      if (collapse) {
        event.preventDefault();
        const selector = collapse.dataset.target ?? collapse.getAttribute('href');
        const panel = selector ? document.querySelector<HTMLElement>(selector) : null;
        if (!panel) return;
        const opening = !panel.classList.contains('show');
        const parent = panel.dataset.parent ? document.querySelector(panel.dataset.parent) : null;
        if (parent && opening) {
          parent.querySelectorAll<HTMLElement>('.collapse.show').forEach((other) => {
            other.classList.remove('show');
            document
              .querySelectorAll<HTMLElement>(`[data-target="#${other.id}"]`)
              .forEach((btn) => {
                btn.classList.add('collapsed');
                btn.setAttribute('aria-expanded', 'false');
              });
          });
        }
        panel.classList.toggle('show', opening);
        collapse.classList.toggle('collapsed', !opening);
        collapse.setAttribute('aria-expanded', String(opening));
        return;
      }

      const tab = target.closest<HTMLElement>('[data-toggle="tab"], [data-toggle="pill"]');
      if (tab) {
        event.preventDefault();
        const selector = tab.getAttribute('href') ?? tab.dataset.target;
        const pane = selector ? document.querySelector<HTMLElement>(selector) : null;
        if (!pane) return;
        const list = tab.closest('ul, .nav, .list-group') ?? tab.parentElement;
        list?.querySelectorAll<HTMLElement>('[data-toggle="tab"], [data-toggle="pill"]').forEach((link) => {
          link.classList.remove('active', 'show');
        });
        tab.classList.add('active');
        pane.parentElement
          ?.querySelectorAll<HTMLElement>(':scope > .tab-pane')
          .forEach((other) => other.classList.remove('active', 'show'));
        pane.classList.add('active', 'show');
        return;
      }

      const dead = target.closest<HTMLAnchorElement>('a[href="#"]');
      if (dead) event.preventDefault();
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // Scroll-to-top button
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY >= 100);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Popup keyboard controls
  useEffect(() => {
    if (!popup) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPopup(null);
      if (popup.kind === 'image' && popup.items.length > 1) {
        const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
        if (step) setPopup({ ...popup, index: (popup.index + step + popup.items.length) % popup.items.length });
      }
    };
    document.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [popup]);

  return (
    <>
      <button
        type="button"
        className={`scroll-top scroll-to-target${showTop ? ' is-visible' : ''}`}
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="fas fa-angle-double-up"></span>
      </button>

      {popup && (
        <div className="qt-popup" role="dialog" aria-modal="true" onClick={() => setPopup(null)}>
          <div className="qt-popup-body" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="qt-close" aria-label="Close" onClick={() => setPopup(null)}>
              ×
            </button>
            {popup.kind === 'image' ? (
              <>
                <img src={popup.items[popup.index]} alt="" />
                {popup.items.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="qt-prev"
                      aria-label="Previous image"
                      onClick={() =>
                        setPopup({ ...popup, index: (popup.index - 1 + popup.items.length) % popup.items.length })
                      }
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      className="qt-next"
                      aria-label="Next image"
                      onClick={() => setPopup({ ...popup, index: (popup.index + 1) % popup.items.length })}
                    >
                      ›
                    </button>
                  </>
                )}
              </>
            ) : (
              <div className="qt-popup-video">
                <iframe src={popup.src} title="Video" allow="autoplay; encrypted-media; fullscreen" allowFullScreen />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
