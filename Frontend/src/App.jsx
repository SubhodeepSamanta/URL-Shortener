import React, { useState } from 'react'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { Outlet } from '@tanstack/react-router'

const App = () => {
  return (
    <Outlet/>
  )
}

export default App