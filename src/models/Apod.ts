import uniqid from 'uniqid'
import type { ApodResponse } from '../services/nasa/nasa'

export type ApodInput = {
  title: string
  url: string
}

export type EditApodInput = {
  title: string
  url: string
  explanation: string
}

export const normalizeApod = (input: ApodResponse) => ({
  id: uniqid(),
  title: input?.title || '',
  copyright: input?.copyright || '',
  mediaType: input?.media_type || '',
  serviceVersion: input?.service_version || '',
  explanation: input?.explanation || '',
  date: input?.date || '',
  hdurl: input?.hdurl || '',
  url: input?.url || '',
  isFav: false,
})

export type Apod = ReturnType<typeof normalizeApod>
