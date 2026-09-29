import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { BookingFlow } from '@/app/components/booking-flow';
import { PageBanner } from '@/app/components/sections';

export const metadata: Metadata = {
  title: 'Book Your Appointment',
  description: 'Choose a service, day and time with Jae Stylez in Stafford, TX and reserve your appointment online.',
};

// One static page serves every service: the service is picked from ?service=... in the browser.
export default function Page() {
  return (
    <SiteShell header="three" footerClassName="mt-80">
      <PageBanner
        title="Book Online"
        crumbs={[{ label: 'Services', href: '/services' }, { label: 'Book Your Appointment' }]}
      />
      <BookingFlow />
    </SiteShell>
  );
}
