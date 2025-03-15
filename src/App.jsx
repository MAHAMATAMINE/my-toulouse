import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PlaceDetails from "./components/PlaceDetails";
import AddPlace from "./components/AddPlace";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places/:id" element={<PlaceDetails/>} />
        <Route path="/add" element={<AddPlace />} />
      </Routes>
    </Router>
  );
}

export default App;
