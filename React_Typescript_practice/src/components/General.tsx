interface Btn {
  text: string;
  onClick: () => void;
}

const ClickaButton: React.FC<Btn> = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};
export default ClickaButton;
