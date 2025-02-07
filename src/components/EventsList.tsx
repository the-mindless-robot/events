import { TEvent } from "@prisma/client";
import EventCard from "./EventCard";
import PaginationControls from "./PaginationControls";

type EventsListProps = {
  events: TEvent[];
  prevPath: string;
  nextPath: string;
};

export default async function EventsList({
  events,
  prevPath,
  nextPath,
}: EventsListProps) {
  return (
    <>
      <section className="flex flex-wrap gap-10 justify-center max-w-[1200px] px-[20px]">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>
      <PaginationControls prevPath={prevPath} nextPath={nextPath} />
    </>
  );
}
