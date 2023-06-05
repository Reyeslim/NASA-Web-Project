import { FC, memo, useCallback } from 'react'
import { Container, ButtonContainer, Button } from './headerStyles'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../services/firebase/auth'

const Header: FC = () => {
  const handleReset = useCallback(() => {
    console.log('soy reset')
  }, [])

  const navigate = useNavigate()

  const handlePerfilClick = () => {
    navigate('/perfil')
  }

  const handleLogout = useCallback(async () => {
    await logout()
    navigate('/login')
    console.log('cerramos')
  }, [navigate])

  return (
    <Container>
      <ButtonContainer>
        <Button onClick={handleReset}>RESET</Button>
        <Button onClick={handlePerfilClick}>PROFILE</Button>
        <Button onClick={handleLogout}>LOGOUT</Button>
      </ButtonContainer>
    </Container>
  )
}

export default memo(Header)
