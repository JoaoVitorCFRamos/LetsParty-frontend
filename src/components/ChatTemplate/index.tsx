import "./style.css";
import { FC } from "react";
import { format, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";

interface ChatTemplateProps {
  id: string;
  name: string;
  lastMessage?: string | null;
  read?: boolean;
  readingUserId?: string;
  owner?: string;
  sentAt?: Date;
  onClick: () => void;
}

const ChatTemplate: FC<ChatTemplateProps> = (props) => {
  const { id, name, lastMessage, owner, read, readingUserId, sentAt, onClick } =
    props;

  return (
    <div className="chatTemplate-mainDiv" onClick={onClick}>
      <div className="chatTemplate-logoCompany"></div>
      <div className="chatTemplate-nameAndMessage">
        <label className="chatTemplate-nameCompany">{name}</label>
        {read ? (
          <>
            <p className="chatTemplate-lastMessage">{lastMessage}</p>
            <p>{sentAt && format(parseISO(sentAt.toString()), "h:mm a")}</p>
          </>
        ) : owner !== readingUserId ? (
          <>
            {/* TODO - Arrumar CSS do ponto de nova mensagem e horário */}
            <p className="chatTemplate-lastMessage-not-read">{lastMessage}</p>
            <p>{sentAt && format(parseISO(sentAt.toString()), "h:mm a")}</p>
          </>
        ) : (
          <>
            <p className="chatTemplate-lastMessage">{lastMessage}</p>
            <p>{sentAt && format(parseISO(sentAt.toString()), "h:mm a")}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatTemplate;
