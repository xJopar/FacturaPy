import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store/useStore";

export default function FormRegister() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
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
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.password) {
      newErrors.password = "La contraseña es requerida";
    } else if (formData.password.length < 6) {
      newErrors.password = "Debe tener al menos 6 caracteres";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setUser({ email: formData.email, nombre: formData.nombre, isAuthenticated: true });
    navigate("/dashboard");
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", textAlign: "center", color: "#333" }}>
        Crear Cuenta
      </h1>
      <p style={{ fontSize: "14px", textAlign: "center", color: "#666", marginBottom: "32px" }}>
        Registrate para acceder a tu historial de consumo
      </p>

      <form onSubmit={handleSubmit}>
        {/* Campo Nombre */}
        <div style={{ marginBottom: "20px" }}>
          <label className="form-label">Nombre completo</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ingresá tu nombre"
            style={{
              width: "100%",
              padding: "12px",
              border: `2px solid ${errors.nombre ? "#dc2626" : "#e0e0e0"}`,
              borderRadius: "8px",
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.2s ease",
            }}
            onFocus={(e) => {
              if (!errors.nombre) e.target.style.borderColor = "#1CC6AE";
            }}
            onBlur={(e) => {
              if (!errors.nombre) e.target.style.borderColor = "#e0e0e0";
            }}
          />
          {errors.nombre && (
            <span style={{ fontSize: "12px", color: "#dc2626", marginTop: "4px", display: "block" }}>
              {errors.nombre}
            </span>
          )}
        </div>

        {/* Campo Email */}
        <div style={{ marginBottom: "20px" }}>
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
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
            <span style={{ fontSize: "12px", color: "#dc2626", marginTop: "4px", display: "block" }}>
              {errors.email}
            </span>
          )}
        </div>

        {/* Contraseña */}
        <div style={{ marginBottom: "20px" }}>
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Mínimo 6 caracteres"
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
            <span style={{ fontSize: "12px", color: "#dc2626", marginTop: "4px", display: "block" }}>
              {errors.password}
            </span>
          )}
        </div>

        {/* Confirmar contraseña */}
        <div style={{ marginBottom: "24px" }}>
          <label className="form-label">Confirmar contraseña</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Repetí tu contraseña"
            style={{
              width: "100%",
              padding: "12px",
              border: `2px solid ${errors.confirmPassword ? "#dc2626" : "#e0e0e0"}`,
              borderRadius: "8px",
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.2s ease",
            }}
            onFocus={(e) => {
              if (!errors.confirmPassword) e.target.style.borderColor = "#1CC6AE";
            }}
            onBlur={(e) => {
              if (!errors.confirmPassword) e.target.style.borderColor = "#e0e0e0";
            }}
          />
          {errors.confirmPassword && (
            <span style={{ fontSize: "12px", color: "#dc2626", marginTop: "4px", display: "block" }}>
              {errors.confirmPassword}
            </span>
          )}
        </div>

        {/* Botón de enviar */}
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
          Crear Cuenta
        </button>

        {/* Ir a login */}
        <p style={{ textAlign: "center", fontSize: "14px", color: "#666" }}>
          ¿Ya tenés cuenta?{" "}
          <span
            style={{ color: "#1CC6AE", fontWeight: "600", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Iniciá sesión
          </span>
        </p>
      </form>
    </div>
  );
}
