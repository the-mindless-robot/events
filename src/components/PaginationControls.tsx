import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type PaginationControlsProps = {
  prevPath: string | null;
  nextPath: string;
};

export default function PaginationControls({
  prevPath,
  nextPath,
}: PaginationControlsProps) {
  return (
    <section className="flex justify-between w-full max-w-[1200px] px-8 py-12">
      {prevPath ? (
        <PaginationButton direction={"prev"} path={prevPath}>
          Previous
        </PaginationButton>
      ) : (
        <div />
      )}
      {nextPath && (
        <PaginationButton direction={"next"} path={nextPath}>
          Next
        </PaginationButton>
      )}
    </section>
  );
}

function PaginationButton({
  children,
  direction,
  path,
}: {
  children: React.ReactNode;
  direction: string;
  path: string;
}) {
  return (
    <Link
      href={path}
      className="text-white px-5 py-3 bg-white/5 rounded flex gap-x-2 items-center justify-center opacity-75 hover:opacity-100 transition text-sm"
    >
      {direction === "prev" && <ArrowLeftIcon />}
      {children}
      {direction === "next" && <ArrowRightIcon />}
    </Link>
  );
}
