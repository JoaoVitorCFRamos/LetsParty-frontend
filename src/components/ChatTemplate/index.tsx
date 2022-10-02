import "./style.css";
import { FC } from "react";
import { format, parseISO } from "date-fns";

interface ChatTemplateProps {
  name: string;
  lastMessage?: string | null;
  read?: boolean;
  readingUserId?: string;
  owner?: string;
  sentAt?: Date;
}

const ChatTemplate: FC<ChatTemplateProps> = (props) => {
  const { name, lastMessage, owner, read, readingUserId, sentAt } = props;

  return (
    <div className="chatTemplate-mainDiv">
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
            <div className="chatTemplate-dot"></div>
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
