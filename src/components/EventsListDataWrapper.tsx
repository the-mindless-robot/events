import { TEvent } from "@/lib/types";
import EventsList from "./EventsList";

export default async function EventsListDataWrapper({
  city,
}: {
  city: string;
}) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
    {
      next: {
        revalidate: 300,
      },
    }
  );
  const events: TEvent[] = await response.json();
  return <EventsList events={events} />;
}
