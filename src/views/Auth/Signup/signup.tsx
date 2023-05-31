import { FC, memo } from 'react'
import {
  Button,
  Container,
  Form,
  FormContent,
  Info,
  Input,
  InputController,
  Label,
  Link,
  Title,
} from './signupStyles'

const Signup: FC = () => {
  return (
    <Container>
      <Form>
        <FormContent>
          <Title>Crear cuenta</Title>
          <InputController>
            <Label>Nombre</Label>
            <Input type="text" name="name" />
          </InputController>
          <InputController>
            <Label>Teléfono</Label>
            <Input type="tel" name="phone" />
          </InputController>
          <InputController>
            <Label>Correo Electrónico</Label>
            <Input type="email" name="email" />
          </InputController>
          <InputController>
            <Label>Contraseña</Label>
            <Input type="password" name="password" />
          </InputController>
          <Button>Crear cuenta</Button>
          <Info>
            ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
          </Info>
        </FormContent>
      </Form>
    </Container>
  )
}

export default memo(Signup)
