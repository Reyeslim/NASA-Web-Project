import { object, string } from 'yup'
export const InitialValues = {
  title: '',
  url: '',
}

export const ValidationSchema = object({
  title: string(),
  url: string(),
})
