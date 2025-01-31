"use client";

import { TEvent } from "@/lib/types";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const MotionLink = motion(Link);

export default function EventCard({ event }: { event: TEvent }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <MotionLink
      className="flex-1 basis-80 h-[380px] max-w-[500px]"
      ref={ref}
      href={`/event/${event.slug}`}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      initial={{ scale: 0.7, opacity: 0 }}
    >
      <section className="h-full w-full flex flex-col bg-white/[3%] rounded-xl overflow-hidden relative border border-white/10 state-effects">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={280}
          className="h-[60%] object-cover"
        />
        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/75">By {event.organizerName}</p>
          <p className="text-sm text-white/50 mt-4">{event.location}</p>
        </div>

        <section className="absolute left-[12px] top-[12px] h-[45px] w-[45px] flex flex-col items-center justify-center bg-black/30 rounded-md">
          <p className="text-xl font-bold -mb-1">
            {new Date(event.date).getDate().toString().padStart(2, "0")}
          </p>
          <p className="text-xs uppercase text-accent">
            {new Date(event.date).toLocaleString("en-us", { month: "short" })}
          </p>
        </section>
      </section>
    </MotionLink>
  );
}
