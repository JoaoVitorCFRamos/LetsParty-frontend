import "./style.css";

//icons
import { MdFavorite } from "react-icons/md";
import react, { useState, FC } from "react";

interface ModalProps {
  isModalVisible?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

export const Modal: FC<ModalProps> = (props) => {
  const { children, isModalVisible, onClose } = props;

  return (
    <>
      {isModalVisible && (
        <div className="modal-modal">
          <div className="modal-mainDiv">
            {children}
            <button className="modal-closeButton" onClick={onClose}>
              Finalizar
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;

//https://www.youtube.com/watch?v=xDVjbp8l96M
