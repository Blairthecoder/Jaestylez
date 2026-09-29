'use client';

import { useEffect, useState } from 'react';
import { fetchProducts, productImage, type WixProduct } from '@/app/lib/wix';
import { productHref } from '@/app/components/shop';

/** The store's products, live from Wix, laid out with the template's "team member" cards. */
export function ProductShowcase() {
  const [state, setState] = useState<{ status: 'loading' | 'ready' | 'error'; products: WixProduct[] }>({
    status: 'loading',
    products: [],
  });

  useEffect(() => {
    let cancelled = false;
    fetchProducts()
      .then((products) => !cancelled && setState({ status: 'ready', products: products.slice(0, 5) }))
      .catch(() => !cancelled && setState({ status: 'error', products: [] }));
    return () => {
      cancelled = true;
    };
  }, []);

  if (state.status !== 'ready') {
    return (
      <p className="text-center" role="status">
        {state.status === 'loading' ? 'Loading products…' : 'Products could not be loaded right now.'}
      </p>
    );
  }

  return (
    <div className="team-member-wrap">
      {state.products.map((product) => (
        <div key={product._id} className="team-member">
          <div className="image">
            <a href={productHref(product)}>
              <img src={productImage(product, 500, 600)} alt={product.name ?? 'Product'} loading="lazy" />
            </a>
          </div>
          <div className="content">
            <h3>
              <a href={productHref(product)}>{product.name}</a>
            </h3>{' '}
            <span className="designation">
              {product.price?.formatted?.discountedPrice ?? product.price?.formatted?.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
