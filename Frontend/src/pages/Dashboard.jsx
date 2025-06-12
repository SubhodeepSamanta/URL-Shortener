import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const BACKEND_URL = "http://localhost:5600"; // <-- Set your backend URL here

const Dashboard = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copyId, setCopyId] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUrls = async () => {
      setLoading(true);
      setError("");
      try {
        const { data } = await axiosInstance.get("/api/urls");
        setUrls(data.urls || []);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch URLs");
      }
      setLoading(false);
    };
    fetchUrls();
  }, []);

  const handleCopy = (shortUrl, id) => {
    navigator.clipboard.writeText(shortUrl);
    setCopyId(id);
    setTimeout(() => setCopyId(null), 1500);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0e7ff 0%, #f5f7fa 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          color: "#2B7EFD",
          fontWeight: 700,
          marginBottom: "1.5rem",
          marginTop: "9rem",
        }}
      >
        📊 Your Shortened URLs
      </h1>
      {error && (
        <div
          style={{
            background: "#ffeaea",
            color: "#d8000c",
            padding: "0.7rem 1rem",
            borderRadius: "0.5rem",
            marginBottom: "1rem",
            border: "1px solid #ffd6d6",
            textAlign: "center",
            width: "100%",
            maxWidth: 700,
          }}
        >
          {error}
        </div>
      )}
      {loading ? (
        <div style={{ fontSize: "1.2rem", color: "#444" }}>Loading...</div>
      ) : urls.length === 0 ? (
        <div style={{ fontSize: "1.1rem", color: "#888" }}>
          You haven't created any URLs yet.
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            maxWidth: 900,
            background: "#fff",
            borderRadius: "1rem",
            boxShadow: "0 4px 24px rgba(44,62,80,0.10)",
            padding: "2rem",
            overflowX: "auto",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#e0e7ff" }}>
                <th style={thStyle}>#</th>
                <th style={thStyle}>Original URL</th>
                <th style={thStyle}>Short URL</th>
                <th style={thStyle}>Clicks</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {urls.map((url, idx) => (
                <tr key={url._id} style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <td style={tdStyle}>{idx + 1}</td>
                  <td
                    style={{
                      ...tdStyle,
                      maxWidth: 220,
                      wordBreak: "break-all",
                    }}
                  >
                    <a
                      href={url.full_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#1763c6", textDecoration: "underline" }}
                    >
                      {url.full_url}
                    </a>
                  </td>
                  <td
                    style={{
                      ...tdStyle,
                      maxWidth: 180,
                      wordBreak: "break-all",
                    }}
                  >
                    <a
                      href={
                        url.short_url.startsWith("http")
                          ? url.short_url
                          : `${BACKEND_URL}/${url.short_url}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#2B7EFD", fontWeight: 600 }}
                    >
                      {url.short_url.startsWith("http")
                        ? url.short_url
                        : `${BACKEND_URL}/${url.short_url}`}
                    </a>
                  </td>
                  <td style={tdStyle}>{url.clicks}</td>
                  <td style={tdStyle}>
                    <button
                      style={{
                        background: "#2B7EFD",
                        color: "#fff",
                        border: "none",
                        borderRadius: "0.5rem",
                        padding: "0.4rem 1rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        marginRight: "0.5rem",
                        transition: "background 0.2s",
                      }}
                      onClick={() =>
                        handleCopy(
                          url.short_url.startsWith("http")
                            ? url.short_url
                            : `${BACKEND_URL}/${url.short_url}`,
                          url._id
                        )
                      }
                    >
                      {copyId === url._id ? "Copied!" : "Copy"}
                    </button>
                    <button
                      style={{
                        background: "#25be49",
                        color: "#fff",
                        borderRadius: "0.5rem",
                        padding: "0.4rem 1rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        marginLeft: "0.2rem",
                        transition: "background 0.2s",
                        border: "none",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        window.open(
                          url.short_url.startsWith("http")
                            ? url.short_url
                            : `${BACKEND_URL}/${url.short_url}`,
                          "_blank"
                        );
                        setTimeout(() => window.location.reload(), 500); 
                      }}
                    >
                      Visit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const thStyle = {
  padding: "0.7rem 0.5rem",
  fontWeight: 700,
  color: "#2B7EFD",
  fontSize: "1rem",
  textAlign: "left",
};

const tdStyle = {
  padding: "0.6rem 0.5rem",
  fontSize: "0.98rem",
  color: "#222",
  verticalAlign: "middle",
};

export default Dashboard;
