import React from 'react'
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

interface PerfilProps {
  nombre?: string
  edad?: number
  email?: string
}



const Perfil: React.FC<PerfilProps> = ({ nombre, edad, email }) => {
  return (
    <>
      <Header />
      <VideoBackground videoSrc="/earth.mp4" />
      <PerfilContainer>
        <Avatar />
        <InfoContainer>
          <InfoItem>
            <strong>Nombre:</strong> {nombre}
          </InfoItem>
          <InfoItem>
            <strong>Edad:</strong> {edad}
          </InfoItem>
          <InfoItem>
            <strong>Email:</strong> {email}
          </InfoItem>
        </InfoContainer>
      </PerfilContainer>

      <AdditionalContainer>
        {/* Contenido adicional aquí */}
      </AdditionalContainer>

      <Footer />
    </>
  )
}

export default Perfil
