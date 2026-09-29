import { LandingPage, landingMetadata } from '@/app/components/landing-page';

export const metadata = landingMetadata('micro-locs');

export default function Page() {
  return <LandingPage slug="micro-locs" />;
}
