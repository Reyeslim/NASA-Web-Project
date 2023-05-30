import { FC, memo } from 'react'
import { Props } from './imgTypes'
import { Container, Img } from './imgStyles'

const Image: FC<Props> = ({ src, alt }) => {
  return (
    <Container>
      <Img src={src} alt={alt}></Img>
    </Container>
  )
}

export default memo(Image)
