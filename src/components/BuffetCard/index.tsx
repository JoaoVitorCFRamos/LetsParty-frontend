import "./style.css";
import exampleBuffet from "../../assets/BuffetInfantil.png";
import { Link } from "react-router-dom";

type Props = {
  id: string;
  name: string;
  city: string;
  thumbnail: string | null;
  neighborhood: string;
};

export const BuffetCard = (props: Props) => {
  return (
    <div className="buffetCard-mainDiv">
      <label className="buffetCard-nameBuffet">{props.name}</label>
      <img
        src={(props.thumbnail && props.thumbnail) || exampleBuffet}
        className="buffetCard-img"
      ></img>
      <label>{`${props.neighborhood} - ${props.city}`}</label>
      <div></div>
      <Link to={`/buffet/${props.id}`} className="buffetCard-link">
        <label className="buffetCard-labelSeeMore">Saiba mais</label>
      </Link>
    </div>
  );
};

export default BuffetCard;
