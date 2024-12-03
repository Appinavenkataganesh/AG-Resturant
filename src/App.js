import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import Table from "./Components/Table";
import Register from "./Components/Register";
import Login from './Components/Login';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/menu" element={<Menu />} ></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/table" element={<Table />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/nav" element={<Navbar />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
