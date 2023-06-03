import { FC, memo, useCallback } from 'react'
import {
  Button,
  Container,
  Content,
  Header,
  ImageContainer,
  Image,
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
        <div>{apod.title}</div>
        <ImageContainer>
          <Image src={apod.url} alt={apod.title} />{' '}
          {/* Utiliza la prop imageSrc como src */}
        </ImageContainer>
      </Content>
    </Container>
  )
}

export default memo(Card)
