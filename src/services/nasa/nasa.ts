export const getNasaCategories = async () => {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&start_date=2022-12-31&end_date=2023-01-31`)

    const data: NasaAPODResponse = await response.json()
    console.log({ data })
}
