import { object, string } from 'yup'

export const ValidationSchema = object({
  title: string().required(),
  description: string().required(),
  url: string().required(),
})
