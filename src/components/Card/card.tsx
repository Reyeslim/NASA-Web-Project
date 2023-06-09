import { FC, memo, useCallback, useState } from 'react'
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
import { toggleFavorites } from '../../services/storage/apods'

const Card: FC<Props> = ({ apod, onRemove, isProfile = false }) => {
  const navigate = useNavigate()
  const [isFav, setIsFav] = useState(apod.isFav)

  const handleGoToDetails = useCallback(() => {
    navigate(`/apods/${apod.id}`)
  }, [apod.id, navigate])

  const handleToggleFavorites = useCallback(() => {
    if (apod) {
      toggleFavorites(apod)
      setIsFav(!isFav)
    }
  }, [isFav, apod])

  return (
    <Container>
      <Content>
        {!isProfile && (
          <Header>
            <Button onClick={handleGoToDetails}>Details</Button>
            <Button onClick={handleToggleFavorites}>
              {isFav ? 'Remove Fav' : 'Add Fav'}
            </Button>
            <Button onClick={() => onRemove(apod.id)}>Remove</Button>
          </Header>
        )}

        {isProfile && (
          <Header>
            <Button onClick={handleGoToDetails}>Details</Button>
          </Header>
        )}

        <Title>{apod.title}</Title>
        <ImageContainer>
          <Image src={apod.url} alt={apod.title} />{' '}
        </ImageContainer>
      </Content>
    </Container>
  )
}

export default memo(Card)
