import { FC, memo } from 'react'
import { Formik } from 'formik'
import { InitialValues, ValidationSchema } from './constant'
import {
  Button,
  Container,
  Form,
  FormContent,
  Input,
  InputController,
  Label,
  Title,
} from './loginStyles'

const Login: FC = () => {
  return (
    <Container>
      <Form>
        <FormContent>
          <Title>Inicia sesión</Title>
          <InputController>
            <Label>Correo Electrónico</Label>
            <Input type="email" name="email" />
          </InputController>
          <InputController>
            <Label>Contraseña</Label>
            <Input type="password" name="password" />
          </InputController>
          <Button>Inicia sesión</Button>
        </FormContent>
      </Form>
      {/* <Formik
    initialValues={InitialValues}
    validationSchema={ValidationSchema}
    onSubmit={}
    ></Formik> */}
    </Container>
  )
}

export default memo(Login)
