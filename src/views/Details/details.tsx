import { FC, memo, useEffect, useState } from 'react'
import {
  DetailsContainer,
  DetailsContent,
  DetailsTitle,
  DetailsExplanation,
  ButtonContainer,
  Buttoneditar,
  Buttonfavorito,
  Buttoneliminar,
} from './detailsStyles'
import { useParams } from 'react-router-dom'
import { Apod } from '../../models/Apod'
import { getCachedApodById } from '../../services/storage/apods'
import BackArrow from '../../components/Back/backArrow'

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
  }, [apodId])

  if (!apod) {
    return <div>NO EXISTE</div>
  }

  const handleButtonClick = () => {
   
  }

  return (
    <DetailsContainer>
      <BackArrow />

      <ButtonContainer>
        <Buttoneditar onClick={handleButtonClick}>Editar</Buttoneditar>
        <Buttonfavorito onClick={handleButtonClick}>Favoritos</Buttonfavorito>
        <Buttoneliminar onClick={handleButtonClick}>Eliminar</Buttoneliminar>
      </ButtonContainer>

      <DetailsContent>
        <DetailsTitle>{apod.title}</DetailsTitle>
        <DetailsExplanation>{apod.explanation}</DetailsExplanation>
      </DetailsContent>
    </DetailsContainer>
  )
}

export default memo(Details)
