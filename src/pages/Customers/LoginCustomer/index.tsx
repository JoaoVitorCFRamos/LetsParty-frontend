import "./style.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

import { FaEye } from "react-icons/fa";

import LogoLp from "../../../assets/Icon.png";
import BlueButton from "../../../components/BlueButton";

const LoginCustomer = () => {
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });
  const [passwordType, setPasswordType] = useState("password");
  const { signInCustomer, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const onChangeField =
    (field: string) =>
      (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFields({ ...fields, [field]: event.target.value });
      };

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    await signInCustomer(fields);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  useEffect(() => {
    if (isAuthenticated && user?.role === "CUSTOMER") {
      navigate("/app");
    }
  }, [isAuthenticated, navigate, user?.role]);

  return (
    <div className="loginCustomer-mainDiv">
      <div className="loginCustomer-loginDiv">
        <div className="loginCustomer-headerDiv">
          <img src={LogoLp} />
          <label className="loginCustomer-header">Com a Let's Party você vai encontrar o Buffet perfeito para suas festas infantis. Será uma festa inesquecível!</label>
        </div>
        <div className="loginCustomer-inputsDiv">
          <input
            className="loginCustomer-inputEmail"
            type="text"
            placeholder="Email"
            onChange={onChangeField("email")}
            value={fields.email}
          />
          <div className="loginCustomer-divPasswordInput">
            <input
              type={passwordType}
              placeholder="Senha"
              onChange={onChangeField("password")}
              value={fields.password}
            />
            <div onClick={togglePassword} className="loginCustomer-divIcon">
              <FaEye size={20} />
            </div>
          </div>
        </div>
        <div className="loginCostumer-divButton">
          <BlueButton onClick={handleLogin} title="Entrar" />
        </div>
      </div>

    </div>
  );
};

export default LoginCustomer;
