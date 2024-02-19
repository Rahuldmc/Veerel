import './App.css';
import About from './Components/About';
import Clients from './Components/Clients';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import History from './Components/History';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={[<NavBar/>,<Home/>]}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/history" element={<History/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        {/* <Route path="/clients" element={<Clients/>}></Route> */}
        <Route path="/conatact" element={<Contact/>}></Route>
      </Routes>
      <About/>
      <History/>
      <Projects/>
      <Clients/>
      <Contact/>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
