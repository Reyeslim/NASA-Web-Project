import { FC, memo, useCallback } from 'react'
import { Container, ButtonContainer, Button } from './headerStyles'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../services/firebase/auth'
import type { Props } from './headerTypes'

const Header: FC<Props> = ({ onLogout }) => {
  const handleReset = useCallback(() => {
    console.log('soy reset')
  }, [])

  const navigate = useNavigate()

  const handleGoToProfile = useCallback(() => {
    navigate('/profile')
  }, [navigate])

  const handleLogout = useCallback(async () => {
    await logout()
    window.localStorage.removeItem('userToken')
    onLogout()
    navigate('/welcome')
  }, [navigate, onLogout])

  return (
    <Container>
      <ButtonContainer>
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={handleGoToProfile}>Profile</Button>
        <Button onClick={handleLogout}>Logout</Button>
      </ButtonContainer>
    </Container>
  )
}

export default memo(Header)
