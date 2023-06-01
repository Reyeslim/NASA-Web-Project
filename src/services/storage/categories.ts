// const NASA_APODS_CATEGORY_KEY = 'nasaAPODsLists' = 'nasaAPODsLists'

// // Recuperamos las listas de libros desde la base de datos del navegador o localStorage
// const getNyLists = () => {
//     const response = window.localStorage.getItem(NY_BOOKS_LIST_KEY)
//     return response ? JSON.parse(response) : []
// }

// // Guardamos las listas de libros en la base de datos del navegador o localStorage
// const setNyLists = (booksLists) => {
//     window.localStorage.setItem(NY_BOOKS_LIST_KEY, JSON.stringify(booksLists))
// }

import { NasaAPODResponse } from "../../models/Category"

const NY_APOD_CATEGORY_KEY = 'nasaAPODLists'

// Recuperamos las listas de libros desde la base de datos del navegador o localStorage
export const getCachedCategories = (): NasaAPODResponse[] => {
    const response = window.localStorage.getItem(NY_APOD_CATEGORY_KEY)
    return response ? JSON.parse(response) : []
}

// Guardamos las listas de libros en la base de datos del navegador o localStorage
export const setCachedCategories = (categories: NasaAPODResponse[]) => {
    window.localStorage.setItem(NY_APOD_CATEGORY_KEY, JSON.stringify(categories))
}