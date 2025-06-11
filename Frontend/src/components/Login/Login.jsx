import React, { useState } from "react";
import style from "./Login.module.css";
import axiosInstance from "../../api/axiosInstance";

const Login = ({ onLogin, onShowSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await axiosInstance.post(
        "/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      setLoading(false);
      if (onLogin) onLogin();
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className={style.loginContainer}>
      <form className={style.loginForm} onSubmit={handleSubmit}>
        <h2 className={style.title}>Login</h2>
        {error && <div className={style.error}>{error}</div>}
        <label className={style.label}>
          Email
          <input
            type="email"
            className={style.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </label>
        <button className={style.button} type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        <p className={style.signupText}>
          Don&apos;t have an account?{" "}
          <span
            className={style.signupLink}
            onClick={onShowSignUp}
            tabIndex={0}
            role="button"
            style={{ cursor: "pointer" }}
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;