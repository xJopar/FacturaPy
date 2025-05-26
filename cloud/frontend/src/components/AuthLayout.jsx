import { useNavigate } from "react-router-dom";
import Logo from "../assets/LogoFacturaPy.jpg"; 


export default function AuthLayout({ children }) {
  const navigate = useNavigate();

  return (
    <div
      className="auth-layout-wrapper"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1CC6AE",
        position: "relative",
        padding: "20px",
      }}
    >
      {/* Logo en la esquina superior izquierda */}
      <div
        onClick={() => navigate("/")}
        style={{
          position: "absolute",
          top: "20px",
          left: "40px",
          fontSize: "28px",
          fontWeight: "bold",
          color: "white",
          fontFamily: "system-ui, -apple-system, sans-serif",
          cursor: "pointer",
          zIndex: 10,
        }}
      >
        <img src={Logo} alt="FacturaPy Logo" style={{ height: "65px", objectFit: "contain"}}/>
      </div>

      {/* Contenedor del formulario */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "20px",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
