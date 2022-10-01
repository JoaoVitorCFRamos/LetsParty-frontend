import "./style.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { FaEye } from "react-icons/fa";
import { BlueButton } from "../../../components/BlueButton";
import LogoLp from "../../../assets/Icon.png";

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
    <div className="loginCompany-mainDiv">
      <div className="loginCompany-loginDiv">
        <div className="loginCompany-headerDiv">
          <img src={LogoLp} />
          <label className="loginCompany-header">Com a Let's Party você vai encontrar o Buffet perfeito para suas festas infantis. Será uma festa inesquecível!</label>
        </div>
        <div className="loginCompany-inputsDiv">
          <input
            className="loginCompany-inputEmail"
            type="text"
            placeholder="Email"
            onChange={onChangeField("email")}
            value={fields.email}
          />
          <div className="loginCompany-divPasswordInput">
            <input
              type={passwordType}
              placeholder="Senha"
              onChange={onChangeField("password")}
              value={fields.password}
            />
            <div onClick={togglePassword} className="loginCompany-divIcon">
              <FaEye size={20} />
            </div>
          </div>
        </div>
        <BlueButton onClick={handleLogin} title="Entrar" />
      </div>

    </div>
  );
};

export default LoginCompany;
