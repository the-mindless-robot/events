import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36 px-3">
      <h1 className="text-3xl lg:text-6xl font-bold tracking-tight">
        Find events around you
      </h1>
      <p className="mb-12 mt=7 text-xl lg:text-2xl opacity-75">
        Browse more than 10,000 events around you
      </p>

      <form>
        <input placeholder="Find events in your city..." spellCheck={false} />
      </form>

      <section>
        <p>Trending:</p>
        <div>
          <Link href="/event/austin">Austin</Link>
          <Link href="/event/sandiego">San Diego</Link>
          <Link href="/event/seatle">San Diego</Link>
        </div>
      </section>
    </main>
  );
}
