import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/app/site-shell';
import { ProductDetail } from '@/app/components/product-detail';
import { getProduct, getProducts } from '@/app/lib/wix-products-server';
import { breadcrumbSchema, canonicalPath, pageMeta, siteUrl } from '@/app/lib/seo';

type Params = { slug: string };

// One static page per Wix Stores product, generated at build time so name, price and description are in the HTML.
export async function generateStaticParams() {
  return (await getProducts()).map((p) => ({ slug: p.slug as string }));
}

// Search-friendly titles for products people already find us for (Search Console). Wix names stay as the on-page heading.
const SEO: Record<string, { title: string; description: string }> = {
  'crown-control': {
    title: 'Crown Control Water-Based Styling Gel for Locs & Natural Hair',
    description: 'Crown Control is a water-based styling gel for locs and natural hair from The Lox Box, made in Houston by Jae Stylez.',
  },
  'the-growth-tonic': {
    title: 'Hair Growth Tonic & Scalp Oil for Locs | The Lox Box',
    description: 'The Growth Tonic scalp and hair oil from The Lox Box, made in Houston for locs and natural hair care between appointments.',
  },
  'the-lox-box-package-deal': {
    title: 'The Lox Box Loc Care Bundle | Hair Care Set for Locs',
    description: 'The Lox Box package deal bundles loc and natural hair care products made in Houston by Jae Stylez.',
  },
  'hair-whip-peppermint': {
    title: 'Peppermint Hair Whip for Locs & Natural Hair | The Lox Box',
    description: 'Peppermint Hair Whip from The Lox Box: deep moisture for locs and natural hair, made in Houston.',
  },
  'lavender-rose-water': {
    title: 'Lavender Rose Water Hydration Mist for Natural Hair | The Lox Box',
    description: 'Lavender Rose Water hydration spray from The Lox Box, made in Houston to refresh locs and natural hair between appointments.',
  },
};

const plain = (html: string | null | undefined) =>
  (html ?? '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const clip = (text: string, max: number) => (text.length <= max ? text : `${text.slice(0, max - 1).trimEnd()}…`);

export async function generateMetadata({ params }: { params: Promise<Params> | Params }): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return {};
  const price = product.price?.formatted?.discountedPrice ?? product.price?.formatted?.price;
  const text = plain(product.description);
  const override = SEO[slug];
  return pageMeta({
    title: override?.title ?? `${clip(product.name ?? 'Product', 46)} | The Lox Box by Jae Stylez`,
    description:
      override?.description ??
      clip(`${text || `${product.name} from The Lox Box, made in Houston.`}${price ? ` ${price}.` : ''}`, 158),
    path: `/shop/${slug}`,
    image: product.media?.mainMedia?.image?.url,
  });
}

export default async function Page({ params }: { params: Promise<Params> | Params }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  const images = (product.media?.items ?? []).map((m) => m.image?.url).filter((u): u is string => !!u);
  const price = product.price?.discountedPrice ?? product.price?.price;
  const inStock = product.stock?.inStock !== false;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        name: product.name,
        description: plain(product.description) || undefined,
        image: images.length ? images : undefined,
        sku: product.sku || undefined,
        brand: { '@type': 'Brand', name: 'The Lox Box' },
        url: `${siteUrl}${canonicalPath(`/shop/${slug}`)}`,
        ...(price !== undefined
          ? {
              offers: {
                '@type': 'Offer',
                price,
                priceCurrency: product.price?.currency ?? 'USD',
                availability: `https://schema.org/${inStock ? 'InStock' : 'OutOfStock'}`,
                url: `${siteUrl}${canonicalPath(`/shop/${slug}`)}`,
                seller: { '@id': `${siteUrl}/#business` },
              },
            }
          : {}),
      },
      breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Shop', path: '/shop' }, { name: product.name ?? 'Product' }]),
    ],
  };

  return (
    <SiteShell header="three" footerClassName="">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section
        className="page-banner text-white py-190 rpy-130"
        style={{ backgroundImage: 'url(/images/jae/banner.jpg)' }}
      >
        <div className="container">
          <div className="banner-inner">
            <p className="page-title wow fadeInRight delay-0-2s">Shop</p>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center wow fadeInLeft delay-0-2s">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/shop">Shop</a>
                </li>
                <li className="breadcrumb-item active">{product.name}</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <ProductDetail initial={product} />
    </SiteShell>
  );
}
