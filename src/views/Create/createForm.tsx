import { FC, memo } from 'react'
import {
  Button,
  Container,
  Form,
  Input,
  InputController,
  Label,
  ButtonContainer,
} from './createFormStyles'
import { Formik } from 'formik'
import BackArrow from '../../components/Back/backArrow'
import { InitialValues, ValidationSchema } from './constants'
import useLogic from './logic'
import Footer from '../../components/Footer/footer'
import VideoBackground from '../../components/VideoBackground/videoBackground'

const CreateForm: FC = () => {
  const { handleCreate } = useLogic()
  return (
    <Container>
      <VideoBackground videoSrc="/earth.mp4" />
      <ButtonContainer>
        <BackArrow />
      </ButtonContainer>
      <Formik
        initialValues={InitialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleCreate}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <InputController>
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                onChange={handleChange}
                value={values.title}
              />
            </InputController>
            <InputController>
              <Label>Description</Label>
              <Input
                type="text"
                name="explanation"
                onChange={handleChange}
                value={values.explanation}
              />
            </InputController>
            <InputController>
              <Label>Image</Label>
              <Input
                type="text"
                name="url"
                onChange={handleChange}
                value={values.url}
              />
            </InputController>
            <Button type="submit">Crear Apod</Button>
          </Form>
        )}
      </Formik>
      <Footer />
    </Container>
  )
}

export default memo(CreateForm)
