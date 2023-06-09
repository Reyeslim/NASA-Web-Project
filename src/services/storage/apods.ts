import { Apod, ApodInput, EditApodInput } from '../../models/Apod'

export const NASA_APODS_KEY = 'nasaApodLists'
const APODS_FAV = 'apodsFav'

export const getCachedApods = (): Apod[] => {
  const response = window.localStorage.getItem(NASA_APODS_KEY)
  const apods = response ? JSON.parse(response) : []
  const favApods = getFavoritesApods()
  return apods.map((apod: Apod) => {
    const isFav = !!favApods.find((favApod) => favApod.id === apod.id)
    return { ...apod, isFav }
  })
}

export const resetApodsCache = () => {
  window.localStorage.removeItem(NASA_APODS_KEY)
  window.localStorage.removeItem(APODS_FAV)
}

export const setCachedApods = (apods: Apod[]) => {
  window.localStorage.setItem(NASA_APODS_KEY, JSON.stringify(apods))
}

export const getCachedApodById = (id: string) => {
  const apods = getCachedApods()
  return apods.find((apod) => apod.id === id)
}

export const addNewApod = (data: ApodInput) => {
  const apodList = getCachedApods()
  setCachedApods([...apodList, data as Apod])
}

export const editCachedApod = (id: string, values: EditApodInput) => {
  const cachedApods = getCachedApods()
  const currentApod = cachedApods.find((cachedApod) => cachedApod.id === id)
  const filteredCachedApod = cachedApods.filter(
    (cachedApod) => cachedApod.id !== id
  )
  const editedApod = { ...currentApod, ...values } as Apod
  setCachedApods([...filteredCachedApod, editedApod])
}

export const getFavoritesApods = (): Apod[] => {
  const response = window.localStorage.getItem(APODS_FAV)
  return response ? JSON.parse(response) : []
}

export const setFavoritesApods = (favApods: Apod[]) => {
  window.localStorage.setItem(APODS_FAV, JSON.stringify(favApods))
}

export const toggleFavorites = (apod: Apod) => {
  const currentFavs = getFavoritesApods()
  const hasFav = currentFavs.find((favApod) => apod.id === favApod.id)
  if (hasFav) {
    const newList = currentFavs.filter((favApod) => apod.id !== favApod.id)
    setFavoritesApods(newList)
  } else {
    setFavoritesApods([...currentFavs, apod])
  }
}
