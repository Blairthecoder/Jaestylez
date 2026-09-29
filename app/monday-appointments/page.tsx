import { LandingPage, landingMetadata } from '@/app/components/landing-page';

export const metadata = landingMetadata('monday-appointments');

export default function Page() {
  return <LandingPage slug="monday-appointments" crumb="Book Online" />;
}
