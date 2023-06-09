import styled from 'styled-components'

export const VideoBackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
`

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
