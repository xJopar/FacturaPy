import { useState } from "react";
import { calcularFactura } from "../utils/calcularTarifa";

export default function CalculadoraDashboard({ onCalculate }) {
  const [reading, setReading] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const lectura = parseFloat(reading);
    if (!isNaN(lectura) && lectura >= 0) {
      const monto = calcularFactura(lectura);

      // Llamada al prop recibido
      onCalculate({
        id: Date.now().toString(),
        reading: lectura,
        estimatedCost: Math.round(monto),
        date: new Date().toISOString().split("T")[0],
        consumption: Math.round(lectura * 0.15), // simulado
      });

      setReading("");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "12px",
        padding: "24px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "16px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        Calculadora Rápida
      </h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "16px" }}>
          <label
            style={{
              display: "block",
              fontSize: "14px",
              fontWeight: "600",
              color: "#333",
              marginBottom: "6px",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            Lectura del medidor (kWh)
          </label>
          <input
            type="number"
            value={reading}
            onChange={(e) => setReading(e.target.value)}
            placeholder="Ej: 1234"
            style={{
              width: "100%",
              padding: "12px",
              border: "2px solid #e0e0e0",
              borderRadius: "8px",
              fontSize: "16px",
              fontFamily: "system-ui, -apple-system, sans-serif",
              outline: "none",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#1CC6AE";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#e0e0e0";
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#dc2626",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          Calcular y Guardar
        </button>
      </form>
    </div>
  );
}
