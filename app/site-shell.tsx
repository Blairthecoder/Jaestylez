import { SiteHeader } from '@/app/components/site-header';
import { SiteFooter } from '@/app/components/site-footer';
import { PageEffects } from '@/app/components/page-effects';
import { CartBar } from '@/app/components/cart-bar';
import { ServicesSeed } from '@/app/components/services-seed';
import { getServices } from '@/app/lib/wix-server';

export async function SiteShell({
  header,
  footerClassName = '',
  children,
}: {
  header: 'one' | 'three';
  footerClassName?: string;
  children: React.ReactNode;
}) {
  // Fetched once per build; lets the pricing and service widgets render real prices in the HTML.
  const services = await getServices();
  return (
    <ServicesSeed services={services}>
      <div className="page-wrapper">
        <SiteHeader variant={header} />
        {children}
        <SiteFooter className={footerClassName} />
      </div>
      <PageEffects />
      <CartBar />
    </ServicesSeed>
  );
}
