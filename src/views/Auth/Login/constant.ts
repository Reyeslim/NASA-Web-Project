import { object, string } from 'yup'
export const InitialValues = {
  email: '',
  password: '',
}

export const ValidationSchema = object({
  email: string().email('No es un email válido').required(),
  password: string().required(),
})
