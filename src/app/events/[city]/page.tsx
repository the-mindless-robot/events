import H1 from "@/components/H1";
import { Suspense } from "react";
import Loading from "./loading";
import EventsListDataWrapper from "@/components/EventsListDataWrapper";
import { capitalize } from "@/lib/utils";

type EventsPageProps = {
  params: {
    city: string;
  };
  searchParams: {
    page: string;
  };
};

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}) {
  const { city } = await params;
  return {
    title:
      city === "all"
        ? "All Events | EVENTO"
        : `Events in ${capitalize(city)} | EVENTO`,
  };
}

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const { city } = await params;
  const { page } = await searchParams;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-10">
        {city === "all" ? "All Events" : `Events in ${capitalize(city)}`}
      </H1>
      <Suspense key={city + page} fallback={<Loading />}>
        <EventsListDataWrapper city={city} page={page} />
      </Suspense>
    </main>
  );
}
