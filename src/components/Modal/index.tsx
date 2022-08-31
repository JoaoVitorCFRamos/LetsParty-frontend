import "./style.css";

export const Modal = (/*onClose = () => {}, props:any*/) => {
  //const { children } = props;
  return (
    <div className="modal-modal">
      <div className="modal-mainDiv">
        <div className="modal-content"> </div>
        <button className="modal-closeButton" /*onClick={() => onClose()}*/>
          Finalizar
        </button>
      </div>
    </div>
  );
};
export default Modal;

//https://www.youtube.com/watch?v=xDVjbp8l96M
