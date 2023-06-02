import styled from 'styled-components'

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* Ajusta el ancho del contenedor según tus necesidades */
  background-color: #333333; /* Color de fondo gris oscuro */
`

export const DetailsContent = styled.div`
  width: 80%; /* Ajusta el ancho según tus necesidades */
  margin-top: 20px;
  margin-left: auto; /* Centra el contenido horizontalmente */
  margin-right: auto; /* Centra el contenido horizontalmente */
`

export const DetailsTitle = styled.h1`
  color: #ffffff; /* Color del texto blanco */
  font-size: 24px;
  margin-bottom: 10px;
`

export const DetailsExplanation = styled.p`
  color: #ffffff; /* Color del texto blanco */
  font-size: 16px;
`
