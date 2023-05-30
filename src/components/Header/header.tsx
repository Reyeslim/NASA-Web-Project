
import { FC, memo } from "react";
import { Container, ButtonContainer, Button,  } from "./headerStyles";

const Header: FC = () => {
  return (
    <Container>
      <ButtonContainer>
        <Button>RESET</Button>
        <Button>PERFIL</Button>
        <Button>CERRAR</Button>
      </ButtonContainer>
    </Container>
  )
}

export default memo(Header)

