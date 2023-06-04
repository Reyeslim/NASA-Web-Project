import { FC, memo, useCallback } from 'react'
import {
  Button,
  Container,
  Content,
  Header,
  ImageContainer,
  Image,
  Title,
} from './cardstyles'
import type { Props } from './types'
import { useNavigate } from 'react-router-dom'

const Card: FC<Props> = ({ apod }) => {
  const navigate = useNavigate()

  const handleGoToDetails = useCallback(() => {
    navigate(`/apods/${apod.id}`)
  }, [apod.id, navigate])

  return (
    <Container>
      <Content>
        <Header>
          <Button onClick={handleGoToDetails}>Detalles</Button>
        </Header>
        <Title>{apod.title}</Title> {/* Utiliza el componente de título */}
        <ImageContainer>
          <Image src={apod.url} alt={apod.title} />{' '}
          {/* Utiliza la prop imageSrc como src */}
        </ImageContainer>
      </Content>
    </Container>
  )
}

export default memo(Card)
