import Skeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-[4rem]">
      <Skeleton />
      <Skeleton className="w-[487px]" />
      <Skeleton className="w-[378px]" />
      <Skeleton className="w-[439px]" />
    </div>
  );
}
