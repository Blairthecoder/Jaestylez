'use client';

import { useEffect, useMemo, useState } from 'react';
import { addToCart, fetchProducts, priceOf, productImage, resizeWixImage, type WixProduct } from '@/app/lib/wix';
import { productHref } from '@/app/components/shop';

// Product copy is written by the store owner in Wix; drop anything executable before rendering it.
function cleanHtml(html: string | null | undefined): string {
  return (html ?? '')
    .replace(/<(script|style|iframe|object|embed)[\s\S]*?<\/\1>/gi, '')
    .replace(/\son\w+="[^"]*"/gi, '')
    .replace(/\son\w+='[^']*'/gi, '')
    .replace(/javascript:/gi, '');
}

function plainText(html: string | null | undefined): string {
  return (html ?? '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

type Status = 'loading' | 'ready' | 'missing' | 'error';

export function ProductDetail() {
  const [status, setStatus] = useState<Status>('loading');
  const [product, setProduct] = useState<WixProduct | null>(null);
  const [related, setRelated] = useState<WixProduct[]>([]);

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get('slug');
    let cancelled = false;
    fetchProducts()
      .then((items) => {
        if (cancelled) return;
        const found = items.find((p) => p.slug === slug) ?? (slug ? undefined : items[0]);
        if (!found) return setStatus('missing');
        setProduct(found);
        setRelated(items.filter((p) => p._id !== found._id).slice(0, 4));
        document.title = `${found.name} | Jae Stylez`;
        setStatus('ready');
      })
      .catch(() => !cancelled && setStatus('error'));
    return () => {
      cancelled = true;
    };
  }, []);

  if (status !== 'ready' || !product) {
    return (
      <section className="product-details-page bg-lighter-two pt-130 rpt-100 pb-95 rpb-65">
        <div className="container text-center" role="status">
          {status === 'loading' && <p>Loading product…</p>}
          {status === 'error' && <p>This product could not be loaded right now. Please try again shortly.</p>}
          {status === 'missing' && (
            <>
              <p>We could not find that product.</p>
              <a href="/shop" className="theme-btn">
                back to the shop <i className="far fa-long-arrow-right"></i>
              </a>
            </>
          )}
        </div>
      </section>
    );
  }

  return (
    <>
      <Details product={product} />
      {related.length > 0 && (
        <section className="related-product-area bg-lighter-two pb-175 rpb-145">
          <div className="container">
            <div className="section-title text-center mb-45">
              <h2>Related product</h2>
            </div>
            <div className="row">
              {related.map((item) => (
                <div key={item._id} className="col-xl-3 col-md-4 col-sm-6">
                  <div className="product-item">
                    <div className="image">
                      <a href={productHref(item)}>
                        <img src={productImage(item)} alt={item.name ?? 'Product'} />
                      </a>
                    </div>
                    <div className="content">
                      <h5>
                        <a href={productHref(item)}>{item.name}</a>
                      </h5>{' '}
                      <span className="price">{item.price?.formatted?.discountedPrice ?? item.price?.formatted?.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function Details({ product }: { product: WixProduct }) {
  const images = useMemo(() => {
    const list = (product.media?.items ?? []).map((m) => m.image?.url).filter((u): u is string => !!u);
    return list.length ? list : [product.media?.mainMedia?.image?.url].filter((u): u is string => !!u);
  }, [product]);
  const [selected, setSelected] = useState(0);
  const [tab, setTab] = useState<'details' | 'information'>('details');
  const [quantity, setQuantity] = useState(1);
  const [choices, setChoices] = useState<Record<string, string>>({});
  const [state, setState] = useState<'idle' | 'busy' | 'added' | 'error' | 'choose'>('idle');

  const options = product.productOptions ?? [];
  const sections = (product.additionalInfoSections ?? []).filter((s) => s.title || s.description);
  const inStock = product.stock?.inStock !== false;
  const max = product.stock?.trackInventory && product.stock.quantity ? product.stock.quantity : 20;
  const onSale = priceOf(product) < (product.price?.price ?? 0);
  const excerpt = plainText(product.description);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!product._id) return;
    if (options.some((o) => o.name && !choices[o.name])) return setState('choose');
    setState('busy');
    try {
      await addToCart(product._id, quantity, choices);
      setState('added');
    } catch {
      setState('error');
    }
  }

  return (
    <section className="product-details-page bg-lighter-two pt-130 rpt-100 pb-95 rpb-65">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="product-image-tab rmb-50">
              <div className="preview-images tab-content">
                {images.map((url, i) => (
                  <div key={url} className={`preview-item tab-pane fade${i === selected ? ' show active' : ''}`}>
                    <a href={url} data-lightbox="image">
                      <img src={resizeWixImage(url, 600, 600)} alt={product.name ?? 'Product'} />
                    </a>
                  </div>
                ))}
              </div>
              {images.length > 1 && (
                <div className="thumb-images nav">
                  {images.map((url, i) => (
                    <a
                      key={url}
                      className={`thumb-item nav-item${i === selected ? ' active' : ''}`}
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();
                        setSelected(i);
                      }}
                    >
                      <img src={resizeWixImage(url, 120, 120)} alt="" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-7">
            <div className="product-details-content pt-20">
              <h3 className="title">
                {product.name}{' '}
                <span className="price">
                  {onSale && <del style={{ opacity: 0.55, marginRight: 8 }}>{product.price?.formatted?.price}</del>}
                  {product.price?.formatted?.discountedPrice ?? product.price?.formatted?.price}
                </span>
              </h3>
              {product.ribbon && (
                <div className="subtitle-ratting">
                  <span>{product.ribbon}</span>
                </div>
              )}
              {excerpt && <p>{excerpt.length > 260 ? `${excerpt.slice(0, 257)}…` : excerpt}</p>}
              <form className="add-to-cart mt-15" onSubmit={submit}>
                {options.map((option) => (
                  <div key={option.name} className="colors mt-15 mb-30">
                    <h5>{option.name}</h5>{' '}
                    <select
                      className="form-control"
                      value={choices[option.name ?? ''] ?? ''}
                      onChange={(event) => setChoices((c) => ({ ...c, [option.name ?? '']: event.target.value }))}
                    >
                      <option value="">Choose {option.name}</option>
                      {(option.choices ?? [])
                        .filter((c) => c.visible !== false && c.inStock !== false)
                        .map((c) => (
                          <option key={c.value} value={c.description ?? ''}>
                            {c.description}
                          </option>
                        ))}
                    </select>
                  </div>
                ))}
                <input
                  type="number"
                  min={1}
                  max={max}
                  value={quantity}
                  aria-label="Quantity"
                  onChange={(event) => setQuantity(Math.max(1, Math.min(max, Number(event.target.value) || 1)))}
                />{' '}
                <button type="submit" className="theme-btn" disabled={!inStock || state === 'busy'}>
                  {!inStock ? 'Sold out' : state === 'busy' ? 'Adding…' : 'Add to Cart'}
                </button>
                {state === 'choose' && (
                  <div className="form-status is-error" role="alert">
                    Please choose {options.map((o) => o.name).join(' and ')} first.
                  </div>
                )}
                {state === 'added' && (
                  <div className="form-status" role="status">
                    Added to your cart. Use the Checkout button at the bottom of the page when you are ready.
                  </div>
                )}
                {state === 'error' && (
                  <div className="form-status is-error" role="alert">
                    Sorry, that could not be added to your cart. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
        <ul className="nav justify-content-center product-information-tab pt-100 rpt-65 mb-40">
          <li>
            <a
              href="#"
              className={tab === 'details' ? 'active show' : undefined}
              onClick={(event) => {
                event.preventDefault();
                setTab('details');
              }}
            >
              Description
            </a>
          </li>
          {sections.length > 0 && (
            <li>
              <a
                href="#"
                className={tab === 'information' ? 'active show' : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  setTab('information');
                }}
              >
                Information
              </a>
            </li>
          )}
        </ul>
        <div className="tab-content">
          {tab === 'details' && (
            <div className="tab-pane active show">
              <h3>About This Product</h3>
              <div dangerouslySetInnerHTML={{ __html: cleanHtml(product.description) }} />
            </div>
          )}
          {tab === 'information' &&
            sections.map((section) => (
              <div key={section.title} className="tab-pane active show">
                <h3>{section.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: cleanHtml(section.description) }} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
