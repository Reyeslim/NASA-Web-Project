import { useCallback } from 'react'
import { signup } from '../../../services/firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Props } from './types'
import { setToken } from '../../../services/storage/token'
import { setUserInfo } from '../../../services/storage/user'
import { updateProfile } from 'firebase/auth'

const useLogic = (onSignup: Props['onSignup']) => {
  const navigate = useNavigate()
  const handleOnSubmit = useCallback(
    async (values: {
      email: string
      password: string
      displayName: string
      phoneNumber: string
    }) => {
      try {
        const user = await signup(values.email, values.password)
        console.log(user)
        if (user) {
          const token = await user.getIdToken()
          const userInfo = user.providerData
          updateProfile(user, {
            displayName: values.displayName,
          })
          setUserInfo(userInfo)
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
