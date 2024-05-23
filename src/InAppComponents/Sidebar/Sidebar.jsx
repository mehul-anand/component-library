import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <aside className="aside">
      <ul>
        <li>
          <Link to="/avatar">Avatar</Link>
        </li>
        <li>
          <Link to="/alert">Alert</Link>
        </li>
        <li>
          <Link to="/badge">Badge</Link>
        </li>
        <li>
          <Link to="/button">Button</Link>
        </li>
        <li>
          <Link to="/card">Card</Link>
        </li>
        <li>
          <Link to="/heading">Heading</Link>
        </li>
        <li>
          <Link to="/text">Text</Link>
        </li>
        <li>
          <Link to="/image">Image</Link>
        </li>
      </ul>
    </aside>
  );
};
export default SideBar;
