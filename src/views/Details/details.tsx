import { FC, memo } from 'react'
import {
  DetailsContainer,
  DetailsContent,
  DetailsTitle,
  DetailsExplanation,
} from './detailsStyles'
import { NasaAPODResponse } from '../../models/Category'

interface DetailsProps {
  image: NasaAPODResponse
}

const Details: FC<DetailsProps> = ({ image }) => {
  return (
    <DetailsContainer>
      <DetailsContent>
        <DetailsTitle>{image.title}</DetailsTitle>
        <DetailsExplanation>{image.explanation}</DetailsExplanation>
      </DetailsContent>
    </DetailsContainer>
  )
}

export default memo(Details)
