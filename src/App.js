import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Barra from './components/Barra';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacto from "./components/Contacto";
import Home from "./views/Home";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Barra></Barra>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Contacto' element={<Contacto />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
