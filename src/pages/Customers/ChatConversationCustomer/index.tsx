import "./style.css"
import { RiSendPlaneFill } from 'react-icons/ri';

export const ChatConversationCustomer = () => {
    return (
        <div className="chatConversartion-mainDiv">
            <div className="chatConversation-buffetName">
                <label>Buffet Name</label>
            </div>
            <div className="chatConversation-messages">
                <div className="chatConversation-messageComponent">
                    <label className="chatConversation-nameMessage">Nome de quem mando a msg</label>
                    <label className="chatConversation-messageContent">Mensagem enviada</label>
                </div>
            </div>
            <div className="chatConversation-SendMessageDiv">
                <input type="text" placeholder="Escreva sua mensagem" />
                <div className="chatConversation-iconSend">
                    <RiSendPlaneFill size={19} />
                </div>
            </div>
        </div>
    )
};

export default ChatConversationCustomer;