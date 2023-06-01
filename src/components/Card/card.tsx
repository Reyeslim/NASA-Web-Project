import { FC, memo, useCallback, ReactNode } from 'react';
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
} from './cardstyles';
import type { Props } from './types';

interface CardProps extends Props {
  children: ReactNode | null;
  imageSrc: string; // Agrega la prop imageSrc de tipo string
}

const Card: FC<CardProps> = ({ title, extraInfo, onClick, imageSrc }) => {
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  return (
    <Container>
      <Content>
        <Header>
          <Button onClick={handleClick}>Editar</Button>
          <Button onClick={handleClick}>Eliminar</Button>
          <Button onClick={handleClick}>Favorito</Button>
        </Header>
        <div>{title}</div>
        <ImageContainer>
          <Image src={imageSrc} alt={title} /> {/* Utiliza la prop imageSrc como src */}
        </ImageContainer>
        <Footer>
          <FooterContent>
            <ExtraInfo>{extraInfo}</ExtraInfo>
          </FooterContent>
        </Footer>
      </Content>
    </Container>
  );
};

export default memo(Card);