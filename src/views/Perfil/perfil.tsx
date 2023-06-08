import { FC, memo, useCallback, useState } from 'react'
import {
  PerfilContainer,
  Avatar,
  InfoContainer,
  InfoItem,
  AdditionalContainer,
  ButtonContainer,
} from './perfilStyles'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import VideoBackground from '../../components/VideoBackground/videoBackground'
import type { Props } from './perfilTypes'
import { getUserInfo } from '../../services/storage/user'
import { getFavoritesApods } from '../../services/storage/apods'
import Card from '../../components/Card/card'
import BackArrow from '../../components/Back/backArrow'

const Perfil: FC<Props> = ({ onLogout }) => {
  const user = getUserInfo()
  const currentFavs = getFavoritesApods()

  return (
    <>
      <Header onLogout={onLogout} />
      <VideoBackground videoSrc="/earth.mp4" />
      <ButtonContainer>
        <BackArrow />
      </ButtonContainer>
      <PerfilContainer>
        <Avatar />
        <InfoContainer>
          <InfoItem>
            <strong>Name: </strong>
            {user[0].displayName}
          </InfoItem>
          <InfoItem>
            <strong>Phone number: </strong> {user[0].phoneNumber}
          </InfoItem>
          <InfoItem>
            <strong>Email: </strong>
            {user[0].email}
          </InfoItem>
        </InfoContainer>
      </PerfilContainer>

      <AdditionalContainer>
        {currentFavs.map((apod, index) => (
          <Card key={index} apod={apod} onRemove={() => {}} />
        ))}
      </AdditionalContainer>

      <Footer />
    </>
  )
}

export default memo(Perfil)
