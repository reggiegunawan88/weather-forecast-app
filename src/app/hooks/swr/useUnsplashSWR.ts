import { WeatherHelpers } from '@/helpers/WeatherHelpers'
import fetcher from '@/services/fetcher'
import getUnsplashAPIUrl from '@/services/queries/Unsplash/getUnsplashAPIUrl'
import { Weather } from '@/types/Weather'
import { WeatherImageResponse } from '@/types/WeatherBackground'
import useSWR from 'swr'

interface Props {
  forecast: Weather | undefined
  keyword: string
}

function useUnsplashSWR({ forecast, keyword }: Props) {
  const { data, error } = useSWR<WeatherImageResponse>(
    forecast ? getUnsplashAPIUrl({ queryString: WeatherHelpers.getWeatherKeyword(keyword) }) : null,
    fetcher,
    {
      suspense: true,
    }
  )

  return {
    weatherImageUrl: data?.results[0].urls.raw,
    isWeatherImageError: error,
  }
}

export default useUnsplashSWR
