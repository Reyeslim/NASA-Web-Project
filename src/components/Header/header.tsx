import { FC, memo } from "react";
import { Container, Info } from "./headerStyles";

const Header: FC = () => {
  return (
    <Container>
      <Info>HEADER</Info>
    </Container>
  );
};

export default memo(Header);
