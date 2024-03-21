export interface Geolocation {
  city: IGeolocationCity
  continent: IGeolocationContinent
  country: IGeolocationCountry
  location: {
    latitude: number
    longitude: number
  }
  subdivisions: {
    names: {
      en: string
    }[]
  }
  state: {
    name: string
  }
  datasource: IGeolocationDataSource[]
  ip: string
}

interface IGeolocationCity {
  names: {
    en: string
  }
  name: string
}

interface IGeolocationContinent {
  code: string
  geoname_id: number
  names: unknown
  name: string
}

interface IGeolocationCountry {
  geoname_id: number
  iso_code: string
  names: unknown
  name: string
  name_native: string
  phone_code: string
  capital: string
  currency: string
  flag: string
  languages: [
    {
      iso_code: string
      name: string
      name_native: string
    }
  ]
}

interface IGeolocationDataSource {
  name: string
  attribution: string
  license: string
}
