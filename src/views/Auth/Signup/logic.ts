import { useCallback } from 'react'
import { signup } from '../../../services/firebase/auth'
import { useNavigate } from 'react-router-dom'

const useLogic = () => {
  const navigate = useNavigate()
  const handleOnSubmit = useCallback(
    async (values: {
      email: string
      password: string
      name: string
      phone: string
    }) => {
      try {
        const user = await signup(values.email, values.password)
        console.log(user)
        if (user) {
          navigate('/dashboard')
        }
      } catch (error) {
        console.log(error)
      }
    },
    [navigate]
  )

  return { handleOnSubmit }
}

export default useLogic
