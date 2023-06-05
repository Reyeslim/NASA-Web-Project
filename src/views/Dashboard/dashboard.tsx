import { FC, memo, useCallback, useEffect, useState } from 'react'
import {
  DashboardContainer,
  DashboardContent,
  DashboardCards,
  Button,
} from './dashboardStyles'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import Card from '../../components/Card/card'
import { getNasaApods } from '../../services/nasa/nasa'
import { Apod } from '../../models/Apod'
import VideoBackground from '../../components/VideoBackground/videoBackground'
import { useNavigate } from 'react-router-dom'

const Dashboard: FC = () => {
  const [apods, setApods] = useState<Apod[]>([])

  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const handleGoToCreateForm = useCallback(() => {
    navigate('/create')
  }, [navigate])

  const fetchNasaApods = useCallback(async () => {
    const apodsList = await getNasaApods()
    setApods(apodsList)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchNasaApods()
  }, [fetchNasaApods])

  if (isLoading) {
    return <div>CARGANDO...</div>
  }

  return (
    <DashboardContainer>
      <VideoBackground videoSrc="/earth.mp4" />
      <Header />
      <DashboardContent>
        <Button onClick={handleGoToCreateForm}>CREATE NEW ENTITY</Button>
        <DashboardCards>
          {apods.map((apod, index) => (
            <Card key={index} apod={apod} />
          ))}
        </DashboardCards>
      </DashboardContent>
      <Footer />
    </DashboardContainer>
  )
}

export default memo(Dashboard)
