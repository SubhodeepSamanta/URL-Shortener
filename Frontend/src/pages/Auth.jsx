import React, { useState } from 'react'
import Home from './Home'
import Login from '../components/Login/Login'
import { useNavigate } from '@tanstack/react-router'
import SignUp from '../components/SignUp/SignUp'

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true)
    const navigate = useNavigate();

  const handleShowSignUp = () => setShowLogin(false)
  const handleShowLogin = () => setShowLogin(true)
  const handleLoginSuccess = () => {
    console.log("Login success, setting isAuthenticated to true");
    navigate({ to: "/" });
  }
  return (
    <div>
      {showLogin ? (
        <Login onShowSignUp={handleShowSignUp} onLogin={handleLoginSuccess} />
      ) : (
        <SignUp onShowLogin={handleShowLogin} />
      )}
    </div>
  )
}

export default Auth