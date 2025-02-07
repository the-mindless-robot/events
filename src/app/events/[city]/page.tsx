import H1 from "@/components/H1";
import { Suspense } from "react";
import Loading from "./loading";
import EventsListDataWrapper from "@/components/EventsListDataWrapper";
import { capitalize } from "@/lib/utils";
import { z } from "zod";

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

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const { city } = await params;
  const { page } = await searchParams;

  // validate page number
  const parsedPageNumber = pageNumberSchema.safeParse(page);
  if (!parsedPageNumber.success) {
    throw new Error("Invalid page number");
  }
  const pageNumber = parsedPageNumber.data;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-10">
        {city === "all" ? "All Events" : `Events in ${capitalize(city)}`}
      </H1>
      <Suspense key={city + pageNumber} fallback={<Loading />}>
        <EventsListDataWrapper city={city} page={pageNumber} />
      </Suspense>
    </main>
  );
}
