import "./cards.css";
const CardOverlay = ({ data }) => {
  return (
    <figure className="figure">
      <img className="blur" src={data.src} alt="about" />
      <figcaption className="overlay">
        <h2>Primary Title</h2>
        <p>Secondary Title</p>
      </figcaption>
    </figure>
  );
};
export default CardOverlay;
