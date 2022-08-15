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
  });

  const [fieldsCompany, setFieldsCompany] = useState({
    name: "",
    cnpj: "",
    email: "",
    password: "",
    endereco: "",
  });



  const navigate = useNavigate();

  const onChangeFields =
    (field: string) =>
      (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFields({ ...fields, [field]: event.target.value });
      };

  const onChangeFieldsCompany =
    (field: string) =>
      (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFieldsCompany({ ...fieldsCompany, [field]: event.target.value });
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
            onChange={onChangeFieldsCompany("name")}
            value={fieldsCompany.name}
            type="text"
          />
          <label>Email:</label>
          <input
            onChange={onChangeFieldsCompany("email")}
            value={fieldsCompany.email}
            type="text"
          />
          <label>Senha:</label>
          <input
            onChange={onChangeFieldsCompany("password")}
            value={fieldsCompany.password}
            type="password"
          />
          <label>CNPJ:</label>
          <input
            onChange={onChangeFieldsCompany("cnpj")}
            value={fieldsCompany.cnpj}
            type="text"
          />
          <label>Endereço:</label>
          <input
            onChange={onChangeFieldsCompany("endereco")}
            value={fieldsCompany.endereco}
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
