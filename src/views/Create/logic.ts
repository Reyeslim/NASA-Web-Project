import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { addNewApod } from '../../services/storage/apods'

const useLogic = () => {
  const navigate = useNavigate()
  const handleCreate = useCallback(
    (values: { title: string; explanation: string; url: string }) => {
      addNewApod(values)
      navigate('/dashboard')
    },
    [navigate]
  )

  return { handleCreate }
}

export default useLogic
