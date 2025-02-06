import { TEvent } from "@prisma/client";
import EventCard from "./EventCard";

export default async function EventsList({ events }: { events: TEvent[] }) {
  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1200px] px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
