import Logo from "../assets/LogoFacturaPy.jpg"; 
import { BotonBlanco} from "../components/Botones";
import { useNavigate } from "react-router-dom";
import "./TopNav.css"

export default function TopNav() {
  const navigate = useNavigate();
  return (
      <nav className="top-nav-style">
      <img src={Logo} alt="FacturaPy Logo" style={{ height: "65px", objectFit: "contain"}}/>
      <BotonBlanco onClick={() => navigate("/login")}>Iniciar Sesión</BotonBlanco>
    </nav>
  );
}
