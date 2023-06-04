import { FC, memo, useEffect, useState } from 'react';
import {
  DetailsContainer,
  DetailsContent,
  DetailsTitle,
  DetailsExplanation,
  ButtonContainer,
  Buttonfavorito,
  Buttoneditar,
  Buttoneliminar,
} from './detailsStyles';
import { useParams } from 'react-router-dom';
import { Apod } from '../../models/Apod';
import { getCachedApodById } from '../../services/storage/apods';
import BackArrow from '../../components/Back/backArrow';

const Details: FC = () => {
  const { apodId } = useParams();
  const [apod, setApod] = useState<Apod | null>(null);
  
  const [favoritos, setFavoritos] = useState<{ title: string; explanation: string }[]>([]);  // 1 declaro favoritos
  
  useEffect(() => {
    if (apodId) {
      const retrievedApod = getCachedApodById(apodId);
      if (retrievedApod) {
        setApod(retrievedApod);
      }
    }
  }, [apodId]);

  useEffect(() => {  //  4 cargar los favoritos desde el LocalStorage cuando el componente se monta inicialmente ( esta parte creo que es la uqe nos hace falta para el perfil lo vemos juntos)
    const favoritosGuardados = localStorage.getItem('favoritos');
    if (favoritosGuardados) {
      setFavoritos(JSON.parse(favoritosGuardados));
    }
  }, []);  

  useEffect(() => {  // 3 almaceno los favoritos en el LocalStorage 
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  if (!apod) {
    return <div>NO EXISTE</div>;
  }

  const handleFavoritoClick = () => {  // 2 al hacer click agrego el título y la explicación a favoritos
    const nuevoFavorito = { title: apod.title, explanation: apod.explanation };
    setFavoritos([...favoritos, nuevoFavorito]);
  };

  const handleEditarClick = () => {
   
    console.log("Botón 'Editar' clickeado");
  };

  const handleEliminarClick = () => {
   
    console.log("Botón 'Eliminar' clickeado");
  };

  return (
    <DetailsContainer>
      <BackArrow />

      <ButtonContainer>
        <Buttoneditar onClick={handleEditarClick}>Editar</Buttoneditar>
        <Buttonfavorito onClick={handleFavoritoClick}>Favoritos</Buttonfavorito>
        <Buttoneliminar onClick={handleEliminarClick}>Eliminar</Buttoneliminar>
      </ButtonContainer>

      <DetailsContent>
        <DetailsTitle>{apod.title}</DetailsTitle>
        <DetailsExplanation>{apod.explanation}</DetailsExplanation>
      </DetailsContent>
    </DetailsContainer>
  );
};

export default memo(Details);