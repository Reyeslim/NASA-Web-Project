import uniqid from 'uniqid'
import { object, string } from 'yup'
export const InitialValues = {
  title: '',
  explanation: '',
  url: '',
  id: uniqid(),
}

export const ValidationSchema = object({
  title: string().required(),
  explanation: string().required(),
  url: string().required(),
})
