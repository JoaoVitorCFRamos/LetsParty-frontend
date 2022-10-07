import "./style.css";
import { Link } from "react-router-dom";
import { FaPaintBrush, FaPowerOff } from "react-icons/fa";
import { BsHouseFill } from "react-icons/bs";
import { BsFillChatSquareFill } from "react-icons/bs";

import LogoLp from "../../assets/Logo.png";

import { FaMoneyBillWave } from "react-icons/fa";



import { useAuth } from "../../hooks/useAuth";

type Props = {
  email: string;
};

const SideBarCompanies = ({ email }: Props) => {
  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="sideBarCompanies-mainDiv">
      <div className="sideBarCompanies-divMenu">
        <div className="sideBarCompanies-divLogo">
          <img className="sideBar-imgLogo" src={LogoLp} />
        </div>
        <label className="sideBarCompanies-labelName">{email}</label>
        <div className="sideBarCompanies-divOptions">
          <Link className="sideBarCompanies-links" to="/dashboard">
            <div className="sideBarCompanies-divLinkMenu">
              <BsHouseFill color="#F24E1E" size={23} />
              <label>Meu Buffet</label>
            </div>
          </Link>
          <Link className="sideBarCompanies-links" to="/budgets">
            <div className="sideBarCompanies-divLinkMenu">
              <FaMoneyBillWave color="#0FA958" size={23} />
              <label>Festas</label>
            </div>
          </Link>
          <Link className="sideBarCompanies-links" to="/personalization">
            <div className="sideBarCompanies-divLinkMenu">
              <FaPaintBrush color="#FF0000" size={23} />
              <label>Personalização</label>
            </div>
          </Link>
          <Link className="sideBarCompanies-links" to="/chats">
            <div className="sideBarCompanies-divLinkMenu">
              <BsFillChatSquareFill color="#0071BE" size={23} />
              <label>Chat</label>
            </div>
          </Link>
        </div>
      </div>
      <div onClick={handleSignOut} className="sideBarCompanies-divLogOut">
        <FaPowerOff />
        <label>Logout</label>
      </div>
    </div>
  );
};

export default SideBarCompanies;
