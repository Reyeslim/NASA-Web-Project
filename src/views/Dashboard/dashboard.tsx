import { FC, memo } from 'react'
import { DashboardContainer, DashboardContent, DashboardCards } from './dashboardStyles'
import Header from '../../components/Header/header'
import Button from '../../components/Button/button'
import Footer from '../../components/Footer/footer'
import Card from '../../components/Card/card'
import { cards } from './constants'
import { getNasaCategories } from '../../services/nasa/nasa'

const Dashboard: FC = () => {
  getNasaCategories()
  return (
    <DashboardContainer>
      <Header />

      <DashboardContent>
        Esto es el DashboardContent
        <Button children={'Prueba-Botón'} />
        {/* A la espera de que se hagan las cards, para reflejarlas en el Dashboard vídeo 1 en 20:10 minutos. */}
        <DashboardCards>
          {cards.map(card => (<Card title='Esto es el título' extraInfo='Esto es extraInfo' />))}
        </DashboardCards>

      </DashboardContent>

      <Footer />
    </DashboardContainer>
  )
}

export default memo(Dashboard)
