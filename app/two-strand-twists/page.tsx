import { LandingPage, landingMetadata } from '@/app/components/landing-page';

export const metadata = landingMetadata('two-strand-twists');

export default function Page() {
  return <LandingPage slug="two-strand-twists" />;
}
