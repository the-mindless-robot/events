import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";
import { TEvent } from "@/lib/types";

export default async function EventsPage({
  params,
}: {
  params: { city: string };
}) {
  const { city } = await params;
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: TEvent[] = await response.json();

  // console.log(data);

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-10">
        {city === "all"
          ? "All Events"
          : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <EventsList events={events} />
    </main>
  );
}
