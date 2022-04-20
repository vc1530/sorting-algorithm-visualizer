import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Home from './Home'
import About from './About' 
import Contact from './Contact'

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
