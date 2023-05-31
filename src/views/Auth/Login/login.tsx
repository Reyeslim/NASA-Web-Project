import { FC, memo, useCallback } from 'react'
import { Formik } from 'formik'
import { InitialValues, ValidationSchema } from './constant'
import {
  Button,
  Container,
  Form,
  FormContent,
  Info,
  Input,
  InputController,
  InputError,
  Label,
  Link,
  Title,
} from './loginStyles'

const Login: FC = () => {
  const handleOnSubmit = useCallback(
    (values: { email: string; password: string }) => {
      console.log(values)
    },
    []
  )
  return (
    <Container>
      <Formik
        initialValues={InitialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleOnSubmit}
      >
        {({ errors, handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormContent>
              <Title>Inicia sesión</Title>
              <InputController>
                <Label>Correo Electrónico</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
                {errors?.email && <InputError>{errors.email}</InputError>}
              </InputController>
              <InputController>
                <Label>Contraseña</Label>
                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                />
                {errors?.password && <InputError>{errors.password}</InputError>}
              </InputController>
              <Button type="submit">Inicia sesión</Button>
              <Info>
                ¿Todavía no te has registrado?{' '}
                <Link to="/signup">Regístrate aquí</Link>
              </Info>
            </FormContent>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default memo(Login)
