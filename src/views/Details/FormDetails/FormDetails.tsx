import { FC, memo } from 'react'
import {
  Button,
  Container,
  Form,
  Input,
  InputController,
  Label,
} from './editStyles'
import { Formik } from 'formik'
import { ValidationSchema } from './constants'
import useLogic from './logic'
import { Props } from './types'
import VideoBackground from '../../../components/VideoBackground/videoBackground'
import Footer from '../../../components/Footer/footer'

const FormDetails: FC<Props> = ({ id, initialValues, onEditComplete }) => {
  const { handleEdit } = useLogic(id, onEditComplete)

  return (
    <Container>
      <VideoBackground videoSrc="/earth.mp4" />
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleEdit}
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
            <Button type="submit">Edit Apod</Button>
          </Form>
        )}
      </Formik>
      <Footer />
    </Container>
  )
}

export default memo(FormDetails)
