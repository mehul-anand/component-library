import "./cards.css";
const CardText = ({ data }) => {
  return (
    <figure className="figure">
      <figcaption className="figCaption">
        <h1>Title of Topic</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, omnis qui
          eius pariatur dolor expedita esse quasi laboriosam maxime, corporis
          delectus. Voluptates numquam odio provident delectus excepturi
          accusamus debitis cumque.
        </p>
      </figcaption>
    </figure>
  );
};
export default CardText;
