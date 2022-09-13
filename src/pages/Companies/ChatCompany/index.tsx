import ChatTemplate from "../../../components/ChatTemplate";
import "./style.css";

export const ChatCompany = () => {
  return (
    <div className="chatCompany-content">
      <label className="chatCompany-header">Orçamentos recebidos</label>
      <div className="chatCompany-chats">
        <ChatTemplate
          name={"Name User"}
          lastMessage={
            " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dasdsadasdsadads"
          }
        />
        <ChatTemplate
          name={"Name User"}
          lastMessage={
            " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dasdsadasdsadads"
          }
        />
        <ChatTemplate
          name={"Name User"}
          lastMessage={
            " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dasdsadasdsadads"
          }
        />
        <ChatTemplate
          name={"Name User"}
          lastMessage={
            " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dasdsadasdsadads"
          }
        />
        <ChatTemplate
          name={"Name User"}
          lastMessage={
            " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dasdsadasdsadads"
          }
        />
      </div>
    </div>
  );
};
export default ChatCompany;
