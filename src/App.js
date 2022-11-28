import Homepage from './Home/index'
import About from './Componentes/Canvas/About/Index'
import NavBar from './Componentes/Navbar/index'
import { Route, BrowserRouter, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
