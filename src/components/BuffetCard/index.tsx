import "./style.css";
import exampleBuffet from "../../assets/BuffetInfantil.png";
import { Link, useNavigate } from "react-router-dom";

export const BuffetCard = () => {
  return (
    <div className="buffetCard-mainDiv">
      <label className="buffetCard-nameBuffet">Name Buffet</label>
      <img src={exampleBuffet} className="buffetCard-img"></img>
      <label>Zona Norte/SP</label>
      <div></div>
      <label className="buffetCard-labelSeeMore">Saiba mais</label>
    </div>
  );
};

export default BuffetCard;
