import styled from 'styled-components'

export const BackButton = styled.button`
  background-color: transparent;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid white;
  font-size: 16px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: #3f51b5;
  }
 margin-right: 10px;
  &:focus {
    outline: none;
    box-shadow: 0 0 5px #3f51b5;
  }
`