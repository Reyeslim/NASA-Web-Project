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
import { useParams } from 'react-router-dom'
import { Apod } from '../../models/Apod'
import {
  getCachedApodById,
  getCachedApods,
  setCachedApods,
} from '../../services/storage/apods'
import BackArrow from '../../components/Back/backArrow'
import VideoBackground from '../../components/VideoBackground/videoBackground'

const Details: FC = () => {
  const { apodId } = useParams()
  const [apod, setApod] = useState<Apod | null>(null)

  const handleRemoveApod = useCallback(
    (apodTitle: string) => {
      if (apodId) {
        const obtainedApod = getCachedApods()
        const filteredApods = obtainedApod.filter(
          (apod) => apod.title !== apodTitle
        )
        setCachedApods(filteredApods)
      }
    },
    [apodId]
  )

  const [favoritos, setFavoritos] = useState<
    { title: string; explanation: string }[]
  >([]) // 1 declaro favoritos

  useEffect(() => {
    if (apodId) {
      const retrievedApod = getCachedApodById(apodId)
      if (retrievedApod) {
        setApod(retrievedApod)
      }
    }
  }, [apodId])

  useEffect(() => {

    const favoritosGuardados = localStorage.getItem('favoritos');
    if (favoritosGuardados) {
      const favoritosParseados = JSON.parse(favoritosGuardados);
      setFavoritos((prevFavoritos) => [...prevFavoritos, ...favoritosParseados]);
    }
  }, []);


  useEffect(() => {
    // 3 almaceno los favoritos en el LocalStorage
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
  }, [favoritos])

  if (!apod) {
    return <div>ERROR 404 NOT FOUND</div>
  }

  const handleFavoritoClick = () => {

    const nuevoFavorito = { title: apod.title, explanation: apod.explanation };
  
    // Verificar si el favorito ya está presente en la lista
    const favoritoExistente = favoritos.some(
      (favorito) => favorito.title === nuevoFavorito.title
    );
  
    if (!favoritoExistente) {
      setFavoritos((prevFavoritos) => [...prevFavoritos, nuevoFavorito]);
    }
  };

  const handleEditarClick = () => {
    console.log("Botón 'Editar' clickeado")
  }

  return (
    <DetailsContainer>
      <BackArrow />
      <VideoBackground videoSrc="/earth.mp4" />
      <ButtonContainer>
        <Buttoneditar onClick={handleEditarClick}>Editar</Buttoneditar>
        <Buttonfavorito onClick={handleFavoritoClick}>Favoritos</Buttonfavorito>
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
