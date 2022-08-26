import "./style.css";
import BuffetCard from "../../../components/BuffetCard";

const Favorites = () => {
  return (
    <>
      <div className="favorites-divHigher">
        <label>Seus Buffets favoritos</label>
      </div>
      <div className="favorites-divBottom">
        <BuffetCard />
        <BuffetCard />
        <BuffetCard />
        <BuffetCard />
        <BuffetCard />
        <BuffetCard />
      </div>
    </>
  );
};

export default Favorites;
