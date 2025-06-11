import React, { useState } from 'react'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Home from './pages/Home'

const App = () => {
  const [showLogin, setShowLogin] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleShowSignUp = () => setShowLogin(false)
  const handleShowLogin = () => setShowLogin(true)
  const handleLoginSuccess = () => {
    console.log("Login success, setting isAuthenticated to true");
    setIsAuthenticated(true)
  }

  if (isAuthenticated) {
    return <Home />
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

export default App