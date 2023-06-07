import { object, string } from 'yup'

export const ValidationSchema = object({
  title: string().required(),
  explanation: string().required(),
  url: string().required(),
})
