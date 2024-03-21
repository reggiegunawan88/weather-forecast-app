import Homepage from '@/app/containers/Homepage'
import HomepageSkeleton from '@/components/common/Skeleton/HomepageSkeleton'
import { ENV_VARS_BASE_URL, ENV_VARS_SECRET_KEY } from '@/constants/env-vars'
import fetcher from '@/services/fetcher'
import { Geolocation } from '@/types/Geolocation'
import { Suspense } from 'react'

async function getGeolocationData() {
  const url = `${ENV_VARS_BASE_URL.geoapifyBaseUrl}/v1/ipinfo?apiKey=${ENV_VARS_SECRET_KEY.geoapifyAccessKey}`
  const result = await fetcher<Geolocation>(url)
  return result
}

export default async function Home() {
  const geolocation = await getGeolocationData()

  return (
    <main className="flex-1 overflow-auto p-4 text-white">
      <Suspense fallback={<HomepageSkeleton />}>
        <Homepage lat={geolocation.location.latitude} lon={geolocation.location.longitude} />
      </Suspense>
    </main>
  )
}
