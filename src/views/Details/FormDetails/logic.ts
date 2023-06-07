import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { EditApodInput } from '../../../models/Apod'
import { editCachedApod } from '../../../services/storage/apods'

const useLogic = (
  id: string,
  onEditComplete: (values: EditApodInput) => void
) => {
  const navigate = useNavigate()
  const handleEdit = useCallback(
    (values: EditApodInput) => {
      editCachedApod(id, values)
      onEditComplete(values)
      navigate(`/apods/${id}`)
    },
    [navigate, onEditComplete, id]
  )

  return { handleEdit }
}

export default useLogic
