import { FC, memo } from 'react'
import { WelcomeDiv, Title, Subtitle } from './welcomeStyles'
import Footer from '../../components/Footer/footer'
import StartJourney from '../../components/StartJourney/startJourney'
import VideoBackground from '../../components/VideoBackground/videoBackground'

const Welcome: FC = () => {
  return (
    <WelcomeDiv>
      <VideoBackground videoSrc="/earth.mp4" />
      <Title>Welcome to the wonderful journey through APOD</Title>
      <Subtitle>(Astronomy Picture of the Day)</Subtitle>
      <StartJourney />
      <Footer />
    </WelcomeDiv>
  )
}

export default memo(Welcome)
