import { FC, memo, useCallback } from 'react'
import {
  Button,
  Container,
  Content,
  ExtraInfo,
  Footer,
  FooterContent,
  Header,
} from './cardstyles'
import type { Props } from './types'

const Card: FC<Props> = ({ title, extraInfo, onClick }) => {
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick()
    }
  }, [onClick])

  return (
    <Container>
      <Content>
        <Header>
          <Button onClick={handleClick}>Editar</Button>
          <Button onClick={handleClick}>Eliminar</Button>
          <Button onClick={handleClick}>Favorito</Button>
        </Header>
        <div>{title}</div>
        <Footer>
          <FooterContent>
            <ExtraInfo>{extraInfo}</ExtraInfo>
          </FooterContent>
        </Footer>
      </Content>
    </Container>
  )
}

export default memo(Card)