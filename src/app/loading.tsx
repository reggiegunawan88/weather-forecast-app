import HomepageSkeleton from '@/components/common/Skeleton/HomepageSkeleton'

export default function Loading() {
  return (
    <main className="flex-1 p-4">
      <div className="homepage-container">
        <HomepageSkeleton />
      </div>
    </main>
  )
}
