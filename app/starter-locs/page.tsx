import { LandingPage, landingMetadata } from '@/app/components/landing-page';

export const metadata = landingMetadata('starter-locs');

export default function Page() {
  return <LandingPage slug="starter-locs" />;
}
