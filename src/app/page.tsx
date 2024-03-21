import Homepage from '@/app/containers/Homepage'
import HomepageSkeleton from '@/components/common/Skeleton/HomepageSkeleton'
import { Suspense } from 'react'

export default async function Home() {
  return (
    <main className="flex-1 overflow-auto p-4 text-white">
      <Suspense fallback={<HomepageSkeleton />}>
        <Homepage />
      </Suspense>
    </main>
  )
}
