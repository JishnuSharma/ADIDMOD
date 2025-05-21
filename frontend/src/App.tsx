import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/shared/Navbar';
import Landing from './pages/Landing';
import Footer from './components/shared/Footer';
import About from './pages/About';
import Authentication from './pages/Authentication';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/get-started' element={<Authentication />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;