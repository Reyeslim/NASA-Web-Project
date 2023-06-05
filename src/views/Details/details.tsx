import { FC, memo, useCallback, useEffect, useState } from 'react'
import {
  DetailsContainer,
  DetailsContent,
  DetailsTitle,
  DetailsExplanation,
  ButtonContainer,
  Buttonfavorito,
  Buttoneditar,
  Buttoneliminar,
} from './detailsStyles'
import { useNavigate, useParams } from 'react-router-dom'
import { Apod } from '../../models/Apod'
import {
  getCachedApodById,
  getCachedApods,
  setCachedApods,
  toggleFavorites,
} from '../../services/storage/apods'
import BackArrow from '../../components/Back/backArrow'
import VideoBackground from '../../components/VideoBackground/videoBackground'

const Details: FC = () => {
  const { apodId } = useParams()
  const navigate = useNavigate()
  const [apod, setApod] = useState<Apod | null>(null)
  const [isFav, setIsFav] = useState(false)

  const handleRemoveApod = useCallback(
    (apodTitle: string) => {
      if (apodId) {
        const obtainedApod = getCachedApods()
        const filteredApods = obtainedApod.filter(
          (apod) => apod.title !== apodTitle
        )
        setCachedApods(filteredApods)
        navigate('/dashboard')
      }
    },
    [apodId]
  )

  useEffect(() => {
    if (apodId) {
      const retrievedApod = getCachedApodById(apodId)
      if (retrievedApod) {
        setApod(retrievedApod)
        setIsFav(retrievedApod.isFav)
      }
    }
  }, [apodId])

  const handleToggleFavorites = useCallback(() => {
    if (apod) {
      toggleFavorites(apod)
      setIsFav(!isFav)
    }
  }, [isFav, apod])

  const handleEditarClick = () => {
    console.log("Botón 'Editar' clickeado")
  }

  if (!apod) {
    return <div>ERROR 404 NOT FOUND</div>
  }

  return (
    <DetailsContainer>
      <VideoBackground videoSrc="/earth.mp4" />
      <ButtonContainer>
        <BackArrow />
        <Buttoneditar onClick={handleEditarClick}>Editar</Buttoneditar>
        <Buttonfavorito onClick={handleToggleFavorites}>
          {isFav ? 'Remove Fav' : 'Add Fav'}
        </Buttonfavorito>
        <Buttoneliminar onClick={() => handleRemoveApod(apod.title)}>
          Eliminar
        </Buttoneliminar>
      </ButtonContainer>

      <DetailsContent>
        <DetailsTitle>{apod.title}</DetailsTitle>
        <DetailsExplanation>{apod.explanation}</DetailsExplanation>
      </DetailsContent>
    </DetailsContainer>
  )
}

export default memo(Details)
