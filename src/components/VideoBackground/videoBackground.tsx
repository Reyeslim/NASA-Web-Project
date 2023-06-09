import { FC } from 'react'
import { VideoBackgroundContainer, Video } from './videoBackgroundStyles'

interface VideoBackgroundProps {
  videoSrc: string
}

const VideoBackground: FC<VideoBackgroundProps> = ({ videoSrc }) => {
  return (
    <VideoBackgroundContainer>
      <Video autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
      </Video>
    </VideoBackgroundContainer>
  )
}

export default VideoBackground
