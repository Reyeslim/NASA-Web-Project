import type { Apod } from '../../models/Apod'

export type Props = {
  isDetails?: boolean
  onClick?: () => void
  apod: Apod
}
