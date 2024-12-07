import './App.css';
import NavBar from "./Sections/Home/NavBar"
import Home from "./Sections/Home/Home"
import About from "./Sections/About/About"
import History from "./Sections/History/History"
import Projects from './Sections/Project/Projects';
import Contact from "./Sections/Contact/Contact"
import Clients from "./Sections/Clients/Clients"
import Footer from './Sections/Footer/Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Products from './Sections/Products/Products';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
