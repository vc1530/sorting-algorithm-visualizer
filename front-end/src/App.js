import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Home from './components/Home'
import About from './components//About' 
import Contact from './components//Contact'

const App = props => {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} /> 
        <Route path="/Contact" element={<Contact />} /> 
      </Routes>
    </Router>
  );
}

export default App;
