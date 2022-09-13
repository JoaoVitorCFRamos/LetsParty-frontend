import "./style.css";
import react, { useState, FC } from "react";

interface ChatTemplateProps {
  name: String;
  lastMessage: String;
}

const ChatTemplate: FC<ChatTemplateProps> = (props) => {
  const { name, lastMessage } = props;

  return (
    <div className="chatTemplate-mainDiv">
      <div className="chatTemplate-logoCompany"></div>
      <div className="chatTemplate-nameAndMessage">
        <label className="chatTemplate-nameCompany">{name}</label>
        <label className="chatTemplate-lastMessage">{lastMessage}</label>
      </div>
    </div>
  );
};

export default ChatTemplate;
