import { FC, memo } from 'react'

const EditForm: FC = () => {
  return (
    // container
    <div>
      {/* Form */}
      <form>
        {/* InputController */}
        <div>
          {/* Label */}
          <label htmlFor='name'>Entity name</label>
          <input id='name' type="text" />
        </div>
        <div>
          <label htmlFor='date'>Date</label>
          <input id='date' type="date" />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <input id='description' type="text" />
        </div>
      </form>
    </div>
  )
}

export default memo(EditForm)
