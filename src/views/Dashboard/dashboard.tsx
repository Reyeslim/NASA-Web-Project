import { FC, memo, useCallback, useEffect, useState } from 'react'
import {
  DashboardContainer,
  DashboardContent,
  DashboardCards,
} from './dashboardStyles'
import Header from '../../components/Header/header'
import Button from '../../components/Button/button'
import Footer from '../../components/Footer/footer'
import Card from '../../components/Card/card'
import { getNasaApods } from '../../services/nasa/nasa'
import { Apod } from '../../models/Apod'


const Dashboard: FC = () => {
  const [apods, setApods] = useState<Apod[]>([])

  const fetchNasaApods = useCallback(async () => {
    const apodsList = await getNasaApods()
    setApods(apodsList)
  }, [])

  useEffect(() => {
    fetchNasaApods()
  }, [])

  return (
    <DashboardContainer>
      <Header />
      <DashboardContent>
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
