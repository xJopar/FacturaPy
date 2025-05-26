import { useState } from "react";
import { BotonRojo, BotonModo } from "./Botones";
import { calcularFactura } from "../utils/calcularTarifa";
import "./CalculadoraBox.css";

export default function CalculatorBox() {
  const [reading, setReading] = useState(""); 
  const [result, setResult] = useState(null);

  const [activeMode, setActiveMode] = useState("Manual");

  const calcular = () => {
    const kwh = parseFloat(reading);
    if (isNaN(kwh) || kwh < 0) return;

    const monto = calcularFactura(kwh);
    setResult(monto);
  };

  return (
    <div className="calculator-box">
      <h2 className="calculator-title">Calculadora de Factura</h2>

      <p className="calculator-subtitle">
        Ingresá la lectura de tu medidor para calcular el monto estimado
      </p>

      <div className="calculator-modes">
        {["Manual", "Foto"].map((mode) => (
          <BotonModo
            key={mode}
            text={mode}
            active={mode === activeMode}
            onClick={() => setActiveMode(mode)}
          />
        ))}
      </div>

      <div className="calculator-input-container">
        <label className="calculator-label">
          Lectura del medidor (kWh)
        </label>
        <input
          type="number"
          placeholder="Ej: 250"
          value={reading}
          onChange={(e) => setReading(e.target.value)}
          className="calculator-input"
          onFocus={(e) => (e.target.style.borderColor = "#1CC6AE")}
          onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
        />
      </div>
    
      <BotonRojo onClick={calcular}>Calcular</BotonRojo>
        
      {result !== null && (
        <div className="calculator-result">
          <h3>Resultado estimado:</h3>
          <p style={{ fontSize: "24px", color: "#1CC6AE", fontWeight: "bold" }}>
            Gs {result.toLocaleString()}
          </p>
        </div>
      )}

    </div>
  );
}
