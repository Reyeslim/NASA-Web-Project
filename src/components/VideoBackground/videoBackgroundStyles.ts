import styled from 'styled-components'

export interface VideoBackgroundProps {
  videoSrc: string
}

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
