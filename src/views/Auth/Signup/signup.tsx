import { FC, memo, useCallback } from 'react'
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
} from './signupStyles'
import { Formik } from 'formik'
import { InitialValues, ValidationSchema } from './constant'

const Signup: FC = () => {
  const handleOnSubmit = useCallback(
    (values: {
      email: string
      password: string
      name: string
      phone: string
    }) => {
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
              <Title>Crear cuenta</Title>
              <InputController>
                <Label>Nombre</Label>
                <Input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                />
                {errors?.name && <InputError>{errors.name}</InputError>}
              </InputController>
              <InputController>
                <Label>Teléfono</Label>
                <Input
                  type="tel"
                  name="phone"
                  onChange={handleChange}
                  value={values.phone}
                />
                {errors?.phone && <InputError>{errors.phone}</InputError>}
              </InputController>
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
              <Button type="submit">Crear cuenta</Button>
              <Info>
                ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
              </Info>
            </FormContent>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default memo(Signup)
