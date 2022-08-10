import { Link } from "react-router-dom";
import "./style.css"

export const Register = () => {
  return (
    <div className="register-mainDiv">
      <div className="register-leftSide">
        <label className="register-labelSubtitle">Deseja realizar a festa dos sonhos para seus filhos?</label>
        <div className="register-divFormUser">
          <label>Nome:</label>
          <input type="text" />
          <label>Email:</label>
          <input type="text" />
          <label>Nome:</label>
          <input type="text" />
          <label>Nome:</label>
          <input type="text" />
          <button className="register-registerButton ">Cadastrar</button>
        </div>
        <label>Já possui cadastro? <Link className="register-link" to="/Login">Fazer Login </Link></label>
      </div>
      <div className="register-division"></div>
      <div className="register-rightSide">
        <label className="register-labelSubtitle">É um estabelecimento?</label>
        <div className="register-divFormEstablishment">
          <label>Nome:</label>
          <input type="text" />
          <label>Email:</label>
          <input type="text" />
          <label>Senha:</label>
          <input type="text" />
          <label>CNPJ:</label>
          <input type="text" />
          <label>Endereço:</label>
          <input type="text" />
          <button className="register-registerButton ">Cadastrar</button>
        </div>
        <label>Já possui cadastro? <Link className="register-link" to="/login">Fazer Login </Link></label>
      </div>
    </div>
  );
};

export default Register;
