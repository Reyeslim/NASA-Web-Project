import { useCallback } from 'react'
import { signup } from '../../../services/firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Props } from './types'
import { setToken } from '../../../services/storage/token'

const useLogic = (onSignup: Props['onSignup']) => {
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
          const token = await user.getIdToken()
          setToken(token)
          onSignup()
          navigate('/dashboard')
        }
      } catch (error) {
        console.log(error)
      }
    },
    [navigate, onSignup]
  )

  return { handleOnSubmit }
}

export default useLogic
