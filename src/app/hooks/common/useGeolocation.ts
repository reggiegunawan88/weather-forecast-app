import { useEffect, useState } from 'react'

function useGeolocation() {
  const [latitude, setLatitude] = useState<number | null>(null)
  const [longitude, setLongitude] = useState<number | null>(null)
  const [isLocationEnabled, setIsLocationEnabled] = useState<boolean | null>(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler)
  }, [])

  function successHandler(pos: GeolocationPosition) {
    const { latitude, longitude } = pos.coords
    setLatitude(latitude)
    setLongitude(longitude)
    setIsLocationEnabled(true)
  }

  function errorHandler() {
    setIsLocationEnabled(false)
  }

  return {
    latitude,
    longitude,
    isLocationEnabled,
  }
}

export default useGeolocation
