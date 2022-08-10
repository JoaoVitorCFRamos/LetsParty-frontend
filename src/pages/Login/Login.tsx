import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";
import { ChangeEvent, useState } from "react";

export const Login = () => {
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const onChangeField =
    (field: string) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFields({ ...fields, [field]: event.target.value });
    };

  const Login = (response: any) => {
    axios
      .post(
        "https://lets-party-api-development.herokuapp.com/auth/customer",
        fields
        // { withCredentials: true }
      )
      .then((response) => {
        console.log(response.status);
        window.location.href = "http://localhost:3000/Register";
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(fields.password);
  };

  return (
    <div className="login-mainDiv">
      <div className="login-leftSide">
        <label className="login-labelsHeader">Let's Party</label>
        <div className="login-divTexts">
          <label className="login-labelSubtitle">
            Deseja realizar a festa dos sonhos para seus filhos?
          </label>
          <label className="login-labelsParagraph">
            Feche orçamentos de eventos infantis conosco! Personalize do
            jeitinho que quiser
          </label>
        </div>
        <div className="login-divTexts">
          <label className="login-labelSubtitle">É um estabelecimento?</label>
          <label className="login-labelsParagraph">
            Cadastre seu espaço aqui conosco!
          </label>
        </div>
      </div>
      <div className="login-division"></div>
      <div className="login-rightSide">
        <input
          type="text"
          placeholder="Email"
          onChange={onChangeField("email")}
          value={fields.email}
        />
        <input
          type="text"
          placeholder="Senha"
          onChange={onChangeField("password")}
          value={fields.password}
        />
        <button className="login-loginButton" onClick={Login}>
          Entrar
        </button>
        <Link className="login-link" to="/Register">
          <label>Cadastre-se</label>
        </Link>
      </div>
    </div>
  );
};

export default Login;
