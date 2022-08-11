import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

//Pages
import "./style.css";

export const Register = () => {
  const [fields, setFields] = useState({
    fullName: "",
    email: "",
    password: "",
    cpf: "",
    name: "",
    emailCompany: "",
    passwordCompany: "",
    cnpj: "",
    endereco: "",
  });

  const navigate = useNavigate();

  const onChangeFields =
    (field: string) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFields({ ...fields, [field]: event.target.value });
    };

  const registerCustomer = () => {
    api.post("/customers", fields);
    navigate("/login");
  };

  const registerCompany = () => {
    api.post("/companies", fields);
  };

  return (
    <div className="register-mainDiv">
      <div className="register-leftSide">
        <label className="register-labelSubtitle">
          Deseja realizar a festa dos sonhos para seus filhos?
        </label>
        <div className="register-divFormUser">
          <label>Nome:</label>
          <input
            onChange={onChangeFields("fullName")}
            value={fields.fullName}
            type="text"
          />
          <label>Email:</label>
          <input
            onChange={onChangeFields("email")}
            value={fields.email}
            type="text"
          />
          <label>Senha:</label>
          <input
            onChange={onChangeFields("password")}
            value={fields.password}
            type="password"
          />
          <label>CPF:</label>
          <input
            onChange={onChangeFields("cpf")}
            value={fields.cpf}
            type="text"
          />
          <button
            className="register-registerButton"
            onClick={registerCustomer}
          >
            Cadastrar
          </button>
        </div>
        <label>
          Já possui cadastro?
          <Link className="register-link" to="/Login">
            Fazer Login
          </Link>
        </label>
      </div>
      <div className="register-division"></div>
      <div className="register-rightSide">
        <label className="register-labelSubtitle">É um estabelecimento?</label>
        <div className="register-divFormEstablishment">
          <label>Nome:</label>
          <input
            onChange={onChangeFields("name")}
            value={fields.name}
            type="text"
          />
          <label>Email:</label>
          <input
            onChange={onChangeFields("emailCompany")}
            value={fields.emailCompany}
            type="text"
          />
          <label>Senha:</label>
          <input
            onChange={onChangeFields("passwordCompany")}
            value={fields.passwordCompany}
            type="password"
          />
          <label>CNPJ:</label>
          <input
            onChange={onChangeFields("cnpj")}
            value={fields.cnpj}
            type="text"
          />
          <label>Endereço:</label>
          <input
            onChange={onChangeFields("endereco")}
            value={fields.endereco}
            type="text"
          />
          <button className="register-registerButton" onClick={registerCompany}>
            Cadastrar
          </button>
        </div>
        <label>
          Já possui cadastro?{" "}
          <Link className="register-link" to="/login">
            Fazer Login{" "}
          </Link>
        </label>
      </div>
    </div>
  );
};

export default Register;
