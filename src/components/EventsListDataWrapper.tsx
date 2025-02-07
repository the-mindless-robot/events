import EventsList from "./EventsList";
import { getEvents } from "@/lib/db";

export default async function EventsListDataWrapper({
  city,
  page,
}: {
  city: string;
  page: string;
}) {
  const pageNumber = parseInt(page, 10) || 1;
  const { prismaEvents: events, totalCount } = await getEvents(
    city,
    pageNumber
  );
  const previousPath =
    pageNumber > 1 ? `/events/${city}?page=${pageNumber - 1}` : "";
  const nextPath =
    totalCount > pageNumber * 6 ? `/events/${city}?page=${pageNumber + 1}` : "";
  return (
    <EventsList events={events} prevPath={previousPath} nextPath={nextPath} />
  );
}
