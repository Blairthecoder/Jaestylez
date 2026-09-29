import type { Metadata } from 'next';
import './globals.css';
import { localBusinessSchema } from '@/app/lib/schema';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rashadthehelper.netlify.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Loctician in Stafford, TX | Natural Hair Salon | Jae Stylez',
    template: '%s | Jae Stylez',
  },
  description:
    'Jae Stylez is a licensed loctician and natural hair stylist in Stafford, TX. Retwists, starter locs, twists, silk press. Serving Sugar Land and Houston.',
  icons: { icon: '/favicon.png' },
};

const styles = [
  '/assets/css/flaticon.min.css',
  '/assets/css/fontawesome-5.14.0.min.css',
  '/assets/css/bootstrap-4.5.3.min.css',
  '/assets/css/nice-select.min.css',
  '/assets/css/animate.min.css',
  '/assets/css/slick.min.css',
  '/assets/css/style.css',
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Rubik:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {styles.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema(siteUrl)) }} />
        {children}
      </body>
    </html>
  );
}
