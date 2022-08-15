import SideBar from "../../../components/SideBar";
import "./style.css";

export const ChatCustomer = () => {
  return (
    <div className="chatCustomer-mainDiv">
      <div className="chatCustomer-sideBar">
        <SideBar></SideBar>
      </div>
      <div className="chatCustomer-content">
        <h1>teste</h1>
      </div>
    </div>
  );
};

export default ChatCustomer;
