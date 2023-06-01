import { NasaAPODResponse } from "../../models/Category"
import { getCachedCategories, setCachedCategories } from "../storage/categories"

// Musta hace una promesa en el vídeo utilizando Category del category.ts
export const getNasaCategories = async () => {
    const savedCategories = getCachedCategories()

    if (!savedCategories || savedCategories.length <= 0) {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&start_date=2022-12-31&end_date=2023-01-31`)

        const data: NasaAPODResponse = await response.json()

        if (!data.date) {
            return []
        }
        const mappedCategories = data
        // setCachedCategories()

        return mappedCategories
    }

    return savedCategories
}
