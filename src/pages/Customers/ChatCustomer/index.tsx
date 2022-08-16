import ChatTemplate from "../../../components/ChatTemplate";
import SideBar from "../../../components/SideBar";
import "./style.css";

export const ChatCustomer = () => {
  return (
    <div className="chatCustomer-mainDiv">
      <div className="chatCustomer-sideBar">
        <SideBar></SideBar>
      </div>
      <div className="chatCustomer-content">
        <label className="chatCustomer-header">
          Suas conversas com Buffets
        </label>
        <div className="chatCustomer-chats">
          <ChatTemplate />
          <ChatTemplate />
          <ChatTemplate />
          <ChatTemplate />
          <ChatTemplate />
          <ChatTemplate />
          <ChatTemplate />
          <ChatTemplate />
          <ChatTemplate />
        </div>
      </div>
    </div>
  );
};

export default ChatCustomer;
