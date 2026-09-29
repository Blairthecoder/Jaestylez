'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { NiceSelect } from '@/app/components/nice-select';
import {
  addToCart,
  fetchCollections,
  fetchProducts,
  priceOf,
  productImage,
  type WixProduct,
} from '@/app/lib/wix';

const PAGE_SIZE = 9;

type Range = [number, number];
type Sort = 'default' | 'new' | 'old' | 'high-to-low' | 'low-to-high';
type Collection = { _id?: string | null; name?: string | null };

type ShopState = {
  status: 'loading' | 'ready' | 'error';
  products: WixProduct[];
  collections: Collection[];
  bounds: Range;
  range: Range;
  applyRange: (range: Range) => void;
  sort: Sort;
  setSort: (sort: Sort) => void;
  collectionId: string | null;
  setCollectionId: (id: string | null) => void;
};

const ShopContext = createContext<ShopState | null>(null);

function useShop() {
  const value = useContext(ShopContext);
  if (!value) throw new Error('Shop components must be rendered inside <ShopProvider>');
  return value;
}

export const productHref = (product: WixProduct) => `/product-details?slug=${encodeURIComponent(product.slug ?? '')}`;

function Price({ product }: { product: WixProduct }) {
  const onSale = (product.price?.discountedPrice ?? 0) < (product.price?.price ?? 0);
  return (
    <span className="price">
      {onSale && <del style={{ opacity: 0.6, marginRight: 6 }}>{product.price?.formatted?.price}</del>}
      {product.price?.formatted?.discountedPrice ?? product.price?.formatted?.price}
    </span>
  );
}

/** Loads the live Wix catalogue and holds the filter, sort and category choices shared by the shop widgets. */
export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<WixProduct[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [status, setStatus] = useState<ShopState['status']>('loading');
  const [bounds, setBounds] = useState<Range>([0, 100]);
  const [range, setRange] = useState<Range>([0, 100]);
  const [sort, setSort] = useState<Sort>('default');
  const [collectionId, setCollectionId] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    Promise.all([fetchProducts(), fetchCollections().catch(() => [])])
      .then(([items, cols]) => {
        if (cancelled) return;
        const prices = items.map(priceOf);
        const max = Math.max(10, Math.ceil(Math.max(0, ...prices)));
        setProducts(items);
        setCollections(cols);
        setBounds([0, max]);
        setRange([0, max]);
        setStatus('ready');
      })
      .catch(() => !cancelled && setStatus('error'));
    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo<ShopState>(
    () => ({ status, products, collections, bounds, range, applyRange: setRange, sort, setSort, collectionId, setCollectionId }),
    [status, products, collections, bounds, range, sort, collectionId],
  );
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function ShopSidebar() {
  const { products, collections, collectionId, setCollectionId, bounds, range, applyRange } = useShop();
  const [draft, setDraft] = useState<Range>(range);
  useEffect(() => setDraft(range), [range]);
  const onSale = products.filter((p) => (p.price?.discountedPrice ?? 0) < (p.price?.price ?? 0)).slice(0, 3);

  return (
    <div className="shop-sidebar rmb-75">
      {collections.length > 0 && (
        <div className="widget widget-category">
          <h5 className="widget-title">Product Categories</h5>
          <ul className="list-style-one">
            <li>
              <a
                href="#"
                style={collectionId === null ? { fontWeight: 700 } : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  setCollectionId(null);
                }}
              >
                All Products
              </a>
            </li>
            {collections.map((c) => (
              <li key={c._id}>
                <a
                  href="#"
                  style={collectionId === c._id ? { fontWeight: 700 } : undefined}
                  onClick={(event) => {
                    event.preventDefault();
                    setCollectionId(c._id ?? null);
                  }}
                >
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="widget widget-filter">
        <h5 className="widget-title">Filter by Price</h5>
        <div className="price-filter-wrap">
          <div className="price">
            <b>Price</b>{' '}
            <input type="text" id="price" readOnly value={`$ ${draft[0]} - $ ${draft[1]}`} aria-live="polite" />
          </div>
          <div className="price-slider-range">
            <input
              type="range"
              aria-label="Minimum price"
              min={bounds[0]}
              max={bounds[1]}
              value={draft[0]}
              onChange={(event) => setDraft([Math.min(Number(event.target.value), draft[1]), draft[1]])}
            />
            <input
              type="range"
              aria-label="Maximum price"
              min={bounds[0]}
              max={bounds[1]}
              value={draft[1]}
              onChange={(event) => setDraft([draft[0], Math.max(Number(event.target.value), draft[0])])}
            />
          </div>{' '}
          <button type="button" className="theme-btn" onClick={() => applyRange(draft)}>
            Filter
          </button>
        </div>
      </div>
      {onSale.length > 0 && (
        <div className="widget widget-products">
          <h5 className="widget-title">Sale Products</h5>
          <ul>
            {onSale.map((product) => (
              <li key={product._id}>
                <div className="image">
                  <img src={productImage(product, 120, 120)} alt={product.name ?? ''} />
                </div>
                <div className="content">
                  <h5>
                    <a href={productHref(product)}>{product.name}</a>
                  </h5>{' '}
                  <Price product={product} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function QuickAdd({ product }: { product: WixProduct }) {
  const [state, setState] = useState<'idle' | 'busy' | 'done'>('idle');
  const needsChoice = (product.productOptions?.length ?? 0) > 0;
  return (
    <a
      href={needsChoice ? productHref(product) : '#'}
      aria-label={needsChoice ? 'Choose options' : 'Add to cart'}
      title={state === 'done' ? 'Added to cart' : needsChoice ? 'Choose options' : 'Add to cart'}
      onClick={async (event) => {
        if (needsChoice || !product._id) return;
        event.preventDefault();
        setState('busy');
        try {
          await addToCart(product._id, 1);
          setState('done');
        } catch {
          setState('idle');
        }
      }}
    >
      <i className={state === 'done' ? 'fas fa-check' : 'far fa-shopping-cart'}></i>
    </a>
  );
}

export function ShopCatalog() {
  const { status, products, range, sort, setSort, collectionId } = useShop();
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const price = priceOf(p);
      const inRange = price >= range[0] && price <= range[1];
      const inCollection = !collectionId || (p.collectionIds ?? []).includes(collectionId);
      return inRange && inCollection;
    });
    const updated = (p: WixProduct) => new Date(p.lastUpdated ?? 0).getTime();
    if (sort === 'new') list = [...list].sort((a, b) => updated(b) - updated(a));
    if (sort === 'old') list = [...list].sort((a, b) => updated(a) - updated(b));
    if (sort === 'high-to-low') list = [...list].sort((a, b) => priceOf(b) - priceOf(a));
    if (sort === 'low-to-high') list = [...list].sort((a, b) => priceOf(a) - priceOf(b));
    return list;
  }, [products, range, sort, collectionId]);

  useEffect(() => setPage(1), [range, sort, collectionId]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, pages);
  const start = (current - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  const summary =
    status === 'loading'
      ? 'Loading products…'
      : status === 'error'
        ? 'Products could not be loaded right now.'
        : filtered.length
          ? `Showing ${start + 1} - ${start + visible.length} of ${filtered.length} Results`
          : 'No products match those filters';

  return (
    <div className="shop-part rpb-30">
      <div className="shop-shorter rel z-3 mb-15">
        <div className="sort-text mb-15" role="status">
          {summary}
        </div>
        <div className="products-dropdown mb-15">
          <NiceSelect
            name="sort"
            onChange={(value) => setSort(value as Sort)}
            options={[
              { value: 'default', label: 'Default Sorting', selected: true },
              { value: 'new', label: 'Sort by Latest' },
              { value: 'old', label: 'Sort by Oldest' },
              { value: 'high-to-low', label: 'Price: High To Low' },
              { value: 'low-to-high', label: 'Price: Low To High' },
            ]}
          />
        </div>
      </div>
      <div className="row">
        {visible.map((product) => (
          <div key={product._id} className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
            <div className="product-item">
              <div className="image">
                <a href={productHref(product)}>
                  <img src={productImage(product)} alt={product.name ?? 'Product'} />
                </a>{' '}
                <div className="product-btns">
                  <a href={productHref(product)} aria-label="View product">
                    <i className="fas fa-expand-wide"></i>
                  </a>{' '}
                  <QuickAdd product={product} />
                </div>
              </div>
              <div className="content">
                <h5>
                  <a href={productHref(product)}>{product.name}</a>
                </h5>{' '}
                <Price product={product} />
                {product.stock?.inStock === false && <div>Sold out</div>}
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
