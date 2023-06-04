import styled from 'styled-components'
import DefaultButton from '../../components/Button/button'

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #333333;
`

export const DetailsContent = styled.div`
  width: 80%;
  margin-top: 20px;
`

export const DetailsTitle = styled.h1`
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`

export const DetailsExplanation = styled.p`
  color: #ffffff;
  font-size: 16px;
  text-align: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

export const Buttoneditar = styled.button`
  background-color: #3f51b5;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 340px;

  &:hover {
    background-color: #303f9f;
  }
`

export const Buttonfavorito = styled.button`
  background-color: #3f51b5;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #303f9f;
  }
`

export const Buttoneliminar = styled(DefaultButton)`
  background-color: #3f51b5;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #303f9f;
  }
`
