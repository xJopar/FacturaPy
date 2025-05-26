import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store/useStore";

export default function FormLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.password) {
      newErrors.password = "La contraseña es requerida";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setUser({ email: formData.email, isAuthenticated: true });
    navigate("/dashboard");
  };

  return (
    <div className="login-wrapper" style={{ maxWidth: 400, margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", textAlign: "center", color: "#333" }}>
        Iniciar Sesión
      </h1>
      <p style={{ fontSize: "14px", textAlign: "center", color: "#666", marginBottom: "32px" }}>
        Accedé a tu cuenta para ver tu historial
      </p>

      <form onSubmit={handleSubmit}>
        {/* Campo Email */}
        <div style={{ marginBottom: "20px" }}>
          <label className="form-label">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ejemplo@email.com"
            style={{
              width: "100%",
              padding: "12px",
              border: `2px solid ${errors.email ? "#dc2626" : "#e0e0e0"}`,
              borderRadius: "8px",
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.2s ease",
            }}
            onFocus={(e) => {
              if (!errors.email) e.target.style.borderColor = "#1CC6AE";
            }}
            onBlur={(e) => {
              if (!errors.email) e.target.style.borderColor = "#e0e0e0";
            }}
          />
          {errors.email && (
            <span style={{ color: "#dc2626", fontSize: "12px", marginTop: "4px", display: "block" }}>
              {errors.email}
            </span>
          )}
        </div>

        {/* Campo Contraseña */}
        <div style={{ marginBottom: "20px" }}>
          <label className="form-label">Contraseña</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Tu contraseña"
            style={{
              width: "100%",
              padding: "12px",
              border: `2px solid ${errors.password ? "#dc2626" : "#e0e0e0"}`,
              borderRadius: "8px",
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.2s ease",
            }}
            onFocus={(e) => {
              if (!errors.password) e.target.style.borderColor = "#1CC6AE";
            }}
            onBlur={(e) => {
              if (!errors.password) e.target.style.borderColor = "#e0e0e0";
            }}
          />
          {errors.password && (
            <span style={{ color: "#dc2626", fontSize: "12px", marginTop: "4px", display: "block" }}>
              {errors.password}
            </span>
          )}
        </div>

        {/* Botón */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "16px",
            backgroundColor: "#1CC6AE",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background-color 0.2s ease",
            marginBottom: "20px",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#16a085")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1CC6AE")}
        >
          Iniciar Sesión
        </button>

        {/* Redirección a registro */}
        <p style={{ textAlign: "center", fontSize: "14px", color: "#666" }}>
          ¿No tenés cuenta?{" "}
          <span
            style={{ color: "#1CC6AE", fontWeight: "600", cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Registrate
          </span>
        </p>
      </form>
    </div>
  );
}
