import H1 from "@/components/H1";
import { getEvent } from "@/lib/db";
import { Metadata } from "next";
import Image from "next/image";

type EventPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEvent(slug);

  if (!event) {
    return {
      title: "Event not found | EVENTO",
    };
  }

  return {
    title: `${event.name} in ${event.city} | ${event.location} | EVENTO`,
  };
}

// prebuild popular pages
export async function generateStaticParams() {
  return [
    {
      slug: "comedy-extravaganza",
    },
    {
      slug: "dj-practice-session",
    },
  ];
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = await getEvent(slug);

  if (!event) {
    throw new Error("Event not found");
  }

  return (
    <main>
      <section className="relative lg:h-[365px] overflow-hidden flex items-center justify-center py-4 lg:py-20 mb-8">
        <Image
          src={event.imageUrl}
          alt={event.name}
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          quality={50}
          priority
          className="object-cover blur-3xl z-0"
        />

        <div className="relative z-10 flex flex-col lg:flex-row gap-6 lg:gap-16 py-4">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={200}
            className="rounded-xl border-2 border-white/20 object-cover"
          />
          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="italic whitespace-nowrap text-white/75">
              Organized by {event.organizerName}
            </p>
            <button className="bg-white/20 bg-blur text-lg capitalize mt-8 lg:mt-auto w-full rounded py-2 border-white/20 border-2 state-effects">
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-6">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="text-center">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg leading-8 text-white/75 max-w-4xl mx-auto p-8">
      {children}
    </p>
  );
}
