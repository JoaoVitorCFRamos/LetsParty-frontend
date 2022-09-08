import "./style.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { FaEye } from "react-icons/fa";

interface SignInFormData {
  email: string;
  password: string;
}

const LoginCompany = () => {
  const [fields, setFields] = useState<SignInFormData>({
    email: "",
    password: "",
  });
  const [passwordType, setPasswordType] = useState("password");

  const { signInCompany, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const onChangeField =
    (field: string) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFields({ ...fields, [field]: event.target.value });
    };

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    await signInCompany(fields);
  };

  useEffect(() => {
    if (isAuthenticated && user?.role === "COMPANY") {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate, user?.role]);

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
          className="login-inputEmail"
          type="text"
          placeholder="Email"
          onChange={onChangeField("email")}
          value={fields.email}
        />
        <div className="login-divPasswordInput">
          <input
            type={passwordType}
            placeholder="Senha"
            onChange={onChangeField("password")}
            value={fields.password}
          />
          <div onClick={togglePassword} className="login-divIcon">
            <FaEye size={20} />
          </div>
        </div>
        <button className="login-loginButton" onClick={handleLogin}>
          Entrar
        </button>
        <Link className="login-link" to="/register">
          <label>Cadastre-se</label>
        </Link>
      </div>
    </div>
  );
};

export default LoginCompany;
