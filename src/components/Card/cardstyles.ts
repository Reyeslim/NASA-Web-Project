import styled from 'styled-components'
import DefaultButton from '../../components/Button/button'

export const Container = styled.div`
  border-radius: 4px;
  width: 90%;
  max-width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 130px;
  margin-bottom: 20px;
`

export const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Button = styled(DefaultButton)`
  background-color: #e8e8e8;
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  margin-left: 8px;
  &:first-child {
    margin-left: 0;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 4rem;
  margin-bottom: 10px;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  margin-bottom: 30px;
`

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`

export const Title = styled.div`
  color: #ffffff; // Cambia el color del título a blanco
  font-size: 28px; // Cambia el tamaño del título a 28px
  font-weight: bold;
  margin-bottom: 10px;
  font-family: 'Arial', sans-serif; // Cambia la fuente del título a una fuente moderna
  margin-bottom: 10px;
`