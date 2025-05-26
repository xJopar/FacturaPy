export default function GraficoFactura({ calculations }) {
  if (!Array.isArray(calculations)) {
    return null; // o podés renderizar un mensaje de error
  }
  // Ordenar por fecha ascendente y tomar los últimos 6
  const sortedData = [...(calculations || [])]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(-6);

  const maxConsumption = Math.max(...sortedData.map((calc) => calc.consumption), 100);
  const chartHeight = 200;
  const chartWidth = 400;
  const padding = 40;

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
        Consumo por Tiempo
      </h2>

      {sortedData.length > 0 ? (
        <div style={{ overflowX: "auto" }}>
          <svg width={chartWidth} height={chartHeight + padding} style={{ display: "block", margin: "0 auto" }}>
            {/* Líneas horizontales de referencia */}
            {[0, 25, 50, 75, 100].map((percentage) => {
              const y = chartHeight - (percentage / 100) * chartHeight + padding / 2;
              return (
                <g key={percentage}>
                  <line x1={padding} y1={y} x2={chartWidth - padding} y2={y} stroke="#f0f0f0" strokeWidth="1" />
                  <text
                    x={padding - 10}
                    y={y + 4}
                    fontSize="12"
                    fill="#666"
                    textAnchor="end"
                    fontFamily="system-ui, -apple-system, sans-serif"
                  >
                    {Math.round((percentage / 100) * maxConsumption)}
                  </text>
                </g>
              );
            })}

            {/* Línea del gráfico */}
            <polyline
              points={sortedData
                .map((calc, index) => {
                  const x = padding + (index * (chartWidth - 2 * padding)) / (sortedData.length - 1);
                  const y = chartHeight - (calc.consumption / maxConsumption) * chartHeight + padding / 2;
                  return `${x},${y}`;
                })
                .join(" ")}
              fill="none"
              stroke="#1CC6AE"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Puntos */}
            {sortedData.map((calc, index) => {
              const x = padding + (index * (chartWidth - 2 * padding)) / (sortedData.length - 1);
              const y = chartHeight - (calc.consumption / maxConsumption) * chartHeight + padding / 2;
              return (
                <g key={calc.id}>
                  <circle cx={x} cy={y} r="6" fill="#1CC6AE" />
                  <circle cx={x} cy={y} r="3" fill="white" />
                  <text
                    x={x}
                    y={chartHeight + padding - 5}
                    fontSize="10"
                    fill="#666"
                    textAnchor="middle"
                    fontFamily="system-ui, -apple-system, sans-serif"
                  >
                    {new Date(calc.date).toLocaleDateString("es-ES", {
                      month: "short",
                      day: "numeric",
                    })}
                  </text>
                </g>
              );
            })}
          </svg>
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
          No hay datos para mostrar
        </div>
      )}
    </div>
  );
}
