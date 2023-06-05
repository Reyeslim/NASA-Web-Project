import { Apod, ApodInput } from '../../models/Apod'

const NASA_APODS_KEY = 'nasaApodLists'
const APODS_FAV = 'apodsFav'

// Recuperamos las listas de libros desde la base de datos del navegador o localStorage
export const getCachedApods = (): Apod[] => {
  const response = window.localStorage.getItem(NASA_APODS_KEY)
  const apods = response ? JSON.parse(response) : []
  const favApods = getFavoritesApods()
  return apods.map((apod: Apod) => {
    const isFav = !!favApods.find((favApod) => favApod.id === apod.id)
    return { ...apod, isFav }
  })
}

// Guardamos las listas de libros en la base de datos del navegador o localStorage
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
