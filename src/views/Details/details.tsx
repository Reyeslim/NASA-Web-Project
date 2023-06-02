import { FC, memo } from 'react'
import {
  DetailsContainer,
  DetailsContent,
  DetailsTitle,
  DetailsExplanation,
} from './detailsStyles'
import type { Props } from './types'

const Details: FC<Props> = ({ title, explanation }) => {
  return (
    <DetailsContainer>
      <DetailsContent>
        <DetailsTitle>{title}</DetailsTitle>
        <DetailsExplanation>{explanation}</DetailsExplanation>
      </DetailsContent>
    </DetailsContainer>
  )
}

export default memo(Details)
