import "./style.css";
import { Link } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import { BsHouseFill } from "react-icons/bs";
import { BsFillChatSquareFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import api from "../../services/api";
import { useEffect, useState } from "react";
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
          <label>Lets Party</label>
        </div>
        <label className="sideBarCompanies-labelName"></label>
        <label>{email}</label>
        <div className="sideBarCompanies-divOptions">
          <Link className="sideBarCompanies-links" to="/dashboard">
            <div>
              <BsHouseFill color="#F24E1E" size={23} />
              <label>Meu Buffet</label>
            </div>
          </Link>
          <Link className="sideBarCompanies-links" to="/chats">
            <div>
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
