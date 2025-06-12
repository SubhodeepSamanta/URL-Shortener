import React, { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { checkAuth } from "../api/checkAuth";

let externalRefreshAuth; 

const NavBar = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  const fetchAuth = async () => {
    const user = await checkAuth();
    setLoggedIn(!!user);
  };

  useEffect(() => {
    fetchAuth();
    externalRefreshAuth = fetchAuth; 
    const interval = setInterval(fetchAuth, 30000);
    return () => {
      clearInterval(interval);
      externalRefreshAuth = null;
    };
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        fontFamily: "sans-serif",
        left: "50%",
        top: "2rem",
        transform: "translateX(-50%)",
        width: "90vw",
        maxWidth: 600,
        background: "rgba(255,255,255,0.25)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
        backdropFilter: "blur(12px)",
        borderRadius: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.8rem 2rem",
        zIndex: 100,
        border: "1.5px solid rgba(255,255,255,0.35)",
      }}
    >
      <span
        style={{
          fontWeight: 700,
          fontSize: "1.3rem",
          color: "#2B7EFD",
          letterSpacing: "1px",
          userSelect: "none",
          cursor: "pointer"
        }}
        onClick={()=>navigate({to: "/"})}
      >
        Url Shortener
      </span>
      <button
        onClick={() => navigate({ to: loggedIn ? "/dashboard" : "/auth" })}
        style={{
          background: loggedIn
            ? "linear-gradient(90deg,#1763c6 60%,rgb(49, 114, 199) 100%)"
            : "linear-gradient(90deg, #2B7EFD 60%, #1763c6 100%)",
          color: "#fff",
          border: "none",
          borderRadius: "1.2rem",
          padding: "0.6rem 1.8rem",
          fontWeight: 600,
          fontSize: "1.05rem",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(44, 62, 80, 0.10)",
          transition: "background 0.2s",
        }}
      >
        {loggedIn ? "Dashboard" : "Login"}
      </button>
    </nav>
  );
};

export const refreshNavBarAuth = () => {
  if (typeof externalRefreshAuth === "function") externalRefreshAuth();
};

export default NavBar;