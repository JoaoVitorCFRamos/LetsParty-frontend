import { useAuth } from "../../contexts/AuthContext";

//Pages
import "./style.css";

//icons
import { FaPowerOff } from "react-icons/fa";
import { BsHouseFill } from "react-icons/bs";
import { BsFillChatSquareFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { useEffect, useState } from "react";
import axios from "axios";

export const SideBar = () => {
  const [customer, setCustomer] = useState({});

  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  const getCustomer = () => {
    api.get("/customers/me").then((response) => {
      setCustomer(response.data);
    });
  };

  useEffect(() => {
    getCustomer();
  }, []);

  console.log(customer);

  return (
    <div className="sideBar-mainDiv">
      <div className="sideBar-divMenu">
        <div className="sideBar-divLogo">
          <label>Lets Party</label>
        </div>

        <label className="sideBar-labelName">José da silva</label>
        <div className="sideBar-divOptions">
          <Link className="sideBar-links" to="/platform">
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
