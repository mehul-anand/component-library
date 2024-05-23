import "./Buttons.css";
const FloatingButton = ({ tag }) => {
  return (
    <button className={`${tag}Float floatingButton`}>
      <span className="material-symbols-outlined">{tag}</span>
    </button>
  );
};
export default FloatingButton;
