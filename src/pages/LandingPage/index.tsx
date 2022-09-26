import "./style.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <Link to="/register-customer">
        <h1>Ir para tela de registro de Cliente</h1>
      </Link>
      <Link to="/register-company">
        <h1>Ir para tela de registro de Empresa</h1>
      </Link>
      <Link to="/login">
        <h1>Ir para tela de Login Cliente</h1>
      </Link>
      <Link to="/login-business">
        <h1>Ir para tela de Login Empresa</h1>
      </Link>
    </div>
  );
};

export default LandingPage;
