import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import "./App.css";
import Projects from "./Components/Projects";
import Connect from "./Components/Connect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Connect" element={<Connect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
