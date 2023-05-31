import { FC, memo } from 'react'
import { DashboardContainer, DashboardContent } from './dashboardStyles'
import Header from '../../components/Header/header'
import Button from '../../components/Button/button'
import Footer from '../../components/Footer/footer'

const Dashboard: FC = () => {
  return (
    <DashboardContainer>
      <Header />

      <DashboardContent>
        Esto es el DashboardContent
        <Button children={'Prueba-Botón'} />
        {/* A la espera de que se hagan las cards, para reflejarlas en el Dashboard vídeo 1 en 20:10 minutos. */}
      </DashboardContent>

      <Footer />
    </DashboardContainer>
  )
}

export default memo(Dashboard)
