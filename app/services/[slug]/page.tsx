import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServicePage } from '@/app/components/service-page';
import { serviceCopy } from '@/app/content/service-copy';
import { getService, getServices } from '@/app/lib/wix-server';

type Params = { slug: string };

// One static page per bookable service, generated from the live Wix Bookings list at build time.
export async function generateStaticParams() {
  return (await getServices()).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> | Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) return {};
  const copy = serviceCopy(service);
  return {
    title: `${service.name} in Stafford, TX`,
    description: copy.description,
    alternates: { canonical: `/services/${service.slug}/` },
  };
}

export default async function Page({ params }: { params: Promise<Params> | Params }) {
  const { slug } = await params;
  const [service, all] = await Promise.all([getService(slug), getServices()]);
  if (!service) notFound();
  return <ServicePage service={service} all={all} />;
}
