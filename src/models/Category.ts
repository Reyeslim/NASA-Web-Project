type NasaCategoriesResponse = {
    copyright?: string
    date: string
    explanation: string
    hdurl: string
    media_type: string
    service_version: string
    title: string
    url: string
}

const normalizeCategory = (input: NasaCategoriesResponse) => ({})