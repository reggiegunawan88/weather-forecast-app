import Homepage from '@/app/containers/Homepage'
import { Suspense } from 'react'
import Loading from './loading'

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main className="flex-1 overflow-auto p-4 text-white">
        <Homepage />
      </main>
    </Suspense>
  )
}
