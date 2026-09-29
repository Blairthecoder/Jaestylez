'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import { NiceSelect } from '@/app/components/nice-select';
import { PRICE_MAX, PRICE_MIN, products } from '@/app/shop-data';

const PAGE_SIZE = 9;

type Range = [number, number];
type Sort = 'default' | 'new' | 'old' | 'hight-to-low' | 'low-to-high';

type ShopState = {
  range: Range;
  applyRange: (range: Range) => void;
  sort: Sort;
  setSort: (sort: Sort) => void;
};

const ShopContext = createContext<ShopState | null>(null);

function useShop() {
  const value = useContext(ShopContext);
  if (!value) throw new Error('Shop components must be rendered inside <ShopProvider>');
  return value;
}

/** Holds the applied price range and sort order shared by the sidebar filter and the product grid. */
export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [range, setRange] = useState<Range>([PRICE_MIN, PRICE_MAX]);
  const [sort, setSort] = useState<Sort>('default');
  const value = useMemo(() => ({ range, applyRange: setRange, sort, setSort }), [range, sort]);
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function PriceFilter() {
  const { range, applyRange } = useShop();
  const [draft, setDraft] = useState<Range>(range);

  return (
    <div className="price-filter-wrap">
      <div className="price">
        <b>Price</b>{' '}
        <input type="text" id="price" readOnly value={`$ ${draft[0]} - $ ${draft[1]}`} aria-live="polite" />
      </div>
      <div className="price-slider-range">
        <input
          type="range"
          aria-label="Minimum price"
          min={PRICE_MIN}
          max={PRICE_MAX}
          value={draft[0]}
          onChange={(event) => setDraft([Math.min(Number(event.target.value), draft[1]), draft[1]])}
        />
        <input
          type="range"
          aria-label="Maximum price"
          min={PRICE_MIN}
          max={PRICE_MAX}
          value={draft[1]}
          onChange={(event) => setDraft([draft[0], Math.max(Number(event.target.value), draft[0])])}
        />
      </div>{' '}
      <button type="button" className="theme-btn" onClick={() => applyRange(draft)}>
        Filter
      </button>
    </div>
  );
}

export function ShopCatalog() {
  const { range, sort, setSort } = useShop();
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const list = products.filter((p) => p.price >= range[0] && p.price <= range[1]);
    if (sort === 'new') return [...list].sort((a, b) => b.id - a.id);
    if (sort === 'old') return [...list].sort((a, b) => a.id - b.id);
    if (sort === 'hight-to-low') return [...list].sort((a, b) => b.price - a.price);
    if (sort === 'low-to-high') return [...list].sort((a, b) => a.price - b.price);
    return list;
  }, [range, sort]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, pages);
  const start = (current - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  return (
    <div className="shop-part rpb-30">
      <div className="shop-shorter rel z-3 mb-15">
        <div className="sort-text mb-15">
          {filtered.length
            ? `Showing ${start + 1} - ${start + visible.length} of ${filtered.length} Results`
            : 'No products match that price range'}
        </div>
        <div className="products-dropdown mb-15">
          <NiceSelect
            name="sort"
            onChange={(value) => {
              setSort(value as Sort);
              setPage(1);
            }}
            options={[
              { value: 'default', label: 'Sort by Newness', selected: true },
              { value: 'new', label: 'Sort by Latest' },
              { value: 'old', label: 'Sort by Oldest' },
              { value: 'hight-to-low', label: 'High To Low' },
              { value: 'low-to-high', label: 'Low To High' },
            ]}
          />
        </div>
        <ul className="grid-list mb-15">
          <li>
            <a href="#">
              <i className="far fa-list-ul"></i>
            </a>
          </li>
          <li>
            <a href="#" className="active">
              <i className="far fa-border-all"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="row">
        {visible.map((product) => (
          <div key={product.id} className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
            <div className="product-item">
              <div className="image">
                <img src={product.image} alt={product.name} />{' '}
                <div className="product-btns">
                  <a href="#" aria-label="Quick view">
                    <i className="fas fa-expand-wide"></i>
                  </a>{' '}
                  <a href="#" aria-label="Add to wishlist">
                    <i className="far fa-heart"></i>
                  </a>{' '}
                  <a href="#" aria-label="Add to cart">
                    <i className="far fa-shopping-cart"></i>
                  </a>
                </div>
              </div>
              <div className="content">
                <div className="ratting">
                  {Array.from({ length: product.rating }, (_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <h5>
                  <a href={product.href}>{product.name}</a>
                </h5>{' '}
                <span className="price">${product.price.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {pages > 1 && (
        <nav aria-label="Product pages">
          <ul className="pagination flex-wrap pt-15 justify-content-center">
            <li className={`page-item${current === 1 ? ' disabled' : ''}`}>
              <a
                className="page-link"
                href="#"
                aria-label="Previous page"
                onClick={(event) => {
                  event.preventDefault();
                  setPage(Math.max(1, current - 1));
                }}
              >
                <i className="fas fa-arrow-left"></i>
              </a>
            </li>
            {Array.from({ length: pages }, (_, i) => (
              <li key={i} className={`page-item${current === i + 1 ? ' active' : ''}`}>
                <a
                  className="page-link"
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    setPage(i + 1);
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </a>
              </li>
            ))}
            <li className={`page-item${current === pages ? ' disabled' : ''}`}>
              <a
                className="page-link"
                href="#"
                aria-label="Next page"
                onClick={(event) => {
                  event.preventDefault();
                  setPage(Math.min(pages, current + 1));
                }}
              >
                <i className="fas fa-arrow-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
