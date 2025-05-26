import React from "react";

export function BotonBlanco({ children, onClick }) {
  return (
    <button
      style={{
        backgroundColor: "white",
        color: "#1CC6AE",
        border: "none",
        padding: "12px 24px",
        borderRadius: "8px",
        fontSize: "16px",
        fontWeight: "600",
        cursor: "pointer",
        fontFamily: "system-ui, -apple-system, sans-serif",
        transition: "all 0.2s ease",
      }}
      onClick={onClick}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "white")}
    >
      {children}
    </button>
  );
}

export function BotonVerde({ children, onClick }) {
  return (
    <button
      style={{
        backgroundColor: "#1CC6AE",
        color: "white",
        border: "none",
        padding: "12px 24px",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: "600",
        cursor: "pointer",
        fontFamily: "system-ui, -apple-system, sans-serif",
        transition: "background-color 0.2s ease",
        margin: "0 auto",
        display: "block",
      }}
      onClick={onClick}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#16a085")}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1CC6AE")}
    >
      {children}
    </button>
  );
}

export function BotonRojo({ children, onClick }) {
  return (
    <button
      style={{
        width: "100%",
        padding: "16px",
        backgroundColor: "#dc2626",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontSize: "16px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "background-color 0.2s ease",
      }}
      onClick={onClick}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#b91c1c")}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#dc2626")}
    >
      {children}
    </button>
  );
}

export function BotonModo({ active, text, onClick, ...props }) {
    return (
      <button
        style={{
          flex: 1,
          padding: "12px",
          border: active ? "2px solid #1CC6AE" : "2px solid #e0e0e0",
          backgroundColor: active ? "#1CC6AE" : "#f5f5f5",
          color: active ? "white" : "#999",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: "600",
          cursor: active ? "pointer" : "not-allowed",
          opacity: active ? 1 : 0.6,
        }}
        disabled={!active}
        onClick={onClick}
        {...props}
      >
        {text}
      </button>
    );
}

