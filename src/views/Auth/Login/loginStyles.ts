import styled from 'styled-components'

export const Container = styled.div``

export const Form = styled.form`
  height: 520px;
  width: 400px;
  background-color: rgb(40, 39, 47);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 30px;
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
`

export const FormContent = styled.div`
  /* padding: 10px; */
`

export const Title = styled.h3`
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
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
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`

export const Input = styled.input`
  height: 50px;
  width: 95%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
  color: #ffffff;
`

export const Button = styled.button`
  margin-top: 50px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
`
