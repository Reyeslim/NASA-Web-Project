import { FC, memo, useEffect, useState } from 'react'
import {
  DetailsContainer,
  DetailsContent,
  DetailsTitle,
  DetailsExplanation,
} from './detailsStyles'
import { useParams } from 'react-router-dom'
import { Apod } from '../../models/Apod'
import { getCachedApodById } from '../../services/storage/apods'

const Details: FC = () => {
  const { apodId } = useParams()
  const [apod, setApod] = useState<Apod | null>(null)
  useEffect(() => {
    if (apodId) {
      const retrivedApod = getCachedApodById(apodId)
      if (retrivedApod) {
        setApod(retrivedApod)
      }
    }
  }, [])

  if (!apod) {
    return <div>NO EXISTE</div>
  }

  return (
    <DetailsContainer>
      <DetailsContent>
        <DetailsTitle>{apod.title}</DetailsTitle>
        <DetailsExplanation>{apod.explanation}</DetailsExplanation>
      </DetailsContent>
    </DetailsContainer>
  )
}

export default memo(Details)
