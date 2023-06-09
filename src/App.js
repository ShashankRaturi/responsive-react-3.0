import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/about' exact element = {<About/>} />
            <Route path='/menu' exact element={<Menu/>} />
            <Route path='/contact' exact element = {<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
