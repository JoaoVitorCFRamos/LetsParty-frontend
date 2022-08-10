import { Link } from "react-router-dom";
import "./style.css";


export const LandingPage = () => {
    return (
        <div>
            <Link to="/Register">
                <h1>Ir para tela de registro</h1>
            </Link>
            <Link to="/Login">
                <h1>Ir para tela de Login</h1>
            </Link>
        </div>
    );
};

export default LandingPage;
