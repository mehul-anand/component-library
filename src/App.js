import "./styles.css";
import { Route, Routes } from "react-router-dom";

import DocLayout from "./InAppComponents/DocLayout/DocLayout";
import Home from "./pages/Home/Home";
import Components from "./pages/Components/Components";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="*" element={<DocLayout />} />
      </Routes>
    </div>
  );
}
