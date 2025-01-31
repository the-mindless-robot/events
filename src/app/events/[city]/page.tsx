import H1 from "@/components/H1";
import { Suspense } from "react";
import Loading from "./loading";
import EventsListDataWrapper from "@/components/EventsListDataWrapper";
import { capitalize } from "@/lib/utils";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export function generateMetadata({ params }: { params: { city: string } }) {
  return {
    title:
      params.city === "all"
        ? "All Events | EVENTO"
        : `Events in ${capitalize(params.city)} | EVENTO`,
  };
}

export default async function EventsPage({ params }: EventsPageProps) {
  const { city } = await params;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-10">
        {city === "all" ? "All Events" : `Events in ${capitalize(city)}`}
      </H1>
      <Suspense fallback={<Loading />}>
        <EventsListDataWrapper city={city} />
      </Suspense>
    </main>
  );
}
