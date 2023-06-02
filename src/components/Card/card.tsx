import { FC, memo, useCallback, ReactNode } from 'react'
import {
  Button,
  Container,
  Content,
  ExtraInfo,
  Footer,
  FooterContent,
  Header,
  ImageContainer,
  Image,
} from './cardstyles'
import type { Props } from './types'
import { useNavigate } from 'react-router-dom'

const Card: FC<Props> = ({ onClick, apod }) => {
  const navigate = useNavigate()
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick()
    }
  }, [onClick])

  const handleGoToDetails = useCallback(() => {
    navigate(`/apods/${apod.id}`)
  }, [])

  return (
    <Container>
      <Content>
        <Header>
          <Button onClick={handleGoToDetails}>Detalles</Button>
          <Button onClick={handleClick}>Eliminar</Button>
          <Button onClick={handleClick}>Favorito</Button>
        </Header>
        <div>{apod.title}</div>
        <ImageContainer>
          <Image src={apod.url} alt={apod.title} />{' '}
          {/* Utiliza la prop imageSrc como src */}
        </ImageContainer>
        <Footer>
          <FooterContent>
            <ExtraInfo>{apod.explanation}</ExtraInfo>
          </FooterContent>
        </Footer>
      </Content>
    </Container>
  )
}

export default memo(Card)
