import "./style.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../../src/assets/Logo.png";
import { CircleComponent } from "../../components/CircleComponent";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landingPage-mainDiv">
      <div className="landingPage-navBar">
        <img src={Logo} className="ladingPage-logo" />
        <div className="landingPage-barMenu">
          {/* <label>O que fazemos?</label>
          <label> Benefícios para clientes</label>
          <label>Benefícios para clientes</label>
          <label>Contato</label> */}
        </div>
        <div className="landingPage-loginRegisterButtons">
          <label onClick={() => navigate("/login")}>Fazer Login</label>
          <div>
            <label onClick={() => navigate("/register-customer")}>
              Cadastrar-se
            </label>
          </div>
        </div>
      </div>
      <div className="landingPage-aboutUsDiv">
        <div className="ladingPage-aboutUsLeft"></div>
        <div className="ladingPage-aboutUsRight">
          <label className="landingPage-header">
            Aqui você encontra tudo o que precisa para realizar a sua festa dos
            sonhos!
          </label>
          <label>
            Nosso objetivo é reunir Buffets infantis e contratantes de festas
            infantis dentro da mesma plataforma.<br></br>
            Assim trazendo maior facilidade e flexibilidade para ambas as
            partes.
          </label>
          <h3>Entre em nossa plataforma e veja muito mais!</h3>
          <button
            onClick={() => navigate("/register-customer")}
            className="ladingPage-defaultButton"
          >
            Quero me cadastrar
          </button>
          <label>
            O lugar perfeito para fechamento de festas infantis é conosco!
          </label>
        </div>
      </div>
      <div className="landingPage-phrase">
        <label>Aqui a sua festa dos sonhos acontece</label>
        <label>Let's Party!!</label>
      </div>
      <div className="landingPage-benefitsDiv">
        <div className="landingPage-customerBenefits">
          <label className="landingPage-customersBenefitsHeader">
            Benefícios para os nossos clientes
          </label>
          <div className="landindingPage-customersBenefitsContent">
            <CircleComponent title="Monte sua festa">
              <div className="landingPage-circleCard1" />
            </CircleComponent>
            <CircleComponent title="Contrate festas a qualquer hora">
              <div className="landingPage-circleCard2" />
            </CircleComponent>
            <CircleComponent title="Diversas formas de pagamento">
              <div className="landingPage-circleCard3" />
            </CircleComponent>
          </div>
        </div>
        {/* <div className="landingPage-companyBenefits">
          <label className="landingPage-companyBenefitsHeader">Benefícios para Estabelecimentos</label>
          <div className="landindingPage-companyBenefitsContent">
            <CircleComponent title="Customize seu cardápio"><div className="landingPage-circleCard4" /></CircleComponent>
            <CircleComponent title="Contrate festas a qualquer hora"><div className="landingPage-circleCard5" /></CircleComponent>
            <CircleComponent title="Diversas formas de pagamento"><div className="landingPage-circleCard6" /></CircleComponent>
          </div>
        </div> */}
      </div>
      <div className="landingPage-loginAndRegister">
        <div className="landingPage-lrLeftContent">
          <label className="landingPage-lrHeader">
            Deseja utilizar a plataforma como Cliente?
          </label>
          <label className="landingPage-lrMakeLogin">
            Faça login ou cadastre-se aqui
          </label>
          <button
            onClick={() => navigate("/login")}
            className="ladingPage-defaultButton"
          >
            Entrar
          </button>
          <button
            onClick={() => navigate("/register-customer")}
            className="ladingPage-defaultButton"
          >
            Cadastrar-se
          </button>
        </div>
        <div className="landingPage-lrMiddleContent"></div>
        <div className="landingPage-lrRightContent">
          <label className="landingPage-lrHeader">
            Deseja utilizar a plataforma como Buffet?
          </label>
          <label className="landingPage-lrMakeLogin">
            Faça login ou cadastre-se aqui
          </label>
          <button
            onClick={() => navigate("/login-business")}
            className="ladingPage-defaultButton"
          >
            Fazer Login
          </button>
          <button
            onClick={() => navigate("/register-company")}
            className="ladingPage-defaultButton"
          >
            Cadastrar-se
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
