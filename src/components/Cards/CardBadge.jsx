import "./cards.css";
const CardBadge = ({ data }) => {
  return (
    <figure className="figure">
      <img src={data.src} alt="about" />
      <span className="cardBadge">{data.tag}</span>
      <span className="material-symbols-outlined cardIcon">favorite</span>
      <figcaption className="figCaption">
        <h1>{data.title}</h1>
        <h2>{data.about}</h2>
        <p>rating {data.rating}</p>
        <h4>₹ {data.price}</h4>
        <div className="cardUtils">
          <button className="cardButton">add to cart</button>
        </div>
      </figcaption>
    </figure>
  );
};
export default CardBadge;
