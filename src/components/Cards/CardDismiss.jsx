import "./cards.css";
const CardDismiss = ({ data }) => {
  return (
    <figure className="figure">
      <img src={data.src} alt="about" />
      <span className="material-symbols-outlined cardIcon dismiss">close</span>
      <figcaption className="figCaption">
        <h1>Title of Topic</h1>
        <p>{data.content}</p>
      </figcaption>
    </figure>
  );
};
export default CardDismiss;
