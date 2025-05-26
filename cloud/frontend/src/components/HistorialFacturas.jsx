export default function HistorialFacturas({ calculations, onDelete }) {  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("es-PY", {
      style: "currency",
      currency: "PYG",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  if (!Array.isArray(calculations)) {
    calculations = [];
  }

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
          marginBottom: "20px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        Historial de Cálculos
      </h2>

      {calculations.length > 0 ? (
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f8f9fa" }}>
                <th style={thStyle("left")}>Fecha</th>
                <th style={thStyle("right")}>Lectura (kWh)</th>
                <th style={thStyle("right")}>Consumo</th>
                <th style={thStyle("right")}>Costo Estimado</th>
                <th style={thStyle("center")}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {calculations.map((calc) => (
                <tr key={calc.id} style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <td style={tdStyle("left")}>{formatDate(calc.date)}</td>
                  <td style={tdStyle("right")}>{calc.reading.toLocaleString()}</td>
                  <td style={tdStyle("right")}>{calc.consumption} kWh</td>
                  <td
                    style={{
                      ...tdStyle("right"),
                      color: "#1CC6AE",
                      fontWeight: "600",
                    }}
                  >
                    {formatCurrency(calc.estimatedCost)}
                  </td>
                  <td style={tdStyle("center")}>
                    <button
                      onClick={() => onDelete(calc.id)}
                      style={deleteButtonStyle}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.backgroundColor = "#b91c1c")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.backgroundColor = "#dc2626")
                      }
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div
          style={{
            textAlign: "center",
            color: "#666",
            padding: "40px",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          No hay cálculos guardados aún. ¡Realizá tu primer cálculo!
        </div>
      )}
    </div>
  );
}

// === Estilos auxiliares ===
const thStyle = (align = "left") => ({
  padding: "12px",
  textAlign: align,
  fontSize: "14px",
  fontWeight: "600",
  color: "#333",
  borderBottom: "2px solid #e0e0e0",
});

const tdStyle = (align = "left") => ({
  padding: "12px",
  fontSize: "14px",
  color: "#333",
  textAlign: align,
});

const deleteButtonStyle = {
  backgroundColor: "#dc2626",
  color: "white",
  border: "none",
  padding: "6px 12px",
  borderRadius: "6px",
  fontSize: "12px",
  fontWeight: "600",
  cursor: "pointer",
  fontFamily: "system-ui, -apple-system, sans-serif",
};
