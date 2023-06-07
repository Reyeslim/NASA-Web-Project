import styled from 'styled-components'

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const DashboardContent = styled.div`
  width: 80%; 
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`

export const DashboardCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const Button = styled.button`
  position: fixed;
  top: 110px;
  left: 20px;
  background-color: transparent;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid white;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  min-width: 135px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: #3f51b5;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #3f51b5;
  }
`