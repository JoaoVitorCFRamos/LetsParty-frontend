import "./style.css";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const RegisterCustomer = () => {
  const [fields, setFields] = useState({
    fullName: "",
    email: "",
    password: "",
    cpf: "",
  });

  const navigate = useNavigate();

  const onChangeFields =
    (field: string) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFields({ ...fields, [field]: event.target.value });
    };

  const registerCustomer = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    api
      .post("/customers", fields)
      .then((response) => {
        if (response.status === 201) {
          toast.success("Cadastro realizado com sucesso!");
          navigate("/login");
        }
      })
      .catch((error: AxiosError<any>) => {
        error.response?.data?.message.forEach((message: any) => {
          toast.error(message);
        });
      });
  };

  return (
    <div className="register-mainDiv">
      <div className="register-leftSide">
        <label className="register-labelSubtitle">
          Faça seu cadastro de forma rápida e fácil
        </label>
        <div className="register-divFormUser">
          <div>
            <label>Nome:</label>
            <input
              onChange={onChangeFields("fullName")}
              value={fields.fullName}
              type="text"
            />
          </div>
          <div>
            <label>CPF:</label>
            <input
              onChange={onChangeFields("cpf")}
              value={fields.cpf}
              type="text"
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              onChange={onChangeFields("email")}
              value={fields.email}
              type="text"
            />
          </div>
          <div>
            <label>Senha:</label>
            <input
              onChange={onChangeFields("password")}
              value={fields.password}
              type="password"
            />
          </div>
          <button
            className="register-registerButton"
            onClick={registerCustomer}
          >
            Cadastrar
          </button>
        </div>
        <label>
          Já possui cadastro?&nbsp;
          <Link className="register-link" to="/login">
            Fazer Login
          </Link>
        </label>
      </div>
    </div>
  );
};

export default RegisterCustomer;
