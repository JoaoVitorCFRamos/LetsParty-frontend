import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../src/assets/Logo.png"
import { CircleComponent } from "../../components/CircleComponent";


const LandingPage = () => {
  const navigate = useNavigate();

  const teste = () => {
    navigate("/register")
  }

  return (
    <div className="landingPage-mainDiv">
      <div className="landingPage-navBar">
        <img src={Logo} className="ladingPage-logo" />
        <div className="landingPage-barMenu">
          <label>O que fazemos?</label>
          <label> Benefícios para clientes</label>
          <label>Benefícios para clientes</label>
          <label>Contato</label>
        </div>
        <div className="landingPage-loginRegisterButtons">
          <label> Fazer Login</label>
          <div>
            <label >  Registrar-se</label>
          </div>
        </div>
      </div>
      <div className="landingPage-aboutUsDiv">
        <div className="ladingPage-aboutUsLeft"></div>
        <div className="ladingPage-aboutUsRight">
          <label className="landingPage-header">O que fazemos?</label>
          <label>Nosso objetivo é reunir Buffets infantis e contratantes de festas infantis dentro da mesma plataforma. <br></br>
            Assim trazendo maior facilidade e flexibilidade para ambas as partes.
          </label>
          <h3>Sentiu-se incluido? Entre em nossa plataforma para descobrir mais!</h3>
          <button className="ladingPage-defaultButton">Registrar-se</button>
          <label>O lugar perfieto para fechamento de festas infantis é conosco!</label>
        </div>
      </div>
      <div className="landingPage-phrase">
        <label>Aqui a sua festa dos sonhos acontece </label>
        <label> Let's Party!!</label>
      </div>
      <div className="landingPage-benefitsDiv">
        <div className="landingPage-customerBenefits">
          <label className="landingPage-customersBenefitsHeader">Benefícios para clientes</label>
          <div className="landindingPage-customersBenefitsContent">
            <CircleComponent title="Customize seu cardápio"><div className="landingPage-circleCard1" /></CircleComponent>
            <CircleComponent title="Orçe de casa no horário que quiser"><div className="landingPage-circleCard2" /></CircleComponent>
            <CircleComponent title="Diversas formas de pagamento"><div className="landingPage-circleCard3" /></CircleComponent>
          </div>
        </div>
        <div className="landingPage-companyBenefits">
          <label className="landingPage-companyBenefitsHeader">Benefícios para Estabelecimentos</label>
          <div className="landindingPage-companyBenefitsContent">
            <CircleComponent title="Customize seu cardápio"><div className="landingPage-circleCard4" /></CircleComponent>
            <CircleComponent title="Orçe de casa no horário que quiser"><div className="landingPage-circleCard5" /></CircleComponent>
            <CircleComponent title="Diversas formas de pagamento"><div className="landingPage-circleCard6" /></CircleComponent>
          </div>
        </div>
      </div>
      <div className="landingPage-loginAndRegister">
        <div className="landingPage-lrLeftContent">
          <label className="landingPage-lrHeader">Deseja utilizar a plataforma como cliente?</label>
          <label className="landingPage-lrMakeLogin">Faça login ou cadastre-se aqui</label>
          <button onClick={() => navigate("/login")} className="ladingPage-defaultButton">Entrar</button>
          <button onClick={() => navigate("/register")} className="ladingPage-defaultButton">Registrar-se</button>

        </div>
        <div className="landingPage-lrMiddleContent"></div>
        <div className="landingPage-lrRightContent">
          <label className="landingPage-lrHeader">Deseja utilizar a plataforma como cliente?</label>
          <label className="landingPage-lrMakeLogin">Faça login ou cadastre-se aqui</label>
          <button onClick={() => navigate("/login-business")} className="ladingPage-defaultButton">Entrar</button>

          <button onClick={() => navigate("/register")} className="ladingPage-defaultButton">Registrar-se</button>


          {/* <Link to="/register">
          </Link> */}
        </div>
      </div>


    </div>
  );
};

export default LandingPage;
