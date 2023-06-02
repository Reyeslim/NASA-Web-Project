import { Apod } from '../../models/Apod'

const NASA_APODS_KEY = 'nasaApodLists'

// Recuperamos las listas de libros desde la base de datos del navegador o localStorage
export const getCachedApods = (): Apod[] => {
  const response = window.localStorage.getItem(NASA_APODS_KEY)
  return response ? JSON.parse(response) : []
}

// Guardamos las listas de libros en la base de datos del navegador o localStorage
export const setCachedApods = (apods: any) => {
  window.localStorage.setItem(NASA_APODS_KEY, JSON.stringify(apods))
}

export const getCachedApodById = (id: string) => {
  const apods = getCachedApods()
  return apods.find((apod) => apod.id === id)
}
