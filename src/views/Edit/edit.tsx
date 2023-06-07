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

const EditForm: FC = () => {
  const { handleEdit } = useLogic()

  return (
    <Container>
      <Formik
        initialValues={{
          title: '',
          description: '',
          url: '',
        }}
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
                name="description"
                onChange={handleChange}
                value={values.description}
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
    </Container>
  )
}

export default memo(EditForm)
