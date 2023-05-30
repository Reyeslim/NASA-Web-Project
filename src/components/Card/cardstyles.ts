import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid gray;
  border-radius: 4px;
  height: 45vh; /* El 45% del alto de la ventana */
  width: 45%; /* El 50% del ancho de la ventana */
  display: flex;
  flex-direction: column;
  margin: 40px;
  background-color: #f2f2f2; /* Color de fondo gris */

`

export const Content = styled.div`
  padding: 16px;
  
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Alineación a la derecha */
  height: 4rem;
  margin-bottom: 16px;
`

export const Button = styled.button`
  background-color: #e8e8e8;
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  margin-left: 8px; /* Margen entre botones */
  &:first-child {
    margin-left: 0; /* Sin margen izquierdo para el primer botón */
  }
`

export const Footer = styled.div`
  border-top: 1px solid gray;
  margin-top: 16px;
`

export const FooterContent = styled.div`
  margin-top: 16px;
`

export const ExtraInfo = styled.div`
  margin-bottom: 16px;
`