import styled from 'styled-components'

export const Container = styled.header`
  background: rgba(17, 17, 17, 0.7);
  color: #fff;
  height: 90px;
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Alinea los botones a la derecha */
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;

  @media screen and (max-width: 768px) {
    /* Aplica los estilos cuando el ancho de la pantalla sea igual o menor a 768px */
    justify-content: center; /* Centra los botones */
    padding: 0 10px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  margin-right: 40px;

  @media screen and (max-width: 768px) {
    /* Aplica los estilos cuando el ancho de la pantalla sea igual o menor a 768px */
    margin-right: 0;
  }
`

export const Button = styled.button`
  background-color: transparent;
  color: white;
  padding: 10px 20px;
  border: none;
  margin-right: 10px;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid white;
  font-size: 15px;
  transition: all 0.3s ease-in-out;
  min-width: 115px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: #3f51b5;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #3f51b5;
  }

  @media screen and (max-width: 768px) {
    /* Aplica los estilos cuando el ancho de la pantalla sea igual o menor a 768px */
    min-width: auto;
    padding: 8px 16px;
    font-size: 14px;
  }
`