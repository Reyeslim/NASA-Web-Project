import { FC, memo, useCallback } from 'react'
import { Container, ButtonContainer, Button } from './headerStyles'
import { useNavigate } from 'react-router-dom'



const Header: FC = () => {
  const handleReset = useCallback(() => {
    console.log('soy reset')
  }, [])

const navigate = useNavigate() 

  const handlePerfilClick = ()=> {
    navigate("/perfil")
  }

 const handleSignup = () => {
   navigate('/signup')
 }


  return (
    <Container>
      <ButtonContainer>
        <Button onClick={handleReset}>RESET</Button>
        <Button onClick={handlePerfilClick}>PERFIL</Button>
        <Button onClick={handleSignup}>CERRAR</Button>
      </ButtonContainer>
    </Container>
  )
}

export default memo(Header)
