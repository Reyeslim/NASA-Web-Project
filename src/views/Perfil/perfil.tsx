import { FC, useCallback } from 'react'
import {
  PerfilContainer,
  Avatar,
  InfoContainer,
  InfoItem,
  AdditionalContainer,
} from './perfilStyles'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import VideoBackground from '../../components/VideoBackground/videoBackground'
import type { Props } from './perfilTypes'
import { getUserInfo } from '../../services/storage/user'
import {
  getCachedApods,
  getFavoritesApods,
  setCachedApods,
} from '../../services/storage/apods'
import Card from '../../components/Card/card'

const Perfil: FC<Props> = ({ onLogout }) => {
  const user = getUserInfo()
  const currentFavs = getFavoritesApods()
  const handleRemoveApod = useCallback((apodId: string) => {
    const currentApods = getCachedApods()
    const filteredApods = currentApods.filter(
      (cachedApod) => apodId !== cachedApod.id
    )
    setCachedApods(filteredApods)
    setApods(filteredApods)
  }, [])
  return (
    <>
      <Header onLogout={onLogout} />
      <VideoBackground videoSrc="/earth.mp4" />
      <PerfilContainer>
        <Avatar />
        <InfoContainer>
          <InfoItem>
            <strong>Name:</strong>
            {user[0].displayName}
          </InfoItem>
          <InfoItem>
            <strong>Phone number:</strong> {user[0].phoneNumber}
          </InfoItem>
          <InfoItem>
            <strong>Email: </strong>
            {user[0].email}
          </InfoItem>
        </InfoContainer>
      </PerfilContainer>

      <AdditionalContainer>
        {currentFavs.map((apod, index) => (
          <Card key={index} apod={apod} onRemove={handleRemoveApod} />
        ))}
      </AdditionalContainer>

      <Footer />
    </>
  )
}

export default Perfil
function setApods(
  filteredApods: {
    id: string
    title: string
    copyright: string
    mediaType: string
    serviceVersion: string
    explanation: string
    date: string
    hdurl: string
    url: string
    isFav: boolean
  }[]
) {
  throw new Error('Function not implemented.')
}
