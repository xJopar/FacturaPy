import { useNavigate } from "react-router-dom";

export default function DashboardLayout({ children, user, onLogout }) {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: "#1CC6AE",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          onClick={() => navigate("/")}
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "white",
            fontFamily: "system-ui, -apple-system, sans-serif",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          FacturaPy
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ color: "white", fontSize: "16px" }}>
            Hola, <strong>{user?.nombre || user?.email}</strong>
          </div>
          <button
            onClick={onLogout}
            style={{
              backgroundColor: "white",
              color: "#1CC6AE",
              border: "none",
              padding: "10px 20px",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            Cerrar Sesión
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "30px",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          Dashboard
        </h1>
        {children}
      </main>
    </div>
  );
}
