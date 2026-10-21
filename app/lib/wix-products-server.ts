// Build-time access to the Wix Stores catalogue, used to pre-render one static page per product.

import { createClient, OAuthStrategy } from '@wix/sdk';
import { products, type products as ProductsNs } from '@wix/stores';

const CLIENT_ID = process.env.NEXT_PUBLIC_WIX_CLIENT_ID ?? '91133d63-5037-41ae-b7fd-f830b7719346';

type Product = ProductsNs.Product;

let cached: Promise<Product[]> | null = null;

async function load(): Promise<Product[]> {
  const client = createClient({ modules: { products }, auth: OAuthStrategy({ clientId: CLIENT_ID }) });
  let lastError: unknown;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const result = await client.products.queryProducts().limit(100).find();
      // Plain JSON so the product can be handed to a client component.
      return JSON.parse(JSON.stringify(result.items.filter((p) => p.visible !== false && p.slug)));
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, 800 * (attempt + 1)));
    }
  }
  throw lastError;
}

/** All visible products (fetched once per build). */
export function getProducts(): Promise<Product[]> {
  cached ??= load().catch((error) => {
    cached = null;
    throw error;
  });
  return cached;
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  return (await getProducts()).find((p) => p.slug === slug);
}
