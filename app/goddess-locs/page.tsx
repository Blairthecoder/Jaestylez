import { LandingPage, landingMetadata } from '@/app/components/landing-page';

export const metadata = landingMetadata('goddess-locs');

export default function Page() {
  return <LandingPage slug="goddess-locs" />;
}
