'use client';

import { wix } from '@/app/lib/wix';

/** The salon's time zone; Wix returns slot times as local wall-clock times in this zone. */
export const SALON_TIME_ZONE = 'America/Chicago';

export type TimeSlot = {
  serviceId: string;
  scheduleId: string;
  /** Local start, e.g. 2026-09-30T08:30:00 */
  start: string;
  end: string;
  locationId?: string;
  locationName?: string;
  locationAddress?: string;
  resourceId?: string;
  resourceName?: string;
};

/** Open, bookable slots between two local dates (inclusive), earliest first. */
export async function fetchTimeSlots(serviceId: string, fromDate: string, toDate: string): Promise<TimeSlot[]> {
  const response = await wix().availabilityTimeSlots.listAvailabilityTimeSlots({
    serviceId,
    fromLocalDate: `${fromDate}T00:00:00`,
    toLocalDate: `${toDate}T23:59:59`,
    timeZone: SALON_TIME_ZONE,
    bookable: true,
    timeSlotsPerDay: 60,
  });
  return (response.timeSlots ?? [])
    .filter((s) => s.bookable !== false && s.localStartDate && s.localEndDate && s.scheduleId)
    .map((s) => ({
      serviceId,
      scheduleId: s.scheduleId as string,
      start: s.localStartDate as string,
      end: s.localEndDate as string,
      locationId: s.location?._id ?? undefined,
      locationName: s.location?.name ?? undefined,
      locationAddress: s.location?.formattedAddress ?? undefined,
      resourceId: s.availableResources?.[0]?.resources?.[0]?._id ?? undefined,
      resourceName: s.availableResources?.[0]?.resources?.[0]?.name ?? undefined,
    }));
}

/**
 * Sends the visitor to Wix's secure checkout for this exact slot, where they enter their details and pay the
 * deposit. Wix returns them to /booking-confirmed afterwards. No booking exists until that checkout completes.
 */
export async function continueToCheckout(slot: TimeSlot): Promise<void> {
  const origin = window.location.origin;
  const { redirectSession } = await wix().redirects.createRedirectSession({
    bookingsCheckout: {
      slotAvailability: {
        slot: {
          serviceId: slot.serviceId,
          scheduleId: slot.scheduleId,
          startDate: slot.start,
          endDate: slot.end,
          timezone: SALON_TIME_ZONE,
          ...(slot.resourceId ? { resource: { _id: slot.resourceId, name: slot.resourceName } } : {}),
          ...(slot.locationId
            ? { location: { _id: slot.locationId, name: slot.locationName, locationType: 'OWNER_BUSINESS' as const } }
            : {}),
        },
        bookable: true,
      },
      timezone: SALON_TIME_ZONE,
    },
    callbacks: {
      postFlowUrl: `${origin}/booking-confirmed`,
      thankYouPageUrl: `${origin}/booking-confirmed`,
    },
  });
  if (!redirectSession?.fullUrl) throw new Error('Wix did not return a checkout URL');
  window.location.href = redirectSession.fullUrl;
}

/** "2026-09-30T08:30:00" -> "8:30 AM" (no time-zone conversion: the value is already salon-local). */
export function formatTime(local: string): string {
  const [h, m] = local.slice(11, 16).split(':').map(Number);
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:${String(m).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`;
}
