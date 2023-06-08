import type { Apod } from '../../models/Apod'

export type Props = {
  onClick?: () => void
  apod: Apod
  isProfile?: boolean
  onRemove: (apodId: string) => void
}
