import { FC, memo } from 'react'
import { useParams } from 'react-router-dom'

const EditForm: FC = () => {
  const { apodId } = useParams()
  console.log(apodId)
  return (
    // container
    <div>
      {/* Form */}
      <form>
        {/* InputController */}
        <div>
          {/* Label */}
          <label>Nombre de la entidad</label>
          <input type="text" />
        </div>
        <div>
          <label>Fecha</label>
          <input type="date" />
        </div>
        <div>
          <label>Descripción</label>
          <input type="text" />
        </div>
      </form>
    </div>
  )
}

export default memo(EditForm)
