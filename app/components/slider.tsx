'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { Children, cloneElement, isValidElement, useCallback, useEffect, useState } from 'react';

type Props = {
  className?: string;
  slidesToShow: number;
  /** [max-width px, slidesToShow] pairs, widest first (same idea as slick's `responsive`). */
  responsive?: [number, number][];
  dots?: boolean;
  arrows?: boolean;
  fade?: boolean;
  children: React.ReactNode;
};

/**
 * Small replacement for the jQuery slick carousel. Slides are the original
 * elements (given the `slick-slide` class) so the template CSS keeps working.
 * Arrow buttons elsewhere on the page are wired by their `.news-prev` / `.news-next` classes.
 */
export function Slider({ className = '', slidesToShow, responsive = [], dots = false, arrows = false, children }: Props) {
  const [perView, setPerView] = useState(slidesToShow);
  const [viewport, api] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps', slidesToScroll: 1 });
  const slideCount = Children.count(children);
  const [snaps, setSnaps] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const compute = () => {
      let count = slidesToShow;
      for (const [max, show] of responsive) if (window.innerWidth <= max) count = show;
      setPerView(count);
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slidesToShow, JSON.stringify(responsive)]);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setSnaps(api.scrollSnapList().length);
      setSelected(api.selectedScrollSnap());
    };
    api.reInit();
    update();
    api.on('select', update).on('reInit', update);
    return () => {
      api.off('select', update).off('reInit', update);
    };
  }, [api, perView, slideCount]);

  const next = useCallback(() => (api?.canScrollNext() ? api.scrollNext() : api?.scrollTo(0)), [api]);
  const prev = useCallback(
    () => (api?.canScrollPrev() ? api.scrollPrev() : api?.scrollTo(api.scrollSnapList().length - 1)),
    [api],
  );

  useEffect(() => {
    if (!arrows) return;
    const prevBtn = document.querySelector<HTMLElement>('.news-prev');
    const nextBtn = document.querySelector<HTMLElement>('.news-next');
    prevBtn?.addEventListener('click', prev);
    nextBtn?.addEventListener('click', next);
    return () => {
      prevBtn?.removeEventListener('click', prev);
      nextBtn?.removeEventListener('click', next);
    };
  }, [arrows, next, prev]);

  const slides = Children.toArray(children).map((child, i) => {
    if (!isValidElement<{ className?: string; style?: React.CSSProperties }>(child)) return child;
    // Scroll-reveal classes make no sense on slides that live off-screen.
    const cleaned = (child.props.className ?? '').replace(/\b(wow|fadeInUp|fadeInLeft|fadeInRight|delay-[\w-]+)\b/g, '').trim();
    return cloneElement(child, {
      key: i,
      className: `${cleaned} slick-slide${i === selected ? ' slick-current slick-active' : ''}`,
      style: { ...child.props.style, flex: `0 0 ${100 / perView}%`, minWidth: 0 },
    });
  });

  return (
    <div className={`${className} slick-slider slick-initialized${dots ? ' slick-dotted' : ''}`}>
      <div className="slick-list" ref={viewport}>
        <div className="slick-track">{slides}</div>
      </div>
      {dots && snaps > 1 && (
        <ul className="slick-dots" role="tablist">
          {Array.from({ length: snaps }, (_, i) => (
            <li key={i} className={i === selected ? 'slick-active' : undefined} role="presentation">
              <button type="button" aria-label={`Go to slide ${i + 1}`} onClick={() => api?.scrollTo(i)}>
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
