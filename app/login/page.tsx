"use client";

import { useState } from "react";

export default function QuickTestLogin() {
  const [email] = useState("admin@gmail.com");
  const [password] = useState("12345678");

  const loginNow = () => {
    fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          
          // GO DIRECTLY TO ADMIN PAGE (your admin panel is at /admin)
          window.location.href = "/admin";
        } else {
          alert("Wrong credentials");
        }
      })
      .catch(() => alert("Backend not running on port 4000!"));
  };

  return (
    <div style={{ 
      padding: 80, 
      fontFamily: "Arial", 
      background: "#0f0f0f", 
      color: "white", 
      minHeight: "100vh", 
      textAlign: "center" 
    }}>
      <h1 style={{ fontSize: 40, marginBottom: 20 }}>ADMIN QUICK LOGIN</h1>
      <p style={{ fontSize: 20, marginBottom: 40, color: "#aaa" }}>
        One click → straight to Admin Panel
      </p>

      <button
        onClick={loginNow}
        style={{
          padding: "20px 60px",
          fontSize: 24,
          fontWeight: "bold",
          background: "#ea580c",
          color: "white",
          border: "none",
          borderRadius: 16,
          cursor: "pointer",
          boxShadow: "0 8px 25px rgba(234, 88, 12, 0.5)",
          transition: "all 0.3s",
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-4px)"}
        onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
      >
        ENTER ADMIN PANEL NOW
      </button>

      <p style={{ marginTop: 40, color: "#0f0", fontSize: 18 }}>
        Auto login: admin@gmail.com / 12345678
      </p>
      <p style={{ color: "#ff9800", marginTop: 10 }}>
        Redirects to: <strong>/admin</strong>
      </p>
    </div>
  );
}