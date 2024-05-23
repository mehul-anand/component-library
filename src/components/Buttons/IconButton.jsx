import "./Buttons.css";
const IconButton = ({ tag, text }) => {
  return (
    <button className={`${tag}Icon iconButton`}>
      <span className="material-symbols-outlined">{tag}</span> {text}
    </button>
  );
};
export default IconButton;
