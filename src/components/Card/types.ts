import type { Apod } from '../../models/Apod'

export type Props = {
  onClick?: () => void
  apod: Apod
  onRemove: (apodId: string) => void
}
