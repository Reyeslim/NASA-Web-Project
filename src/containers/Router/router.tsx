import { FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../../views/Dashboard/dashboard'
import Login from '../../views/Auth/Login/login'
import Signup from '../../views/Auth/Signup/signup'
import Perfil from '../../views/Perfil/perfil'
import Details from '../../views/Details/details'
import CreateForm from '../../views/Create/createForm'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/create" element={<CreateForm />} />
        <Route path="/apods/:apodId" element={<Details />} />
        <Route path="/*" element={<Navigate replace to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
