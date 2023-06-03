import { number, object, string } from 'yup'
export const InitialValues = {
  name: '',
  phone: '',
  email: '',
  password: '',
}

export const ValidationSchema = object({
  name: string(),
  phone: number(),
  email: string(),
  password: string(),
})
