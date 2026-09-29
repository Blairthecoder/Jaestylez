import { SiteHeader } from '@/app/components/site-header';
import { SiteFooter } from '@/app/components/site-footer';
import { PageEffects } from '@/app/components/page-effects';
import { CartBar } from '@/app/components/cart-bar';

export function SiteShell({
  header,
  footerClassName = '',
  children,
}: {
  header: 'one' | 'three';
  footerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="page-wrapper">
        <SiteHeader variant={header} />
        {children}
        <SiteFooter className={footerClassName} />
      </div>
      <PageEffects />
      <CartBar />
    </>
  );
}
