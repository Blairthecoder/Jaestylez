'use client';

import { useCallback, useEffect, useState } from 'react';

export const CART_EVENT = 'qutter-cart-updated';

/**
 * Floating cart pill shown on every page once the visitor has added something.
 * The Wix SDK is only loaded if the visitor already has a Wix session stored,
 * so pages that never touched the shop stay light.
 */
export function CartBar() {
  const [cart, setCart] = useState<{ count: number; total: string }>({ count: 0, total: '' });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);

  const refresh = useCallback(async () => {
    let hasSession = false;
    try {
      hasSession = !!window.localStorage.getItem('wix-visitor-tokens');
    } catch {}
    if (!hasSession) return;
    const { fetchCartSummary } = await import('@/app/lib/wix');
    setCart(await fetchCartSummary());
  }, []);

  useEffect(() => {
    refresh();
    window.addEventListener(CART_EVENT, refresh);
    return () => window.removeEventListener(CART_EVENT, refresh);
  }, [refresh]);

  if (cart.count === 0) return null;

  return (
    <div className="qt-cart-bar" role="status">
      <span>
        <i className="far fa-shopping-cart"></i> {cart.count} {cart.count === 1 ? 'item' : 'items'}
        {cart.total ? ` · ${cart.total}` : ''}
      </span>
      <button
        type="button"
        className="theme-btn"
        disabled={busy}
        onClick={async () => {
          setBusy(true);
          setError(false);
          try {
            const { goToCheckout } = await import('@/app/lib/wix');
            await goToCheckout();
          } catch {
            setError(true);
            setBusy(false);
          }
        }}
      >
        {busy ? 'Opening checkout…' : 'Checkout'} <i className="far fa-long-arrow-right"></i>
      </button>
      {error && <small>Checkout could not open. Please try again.</small>}
    </div>
  );
}
