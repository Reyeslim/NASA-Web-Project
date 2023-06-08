import { FC, memo, useCallback } from 'react'
import { Container, ButtonContainer, Button } from './headerStyles'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../services/firebase/auth'
import type { Props } from './headerTypes'
import { USER_TOKEN_KEY } from '../../services/storage/token'
import { USER_INFO_KEY } from '../../services/storage/user'

const Header: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()

  const handleReset = useCallback(() => {
    const keepedToken: any = localStorage.getItem(USER_TOKEN_KEY)
    const keepedUserInfo: any = localStorage.getItem(USER_INFO_KEY)
    window.localStorage.clear()
    localStorage.setItem(USER_TOKEN_KEY, keepedToken)
    localStorage.setItem(USER_INFO_KEY, keepedUserInfo)
    navigate('/')
  }, [navigate])

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
