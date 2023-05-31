import { number, object, string } from 'yup'
export const InitialValues = {
  name: '',
  phone: '',
  email: '',
  password: '',
}

export const ValidationSchema = object({
  name: string().required(),
  phone: number().required().positive().integer(),
  email: string().email('No es un email válido').required(),
  password: string().required(),
})
