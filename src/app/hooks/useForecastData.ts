import fetcher from '@/services/fetcher'
import getForecastAPIUrl from '@/services/queries/OpenWeather/getForecastUrlQueries'
import { Weather } from '@/types/Weather'
import useSWR from 'swr'

interface Props {
  lat: number | null
  lon: number | null
}

function useForecastData({ lat, lon }: Props) {
  const { data, error } = useSWR<Weather>(lat && lon ? getForecastAPIUrl({ lat, lon }) : null, fetcher, { suspense: true })

  return {
    forecast: data,
    isForecastError: error,
  }
}

export default useForecastData
