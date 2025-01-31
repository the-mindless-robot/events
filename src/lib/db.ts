import { TEvent } from "./types";

export async function getEvent(slug: string): Promise<TEvent> {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event: TEvent = await response.json();

  return event;
}

export async function getEvents(
  city: string,
  revalidate: number
): Promise<TEvent[]> {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
    {
      next: {
        revalidate,
      },
    }
  );
  const events: TEvent[] = await response.json();

  return events;
}
