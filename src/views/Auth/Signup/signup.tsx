import { FC, memo } from 'react'
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
import useLogic from './logic'
import VideoBackground from '../../../components/VideoBackground/videoBackground'

const Signup: FC = () => {
  const { handleOnSubmit } = useLogic()
  return (
    <Container>
      <VideoBackground videoSrc="/earth.mp4" />
      <Formik
        initialValues={InitialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleOnSubmit}
      >
        {({ errors, handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormContent>
              <Title>Create an account</Title>
              <InputController>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                />
                {errors?.name && <InputError>{errors.name}</InputError>}
              </InputController>
              <InputController>
                <Label>Phone number</Label>
                <Input
                  type="tel"
                  name="phone"
                  onChange={handleChange}
                  value={values.phone}
                />
                {errors?.phone && <InputError>{errors.phone}</InputError>}
              </InputController>
              <InputController>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
                {errors?.email && <InputError>{errors.email}</InputError>}
              </InputController>
              <InputController>
                <Label>Password</Label>
                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                />
                {errors?.password && <InputError>{errors.password}</InputError>}
              </InputController>
              <Button type="submit">Register</Button>
              <Info>
                Already have an account? <Link to="/login">Log in now</Link>
              </Info>
            </FormContent>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default memo(Signup)
