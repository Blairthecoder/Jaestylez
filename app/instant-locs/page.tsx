import { LandingPage, landingMetadata } from '@/app/components/landing-page';

export const metadata = landingMetadata('instant-locs');

export default function Page() {
  return <LandingPage slug="instant-locs" />;
}
