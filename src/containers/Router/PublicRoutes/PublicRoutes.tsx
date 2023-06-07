import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../../../views/Auth/Login/login'
import Signup from '../../../views/Auth/Signup/signup'
import Welcome from '../../../views/Welcome/welcome'
import { FC } from 'react'
import { Props } from './types'

export const PublicRoutes: FC<Props> = ({ onLogin, onSignup }) => {
  return (
    <Routes>
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<Login onLogin={onLogin} />} />
      <Route path="/signup" element={<Signup onSignup={onSignup} />} />
      <Route path="/*" element={<Navigate replace to="/welcome" />} />
    </Routes>
  )
}
