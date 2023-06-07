import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const useLogic = () => {
  const navigate = useNavigate()
  const handleEdit = useCallback(
    (values: { title: string; description: string; url: string }) => {
      navigate(-1)
    },
    [navigate]
  )

  return { handleEdit }
}

export default useLogic
