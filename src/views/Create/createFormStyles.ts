import styled from 'styled-components'
import DefaultButton from '../../components/Button/button'

export const Container = styled.div``

export const ButtonContainer = styled.div`
  margin-top: 58px;
  margin-left: 30px;
`

export const Form = styled.form`
  height: 530px;
  width: 340px;
  background-color: rgba(245, 245, 245, 0.1);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 30px;
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;

  @media screen and (max-width: 768px) {
    width: auto;
    height: auto;
  }
`

export const InputController = styled.div`
  display: flex;
  flex-flow: column;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`

export const Label = styled.label`
  margin-top: 30px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 5px;
  }
`

export const Input = styled.input`
  height: 50px;
  width: 95%;
  background-color: rgba(199, 215, 245, 0.8);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 16px;
  font-weight: 300;
  color: #000000;

  &:-webkit-autofill {
    -webkit-text-fill-color: #000000;
    box-shadow: 0 0 0px 1000px rgba(199, 215, 245, 0.8) inset;
  }

  &:focus {
    background-color: rgba(199, 215, 245, 0.8);
  }

  @media screen and (max-width: 768px) {
    height: 30px;
    font-size: 14px;
  }
`

export const Button = styled(DefaultButton)`
  margin-top: 50px;
  width: 100%;
  background-color: rgba(81, 185, 249, 0.45);
  color: #ffff;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    text-shadow: 0px 0px 10px #cf0ea9;
  }

  @media screen and (max-width: 768px) {
    font-size: 15px;
    margin-top: 5px;
  }
`
