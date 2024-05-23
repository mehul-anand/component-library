import { Link } from "react-router-dom";
import "./components.css";
const Components = () => {
  return (
    <>
      <Link to="/" className="homeLink">
        <span className="material-symbols-outlined">Home</span>
      </Link>
      <section className="components">
        <Link className="component" to="/avatar">
          Avatar
        </Link>
        <Link className="component" to="/alert">
          Alert
        </Link>
        <Link className="component" to="/badge">
          Badge
        </Link>
        <Link className="component" to="/button">
          Button
        </Link>
        <Link className="component" to="/card">
          Card
        </Link>
        <Link className="component" to="/heading">
          Heading
        </Link>
        <Link className="component" to="/text">
          Text
        </Link>
        <Link className="component" to="/Image">
          Image
        </Link>
      </section>
    </>
  );
};
export default Components;
