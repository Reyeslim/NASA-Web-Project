import { MOCK_APODS } from '../../constants/apod/apodsMock'
import { Apod, normalizeApod } from '../../models/Apod'
import { getCachedApods, setCachedApods } from '../storage/apods'

const APODS_PER_REQUEST = 30

export type ApodResponse = {
  copyright: string
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
}

export const getNasaApods = async () => {
  const savedApods = getCachedApods()

  if (!savedApods || savedApods.length <= 0) {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&count=${APODS_PER_REQUEST}`
    )

    let normalizedApods: Apod[] = []

    if (!response.ok) {
      normalizedApods = MOCK_APODS
    } else {
      const data: ApodResponse[] = await response.json()
      normalizedApods = data.map(normalizeApod)
    }

    setCachedApods(normalizedApods)

    return normalizedApods
  }

  return savedApods
}
