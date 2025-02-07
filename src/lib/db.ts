import { TEvent } from "@prisma/client";
import prisma from "./prisma";
import { capitalize } from "./utils";
import { notFound } from "next/navigation";

export async function getEvent(slug: string): Promise<TEvent | null> {
  const prismaEvent = await prisma.tEvent.findUnique({
    where: { slug },
  });

  if (!prismaEvent) {
    return notFound();
  }

  return prismaEvent;
}

export async function getEvents(city: string, pageNumber: number) {
  console.log(city, pageNumber);
  const skip = (pageNumber - 1) * 6;
  const prismaEvents = await prisma.tEvent.findMany({
    where: { city: city === "all" ? undefined : capitalize(city) },
    orderBy: { date: "asc" },
    skip,
    take: 6,
  });

  let totalCount = 0;
  if (city === "all") {
    totalCount = await prisma.tEvent.count();
  } else {
    totalCount = await prisma.tEvent.count({
      where: { city: capitalize(city) },
    });
  }
  return { prismaEvents, totalCount };

  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
  //   {
  //     next: {
  //       revalidate,
  //     },
  //   }
  // );
  // const events: TEvent[] = await response.json();
}
