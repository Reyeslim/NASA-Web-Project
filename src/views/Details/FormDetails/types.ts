import { EditApodInput } from '../../../models/Apod'

export type Props = {
  initialValues: EditApodInput
  id: string
  onEditComplete: (values: EditApodInput) => void
}
