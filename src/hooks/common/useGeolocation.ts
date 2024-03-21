import { useEffect, useState } from 'react'

export default function useGeolocation() {
  const [latitude, setLatitude] = useState<number | null>(null)
  const [longitude, setLongitude] = useState<number | null>(null)
  const [locationEnabled, setLocationEnabled] = useState<boolean | null>(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError)
  }, [])

  function handleSuccess(pos: GeolocationPosition) {
    const { latitude, longitude } = pos.coords
    setLatitude(latitude)
    setLongitude(longitude)
    setLocationEnabled(true)
  }

  function handleError() {
    setLocationEnabled(false)
  }

  return {
    latitude,
    longitude,
    locationEnabled,
  }
}
