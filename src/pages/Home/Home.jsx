import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <h1>Component Library</h1>
      <Link to="/components">Get Started</Link>
    </div>
  );
};
export default Home;
