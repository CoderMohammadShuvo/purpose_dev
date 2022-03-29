import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/firstImg" element={<Product />} />
    </Routes>
  );
}

export default App;
