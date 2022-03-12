import "./sass/main.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Msgs from "./components/msgs/Msgs";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/msgs" element={<Msgs />} />
    </Routes>
  );
}
