import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store/useStore";
import DashboardLayout from "../components/DashboardLayout.jsx";
import HistorialFacturas from "../components/HistorialFacturas.jsx";
import GraficoFactura from "../components/GraficoFactura.jsx";
import CalculadoraDashboard from "../components/CalculadoraDashboard.jsx";

export default function Dashboard() {
  const navigate = useNavigate();

  // Zustand
  const user = useStore((state) => state.user);
  const calculations = useStore((state) => state.calculations);
  const addCalculation = useStore((state) => state.addCalculation);
  const deleteCalculation = useStore((state) => state.deleteCalculation);

  // Redirigir si no hay usuario
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1CC6AE",
        }}
      >
        <div style={{ color: "white", fontSize: "18px" }}>Cargando...</div>
      </div>
    );
  }

  return (
    <DashboardLayout user={user} onLogout={() => navigate("/")}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
          marginBottom: "30px",
        }}
      >
        <CalculadoraDashboard onCalculate={addCalculation} />
        <GraficoFactura calculations={calculations} />
      </div>

      <HistorialFacturas calculations={calculations} onDelete={deleteCalculation} />
    </DashboardLayout>
  );
}
