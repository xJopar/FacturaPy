import CalculadoraBox from "../components/CalculadoraBox";
import InfoCard from "../components/InfoCard";
import TopNav from "../components/TopNav";
import "./Landing.css";

export default function LandingPage() {
  return (
    <div className="landing-wrapper" style={{ backgroundColor: "#1CC6AE", minHeight: "100vh" }}>
      <TopNav />
      <div className="landing-grid">

        {/* Invitacion a registro hacia la izquierda */}
        <div className="landing-left">
          <h1 className="landing-title">
            Calculá tu factura de electricidad en segundos
          </h1>
          <InfoCard />
        </div>

        {/* Prueba de la claculadora hacia la derecha */}
        <div className="landing-right">
          <CalculadoraBox />
        </div>
        
      </div>
    </div>
  );
}
