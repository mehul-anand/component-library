import "./cards.css";
const CardResponsive = ({ data }) => {
  return (
    <figure className="figure responsive">
      <div className="responsiveImg">
        <img src={data.src} alt="about" />
      </div>
      <figcaption className="figCaption resposiveFigCap">
        <h1>{data.title}</h1>
        <p>rating {data.rating}</p>
        <h4>₹ {data.price}</h4>
      </figcaption>
    </figure>
  );
};
export default CardResponsive;
