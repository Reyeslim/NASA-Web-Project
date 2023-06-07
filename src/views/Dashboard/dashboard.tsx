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
import { getCachedApods, setCachedApods } from '../../services/storage/apods'

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

  const handleRemoveApod = useCallback((apodId: string) => {
    const currentApods = getCachedApods()
    const filteredApods = currentApods.filter(
      (cachedApod) => apodId !== cachedApod.id
    )
    setCachedApods(filteredApods)
    setApods(filteredApods)
  }, [])

  if (isLoading) {
    return <div>Now downloading...</div>
  }

  return (
    <DashboardContainer>
      <VideoBackground videoSrc="/earth.mp4" />
      <Button onClick={handleGoToCreateForm}>Create New Entity</Button>
      <Header />
      <DashboardContent>
        <DashboardCards>
          {apods.map((apod, index) => (
            <Card key={index} apod={apod} onRemove={handleRemoveApod} />
          ))}
        </DashboardCards>
      </DashboardContent>
      <Footer />
    </DashboardContainer>
  )
}

export default memo(Dashboard)
