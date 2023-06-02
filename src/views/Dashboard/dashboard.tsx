import { FC, memo, useEffect, useState } from 'react'
import {
  DashboardContainer,
  DashboardContent,
  DashboardCards,
} from './dashboardStyles'
import Header from '../../components/Header/header'
import Button from '../../components/Button/button'
import Footer from '../../components/Footer/footer'
import Card from '../../components/Card/card'
import { cards } from './constants'
import { getNasaCategories } from '../../services/nasa/nasa'
import { NasaAPODResponse } from '../../models/Category'

const Dashboard: FC = () => {
  const [nasaImages, setNasaImages] = useState<NasaAPODResponse[]>([])

  useEffect(() => {
    const fetchNasaImages = async () => {
      const images = await getNasaCategories()
      setNasaImages(images)
    }

    fetchNasaImages()
  }, [])

  return (
    <DashboardContainer>
      <Header />

      <DashboardContent>
        Esto es el DashboardContent
        <Button children={'Prueba-Botón'} />
        <DashboardCards>
          {nasaImages.map((image, index) => {
            console.log(image.url)
            return (
              <Card
                key={index}
                title={image.title}
                extraInfo={image.date}
                imageSrc={image.url}
              />
            )
          })}
        </DashboardCards>
      </DashboardContent>

      <Footer />
    </DashboardContainer>
  )
}

export default memo(Dashboard)
