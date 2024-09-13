import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './Components/Landingpage';
import Navbar from './Components/Navbar';
import About from './Components/About'
import Services from './Components/Services';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import OffcanvasExample from './Components/Nav-bar';
function App() {
  return (
    
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path='/about' element = {<About/>}/>
          <Route path='/Service' element = {<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
