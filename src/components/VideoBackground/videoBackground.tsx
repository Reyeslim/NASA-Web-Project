import { FC, memo } from 'react'
import { VideoContainer, Video } from './videoBackgroundStyles'

interface VideoBackgroundProps {
  videoSrc: string
}

const VideoBackground: FC<VideoBackgroundProps> = ({ videoSrc }) => {
  return (
    <VideoContainer>
      <Video autoPlay muted loop>
        <source
          src={videoSrc}
          type="video/mp4"
        />
      </Video>
    </VideoContainer>
  )
}

export default memo(VideoBackground)


