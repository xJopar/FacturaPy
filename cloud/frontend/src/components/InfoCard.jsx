import { Heart } from "lucide-react";
import { BotonVerde } from "./Botones";
import { useNavigate } from "react-router-dom";
import "./InfoCard.css";

export default function InfoCard() {
  const navigate = useNavigate();

  return (
    <div className="info-card">
      <Heart className="info-card-icon" />
      <h3 className="info-card-title">¿Quieres tener un historial?</h3>
      <p className="info-card-text">
        Ahorrá tiempo & Controlá tu consumo
      </p>
      <BotonVerde onClick={() => navigate("/register")}>
        Registrate
      </BotonVerde>
    </div>
  );
}
