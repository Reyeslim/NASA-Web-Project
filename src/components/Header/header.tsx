import { FC, memo, useCallback } from 'react'
import { Container, ButtonContainer, Button } from './headerStyles'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../services/firebase/auth'
import type { Props } from './headerTypes'
import { removeToken } from '../../services/storage/token'
import { resetApodsCache } from '../../services/storage/apods'
import { resetUserInfo } from '../../services/storage/user'

const Header: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()

  const handleReset = useCallback(() => {
    resetApodsCache()
    navigate('/')
  }, [navigate])

  const handleGoToProfile = useCallback(() => {
    navigate('/profile')
  }, [navigate])

  const handleLogout = useCallback(async () => {
    await logout()
    removeToken()
    resetUserInfo()
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
