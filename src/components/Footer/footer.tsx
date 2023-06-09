import { FC, memo } from 'react'
import { Container, Info } from './footerStyles'

const Footer: FC = () => {
  return (
    <Container>
      <Info>&copy;NASA 2023</Info>
    </Container>
  )
}

export default memo(Footer)
