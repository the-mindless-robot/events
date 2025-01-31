import EventsList from "./EventsList";
import { getEvents } from "@/lib/db";

export default async function EventsListDataWrapper({
  city,
}: {
  city: string;
}) {
  const events = await getEvents(city, 60);
  return <EventsList events={events} />;
}
