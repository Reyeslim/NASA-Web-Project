import { FC, memo } from 'react'
import {
  Button,
  Container,
  Form,
  Input,
  InputController,
  InputImage,
  Label,
} from './createFormStyles'
import { Formik } from 'formik'
import { InitialValues, ValidationSchema } from './constants'

const CreateForm: FC = () => {
  return (
    <Container>
      <Formik
        initialValues={InitialValues}
        validationSchema={ValidationSchema}
        onSubmit={() => {
          console.log('subimos')
        }}
      >
        <Form>
          <InputController>
            <Label>Título</Label>
            <Input type="text" />
          </InputController>
          <InputController>
            <Label>Descripción</Label>
            <Input type="text" />
          </InputController>
          <InputController>
            <Label>Imagen</Label>
            <InputImage type="file" />
          </InputController>
          <Button
            onClick={() => {
              console.log('subimos')
            }}
          >
            Crear Apod
          </Button>
        </Form>
      </Formik>
    </Container>
  )
}

export default memo(CreateForm)