import H1 from "@/components/H1";
import { Suspense } from "react";
import Loading from "./loading";
import EventsListDataWrapper from "@/components/EventsListDataWrapper";

export default async function EventsPage({
  params,
}: {
  params: { city: string };
}) {
  const { city } = await params;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-10">
        {city === "all"
          ? "All Events"
          : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>
      <Suspense fallback={<Loading />}>
        <EventsListDataWrapper city={city} />
      </Suspense>
    </main>
  );
}
