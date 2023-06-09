import styled, { keyframes } from 'styled-components'

const blinkAnimation = keyframes`
  0% { background-color: transparent; }
  50% { background-color: rgba(63, 81, 181, 0.6); } 
  100% { background-color: transparent; }
`

export const ButtonJourney = styled.button`
  background-color: transparent;
  color: white;
  padding: 10px 20px;
  border: none;
  margin-right: 10px;
  border-radius: 50px;
  cursor: pointer;
  border: 2px solid white;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  min-width: 135px;
  animation: ${blinkAnimation} 1s infinite;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: #3f51b5;
    animation: none;
    text-decoration-line: underline;
    text-shadow: 0px 0px 10px #cf0ea9;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #3f51b5;
    text-shadow: 0px 0px 10px #cf0ea9;
  }
`
