import type { Metadata } from 'next';
import { SiteShell } from '@/app/site-shell';
import { PageBanner } from '@/app/components/sections';
import { site } from '@/app/site-data';

export const metadata: Metadata = {
  title: 'Booking Received',
  robots: { index: false },
};

export default function Page() {
  return (
    <SiteShell header="three" footerClassName="mt-80">
      <PageBanner title="Thank You" crumbs={[{ label: 'Book Online', href: '/services#book' }, { label: 'Booking Received' }]} />
      <section className="py-130 rpt-90 rpb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 text-center">
              <div className="section-title mb-30">
                <h2 className="title">You are all set</h2>
              </div>
              <p>
                If you finished the checkout on Wix, your appointment is booked and a confirmation is on its way to the
                email you entered. Please read the prep notes in it before your visit.
              </p>
              <p>
                Did not get to the end of checkout? Nothing was reserved. You can{' '}
                <a href="/services#book">pick a time again</a> or call {site.name} at{' '}
                <a href={site.phoneHref}>{site.phone}</a>.
              </p>
              <p>
                {site.address}. Reschedule requests need at least 48 hours notice, and deposits are non-refundable.
              </p>
              <a className="theme-btn mt-20" href="/">
                back to home <i className="far fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
