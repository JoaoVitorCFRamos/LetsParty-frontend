import ChatTemplate from "../../../components/ChatTemplate";
import "./style.css";

export const ChatCompany = () => {
  return (
    <div className="chatCompany-content">
      <label className="chatCompany-header">Orçamentos recebidos</label>
      <div className="chatCompany-chats">
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
  );
};
export default ChatCompany;
