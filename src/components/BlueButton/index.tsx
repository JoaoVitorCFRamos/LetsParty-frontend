import "./style.css";

interface IBlueButton {
  title: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => any;
}

const BlueButton = (props: IBlueButton) => {
  return (
    <button onClick={props.onClick} className="blueButton-button">
      {props.title}
    </button>
  );
};

export default BlueButton;
