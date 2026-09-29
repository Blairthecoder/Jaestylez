'use client';

import { createClient, OAuthStrategy, type Tokens } from '@wix/sdk';
import { collections, products } from '@wix/stores';
import { currentCart } from '@wix/ecom';
import { redirects } from '@wix/redirects';
import { services } from '@wix/bookings';
import { categories as blogCategories, posts as blogPosts } from '@wix/blog';

// Public Wix Headless OAuth client ID (visitor-level access, not a secret).
// Override with NEXT_PUBLIC_WIX_CLIENT_ID if the store ever changes.
export const WIX_CLIENT_ID =
  process.env.NEXT_PUBLIC_WIX_CLIENT_ID ?? '91133d63-5037-41ae-b7fd-f830b7719346';

// App ID of Wix Stores; identifies which catalog a cart line item belongs to.
const WIX_STORES_APP_ID = '1380b703-ce81-ff05-f115-39571d94dfcd';

const TOKENS_KEY = 'wix-visitor-tokens';

function loadTokens(): Tokens | undefined {
  try {
    const raw = window.localStorage.getItem(TOKENS_KEY);
    return raw ? (JSON.parse(raw) as Tokens) : undefined;
  } catch {
    return undefined;
  }
}

function makeClient() {
  return createClient({
    modules: { products, collections, currentCart, redirects, services, blogPosts, blogCategories },
    auth: OAuthStrategy({ clientId: WIX_CLIENT_ID, tokens: loadTokens() }),
  });
}

let client: ReturnType<typeof makeClient> | null = null;

/** Browser-only Wix client. Visitor tokens are kept in localStorage so the cart survives page loads. */
export function wix() {
  client ??= makeClient();
  return client;
}

function saveTokens() {
  try {
    window.localStorage.setItem(TOKENS_KEY, JSON.stringify(wix().auth.getTokens()));
  } catch {
    // Private mode etc.: the cart just won't persist across pages.
  }
}

export type WixProduct = products.Product;

export async function fetchProducts(): Promise<WixProduct[]> {
  const result = await wix().products.queryProducts().limit(100).find();
  saveTokens();
  return result.items.filter((p) => p.visible !== false);
}

export async function fetchCollections() {
  const result = await wix().collections.queryCollections().find();
  return result.items.filter((c) => c.numberOfProducts && c.slug !== 'all-products');
}

export type CartSummary = { count: number; total: string };

export async function fetchCartSummary(): Promise<CartSummary> {
  try {
    const cart = await wix().currentCart.getCurrentCart();
    const count = (cart.lineItems ?? []).reduce((sum, item) => sum + (item.quantity ?? 0), 0);
    let total = '';
    if (count > 0) {
      const totals = await wix().currentCart.estimateCurrentCartTotals().catch(() => null);
      total = totals?.priceSummary?.subtotal?.formattedAmount ?? '';
    }
    saveTokens();
    return { count, total };
  } catch {
    // Wix returns an error when the visitor has no cart yet.
    return { count: 0, total: '' };
  }
}

export async function addToCart(productId: string, quantity: number, options?: Record<string, string>) {
  // Notify the floating cart bar once the item is in.
  const done = () => window.dispatchEvent(new Event('qutter-cart-updated'));
  await wix().currentCart.addToCurrentCart({
    lineItems: [
      {
        catalogReference: {
          appId: WIX_STORES_APP_ID,
          catalogItemId: productId,
          ...(options && Object.keys(options).length ? { options: { options } } : {}),
        },
        quantity,
      },
    ],
  });
  saveTokens();
  done();
}

/** Turns the visitor's cart into a Wix-hosted checkout and sends the browser there. */
export async function goToCheckout() {
  const { checkoutId } = await wix().currentCart.createCheckoutFromCurrentCart({
    channelType: currentCart.ChannelType.WEB,
  });
  if (!checkoutId) throw new Error('Wix did not return a checkout');
  const { redirectSession } = await wix().redirects.createRedirectSession({
    ecomCheckout: { checkoutId },
    callbacks: {
      postFlowUrl: `${window.location.origin}/shop`,
      thankYouPageUrl: `${window.location.origin}/shop`,
    },
  });
  saveTokens();
  if (!redirectSession?.fullUrl) throw new Error('Wix did not return a checkout URL');
  window.location.href = redirectSession.fullUrl;
}

export function resizeWixImage(url: string, width: number, height: number): string {
  // The API returns oversized "fit" URLs; ask Wix for a cropped size instead.
  return url.replace(/\/v1\/fit\/[^/]+\//, `/v1/fill/w_${width},h_${height},al_c,q_85/`);
}

export function productImage(product: WixProduct, width = 600, height = 600): string {
  const url = product.media?.mainMedia?.image?.url;
  return url ? resizeWixImage(url, width, height) : '/assets/images/shop/product1.png';
}

export function priceOf(product: WixProduct): number {
  return product.price?.discountedPrice ?? product.price?.price ?? 0;
}

// Wix stores images as wix:image://v1/<file id>/<name>#...; the public URL is built from the file id.
export function wixImageUrl(uri: string | null | undefined, width: number, height: number): string | null {
  const match = uri?.match(/^wix:image:\/\/v1\/([^/#]+)/);
  return match
    ? `https://static.wixstatic.com/media/${match[1]}/v1/fill/w_${width},h_${height},al_c,q_80/file.jpg`
    : null;
}
