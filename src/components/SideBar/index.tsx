import { useAuth } from "../../contexts/AuthContext";

//Pages
import "./style.css";

//icons
import { FaPowerOff } from "react-icons/fa";
import { BsHouseFill } from "react-icons/bs";
import { BsFillChatSquareFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";





export const SideBar = () => {
    const { signOut } = useAuth();

    function handleSignOut() {
        signOut();
    }

    return (
        <div className="sideBar-mainDiv">
            <div className="sideBar-divMenu">
                <div>
                    <label>Lets Party</label>
                </div>
                <label className="sideBar-labelName">José da Silva</label>
                <div className="sideBar-divOptions">
                    <div>
                        <BsHouseFill color="#F24E1E" size={23} />
                        <label>Buffets</label>
                    </div>
                    <div>
                        <MdFavorite color="#F21E1E" size={23} />
                        <label>Favoritos</label>
                    </div>
                    <div>
                        <BsFillChatSquareFill color="#0071BE" size={23} />
                        <label>Chat</label>
                    </div>
                </div>
            </div>
            <div onClick={handleSignOut} className="sideBar-divLogOut">
                <FaPowerOff />
                <label >Logout</label>
            </div>
        </div>
    );
}

export default SideBar;