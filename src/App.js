import Navbar from "./components/navbar/Navbar";
import Services from './components/Services/Services.jsx'
import './App.css'
import Intro from "./components/intro/Intro";
import Works from './components/Works/Works.jsx'
import Contact from './components/Contact/Contact'
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";
function App() {
  return (
    <div className="App">
     <Navbar/> 
     <Intro/>
     <Services/>
     <Portfolio/>
     <Works/>
     <Contact/>
     <Footer/>
       
    </div>
  );
}

export default App;
