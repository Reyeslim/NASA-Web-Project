import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* Ajusta el ancho del contenedor según tus necesidades */
  
`;

export const DashboardContent = styled.div`
  width: 80%; /* Ajusta el ancho según tus necesidades */
  margin-top: 20px;
  margin-left: auto; /* Centra el contenido horizontalmente */
  margin-right: auto; /* Centra el contenido horizontalmente */
`;

export const DashboardCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;