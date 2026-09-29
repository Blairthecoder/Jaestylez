'use client';

import { useEffect, useState } from 'react';
import { fetchProducts, priceOf, productImage, type WixProduct } from '@/app/lib/wix';
import { productHref } from '@/app/components/shop';

/** The store's products, live from Wix, for the home page. */
export function FeaturedProducts() {
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

  return (
    <div className="row justify-content-center">
      {state.status !== 'ready' && (
        <p className="text-center" role="status">
          {state.status === 'loading' ? 'Loading products…' : 'Products could not be loaded right now.'}
        </p>
      )}
      {state.products.map((product) => {
        const onSale = priceOf(product) < (product.price?.price ?? 0);
        return (
          <div key={product._id} className="col-xl-2 col-lg-4 col-md-4 col-6 featured-product">
            <div className="product-item">
              <div className="image">
                <a href={productHref(product)}>
                  <img src={productImage(product, 400, 400)} alt={product.name ?? 'Product'} loading="lazy" />
                </a>
              </div>
              <div className="content">
                <h5>
                  <a href={productHref(product)}>{product.name}</a>
                </h5>{' '}
                <span className="price">
                  {onSale && <del style={{ opacity: 0.6, marginRight: 6 }}>{product.price?.formatted?.price}</del>}
                  {product.price?.formatted?.discountedPrice ?? product.price?.formatted?.price}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
