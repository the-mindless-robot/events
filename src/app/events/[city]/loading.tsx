import Skeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1200px] px-[20px]">
      <Skeleton className="flex-1 basis-80 h-[380px] max-w-[500px]" />
      <Skeleton className="flex-1 basis-80 h-[380px] max-w-[500px]" />
      <Skeleton className="flex-1 basis-80 h-[380px] max-w-[500px]" />
      <Skeleton className="flex-1 basis-80 h-[380px] max-w-[500px]" />
      <Skeleton className="flex-1 basis-80 h-[380px] max-w-[500px]" />
      <Skeleton className="flex-1 basis-80 h-[380px] max-w-[500px]" />
    </section>
  );
}
