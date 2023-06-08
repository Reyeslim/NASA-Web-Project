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
import Footer from '../../components/Footer/footer'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Apod, EditApodInput } from '../../models/Apod'
import {
  getCachedApodById,
  getCachedApods,
  setCachedApods,
  toggleFavorites,
} from '../../services/storage/apods'
import BackArrow from '../../components/Back/backArrow'
import VideoBackground from '../../components/VideoBackground/videoBackground'
import FormDetails from './FormDetails/FormDetails'

const Details: FC = () => {
  const { apodId } = useParams()
  const navigate = useNavigate()
  const [queryData] = useSearchParams()
  const [apod, setApod] = useState<Apod | null>(null)
  const [isFav, setIsFav] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    setIsEdit(!!queryData.get('edit'))
  }, [queryData])

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
    [apodId, navigate]
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

  const handleGoToEditForm = () => {
    navigate(`/apods/${apodId}?edit=true`)
  }

  const handleOnCompleteEdition = useCallback(
    (values: EditApodInput) => {
      const editedApod = { ...apod, ...values } as Apod
      setApod(editedApod)
    },
    [apod]
  )
  if (!apod) {
    return <div>ERROR 404 NOT FOUND</div>
  }

  if (isEdit) {
    return (
      <FormDetails
        onEditComplete={handleOnCompleteEdition}
        id={apod.id}
        initialValues={{
          title: apod.title,
          explanation: apod.explanation,
          url: apod.url,
        }}
      />
    )
  }
  return (
    <DetailsContainer>
      <VideoBackground videoSrc="/earth.mp4" />
      <DetailsContent>
        <ButtonContainer>
          <BackArrow />
          <Buttoneditar onClick={handleGoToEditForm}>Edit</Buttoneditar>
          <Buttonfavorito onClick={handleToggleFavorites}>
            {isFav ? 'Remove Fav' : 'Add Fav'}
          </Buttonfavorito>
          <Buttoneliminar onClick={() => handleRemoveApod(apod.title)}>
            Delete
          </Buttoneliminar>
        </ButtonContainer>


        <DetailsTitle>{apod.title}</DetailsTitle>
        <DetailsExplanation>{apod.explanation}</DetailsExplanation>
      </DetailsContent>
      <Footer />
    </DetailsContainer>
  )
}

export default memo(Details)
