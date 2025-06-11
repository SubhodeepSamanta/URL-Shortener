import React, { useState } from 'react'
import style from './SignUp.module.css'
import axiosInstance from '../../api/axiosInstance'

const SignUp = ({ onSignUp, onShowLogin }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')
    try {
      await axiosInstance.post('/api/auth/register', { name, email, password }, { withCredentials: true })
      setLoading(false)
      setSuccess('Registration successful! You can now log in.')
      if (onSignUp) onSignUp()
    } catch (err) {
      setLoading(false)
      setError(err.response?.data?.message || 'Registration failed')
    }
  }

  return (
    <div className={style.signupContainer}>
      <form className={style.signupForm} onSubmit={handleSubmit}>
        <h2 className={style.title}>Sign Up</h2>
        {error && <div className={style.error}>{error}</div>}
        {success && <div className={style.success}>{success}</div>}
        <label className={style.label}>
          Name
          <input
            type="text"
            className={style.input}
            value={name}
            onChange={e => setName(e.target.value)}
            required
            autoComplete="name"
          />
        </label>
        <label className={style.label}>
          Email
          <input
            type="email"
            className={style.input}
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoComplete="username"
          />
        </label>
        <label className={style.label}>
          Password
          <input
            type="password"
            className={style.input}
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
        </label>
        <button className={style.button} type="submit" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
        <p className={style.loginText}>
          Already have an account?{' '}
          <span
            className={style.loginLink}
            onClick={onShowLogin}
            tabIndex={0}
            role="button"
            style={{ cursor: "pointer" }}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  )
}

export default SignUp