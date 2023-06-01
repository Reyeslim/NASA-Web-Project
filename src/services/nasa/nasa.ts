
import { NasaAPODResponse } from "../../models/Category";
import { getCachedCategories, setCachedCategories } from "../storage/categories";

// Musta hace una promesa en el vídeo utilizando Category del category.ts
export const getNasaCategories = async () => {
  const savedCategories = getCachedCategories();

  if (!savedCategories || savedCategories.length <= 0) {
    const currentDate = new Date();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() - 30); // Retrocede 30 días desde la fecha actual

    const fetchedCategories = [];

    while (currentDate >= endDate) {
      const dateString = endDate.toISOString().split("T")[0];
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&date=${dateString}`
      );

      const data: NasaAPODResponse = await response.json();

      if (data.date) {
        fetchedCategories.push(data);
      }

      endDate.setDate(endDate.getDate() + 1);
    }

    setCachedCategories(fetchedCategories);

    return fetchedCategories;
  }

  return savedCategories;
};