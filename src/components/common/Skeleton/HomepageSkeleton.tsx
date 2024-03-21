import { Skeleton } from '@/components/ui/skeleton'

export default function HomepageSkeleton() {
  return (
    <div className="flex flex-col gap-y-4">
      {/* Current forecast skeleton section */}
      <div className="flex items-center">
        <Skeleton className="h-[252px] w-full rounded-lg" />
      </div>
      {/* Hourly forecast skeleton section */}
      <div className="flex">
        <Skeleton className="h-[140px] w-full rounded-lg"></Skeleton>
      </div>
      {/* Daily forecast skeleton section */}
      <div className="flex">
        <Skeleton className="h-[56px] w-full rounded-lg"></Skeleton>
      </div>
      {/* Forecast description skeleton section */}
      <div className="flex">
        <Skeleton className="h-[56px] w-full rounded-lg"></Skeleton>
      </div>
      {/* Forecast advice skeleton section */}
      <div className="flex">
        <Skeleton className="h-[56px] w-full rounded-lg"></Skeleton>
      </div>
    </div>
  )
}
