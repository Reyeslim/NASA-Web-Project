import styled from 'styled-components'

export const PerfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  padding: 20px;
  border-radius: 8px;
  background-color: rgba(245, 245, 245, 0.2);
  margin: 180px auto;
`

export const Avatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #ccc;
  margin-bottom: 20px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const InfoItem = styled.p`
  margin-bottom: 10px;
  /* Añade estilos adicionales según tus preferencias */
`

export const AdditionalContainer = styled.div`
  /* background-color: rgba(245, 245, 245, 0.2); */
  /* padding: 40px;
  border-radius: 8px;
  margin: 40px 150px;
  height: 300px; */
  display: flex;
  flex-flow: column;
  align-items: center;
`
