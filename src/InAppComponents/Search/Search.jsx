import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Search.css";
const Search = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = () => {
    if (
      [
        "avatar",
        "alert",
        "badge",
        "button",
        "card",
        "heading",
        "text",
        "image"
      ].some(el => el === searchInput.toLowerCase())
    ) {
      navigate(`/${searchInput}`);
      setSearchInput("");
    } else {
      alert("No component found.");
    }
  };
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <nav className="nav">
      <h1>Components</h1>
      <div className="input">
        <input
          type="text"
          value={searchInput}
          placeholder="Search Component..."
          onChange={e => setSearchInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/components">Components</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Search;
