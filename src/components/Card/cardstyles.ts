import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid gray;
  border-radius: 4px;
  width: 80%;
  max-width: 80vw; /* Cambia el valor de max-width a 80vw */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  background-color: #dddddd; /* Color de fondo gris oscuro */
  
  @media (min-width: 768px) {
    width: 70%;
    max-width: 70vw; /* Ajusta el valor de max-width en la media query correspondiente */
  }
  
  @media (min-width: 1024px) {
    width: 60%;
    max-width: 60vw; /* Ajusta el valor de max-width en la media query correspondiente */
  }
`;


export const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 4rem;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  background-color: #e8e8e8;
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  margin-left: 8px;
  &:first-child {
    margin-left: 0;
  }
`;

export const Footer = styled.div`
  border-top: 1px solid gray;
  margin-top: 16px;
`;

export const FooterContent = styled.div`
  margin-top: 16px;
`;

export const ExtraInfo = styled.div`
  margin-bottom: 16px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px; /* Ajusta la altura según tus necesidades */
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;