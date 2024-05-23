import "./Image.css";
const Image = ({ src, alt, round }) => {
  return <img src={src} alt={alt} className={round ? `round` : `image`} />;
};
export default Image;
