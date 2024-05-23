import "./Alert.css";
const Alert = ({ type, info }) => {
  return (
    <div className={`alert ${type}`}>
      <span className="material-symbols-outlined">{type}</span>
      <strong>{info}</strong>
    </div>
  );
};
export default Alert;
