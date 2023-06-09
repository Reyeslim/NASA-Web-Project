import { useCallback } from 'react'
import { login } from '../../../services/firebase/auth'
import { useNavigate } from 'react-router-dom'
import { setToken } from '../../../services/storage/token'
import { Props } from './types'
import { setUserInfo } from '../../../services/storage/user'

const useLogic = (onLogin: Props['onLogin']) => {
  const navigate = useNavigate()
  const handleOnSubmit = useCallback(
    async (values: { email: string; password: string }) => {
      try {
        const user = await login(values.email, values.password)
        if (user) {
          const token = await user.getIdToken()
          const userInfo = user.providerData
          setUserInfo(userInfo)
          setToken(token)
          onLogin()
          navigate('/dashboard')
        }
      } catch (error) {
        console.log(error)
      }
    },
    [navigate, onLogin]
  )
  return { handleOnSubmit }
}

export default useLogic
