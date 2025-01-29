import SearchForm from "@/components/SearchForm";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36 px-3">
      <h1 className="text-3xl lg:text-6xl font-bold tracking-tight">
        Find events around you
      </h1>
      <p className="mb-12 mt=7 text-xl lg:text-2xl opacity-75">
        Browse more than{" "}
        <span className="font-bold italic underline text-accent">
          10,000 events
        </span>{" "}
        around you
      </p>

      <SearchForm />

      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Trending:</p>
        <div className="space-x-2 font-semibold">
          <Link href="/event/austin">Austin</Link>
          <Link href="/event/sandiego">San Diego</Link>
          <Link href="/event/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );
}
