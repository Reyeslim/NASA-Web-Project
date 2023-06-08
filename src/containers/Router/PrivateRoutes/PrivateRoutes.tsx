import { Routes, Route, Navigate } from 'react-router-dom'
import { FC } from 'react'
import Dashboard from '../../../views/Dashboard/dashboard'
import Perfil from '../../../views/Perfil/perfil'
import CreateForm from '../../../views/Create/createForm'
import Details from '../../../views/Details/details'
import { Props } from './types'

export const PrivateRoutes: FC<Props> = ({ onLogout }) => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard onLogout={onLogout} />} />
      <Route path="/profile" element={<Perfil onLogout={onLogout} />} />
      <Route path="/create" element={<CreateForm />} />
      <Route path="/apods/:apodId" element={<Details />} />
      <Route path="/*" element={<Navigate replace to="/dashboard" />} />
    </Routes>
  )
}
