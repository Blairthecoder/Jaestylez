import { LandingPage, landingMetadata } from '@/app/components/landing-page';

export const metadata = landingMetadata('silk-press');

export default function Page() {
  return <LandingPage slug="silk-press" />;
}
