import "./style.css";
import { Link } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import { BsHouseFill } from "react-icons/bs";
import { BsFillChatSquareFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import LogoLp from "../../assets/Logo.png";

type Props = {
  email: string;
};

const SideBar = ({ email }: Props) => {
  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="sideBar-mainDiv">
      <div className="sideBar-divMenu">
        <div className="sideBar-divLogo">
          <img className="sideBar-imgLogo" src={LogoLp} />
        </div>
        <label className="sideBar-labelName">{email}</label>
        <div className="sideBar-divOptions">
          <Link className="sideBar-links" to="/app">
            <div>
              <BsHouseFill color="#F24E1E" size={23} />
              <label>Buffets</label>
            </div>
          </Link>
          <Link className="sideBar-links" to="/favorites">
            <div>
              <MdFavorite color="#F21E1E" size={23} />
              <label>Favoritos</label>
            </div>
          </Link>
          <Link className="sideBar-links" to="/chat">
            <div>
              <BsFillChatSquareFill color="#0071BE" size={23} />
              <label>Chat</label>
            </div>
          </Link>
        </div>
      </div>
      <div onClick={handleSignOut} className="sideBar-divLogOut">
        <FaPowerOff />
        <label>Logout</label>
      </div>
    </div>
  );
};

export default SideBar;
