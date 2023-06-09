import { FC, memo, useCallback } from 'react'
import { ButtonJourney } from './startJourneyStyles'
import { useNavigate } from 'react-router-dom'

export const StartJourney: FC = () => {
  const navigate = useNavigate()
  const handleGoToLogin = useCallback(() => {
    navigate('/login')
    console.log('click')
  }, [navigate])

  return <ButtonJourney onClick={handleGoToLogin}> Start </ButtonJourney>
}

export default memo(StartJourney)
