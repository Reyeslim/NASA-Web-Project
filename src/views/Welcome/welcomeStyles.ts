import styled from 'styled-components'

export const WelcomeDiv = styled.div`
  width: 100%;
  height: calc(100vh - 300px); 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  margin-top: 100px; 
`;

export const Title = styled.h1`
  font-size: 4vw;
  width: calc(80% - 20px); 
  text-align: center;
  margin-bottom: 10px;
`;

export const Subtitle = styled.h3`
  font-size: 3vw;
  width: calc(80% - 20px);
  text-align: center;
  margin-bottom: 20px;
`;
