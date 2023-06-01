export type NasaAPODResponse = {
    copyright?: string
    date: string
    explanation: string
    hdurl: string
    media_type: string
    service_version: string
    title: string
    url: string
}

// *****Preguntar a Musta si es necesario hacer la normalización con el MAP*******
// export const normalizeAPODResponse = (input: NasaAPODResponse) => ({
//     title: input?.title || '',
//     copyright: input?.copyright || '',
//     mediaType: input?.media_type || '',
//     serviceVersion: input?.service_version || '',
//     explanation: input?.explanation || '',
//     date: input?.date || '',
//     hdurl: input?.hdurl || '',
//     url: input?.url || '',
// })

// export type Category = ReturnType<typeof normalizeAPODResponse>