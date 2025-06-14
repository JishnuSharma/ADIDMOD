import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/shared/Navbar';
import Landing from './pages/Landing';
import Footer from './components/shared/Footer';
import About from './pages/About';
import Authentication from './pages/Authentication';
import Dashboard from './pages/Dashboard';
import MyProfile from './pages/MyProfile';
import ProcessData from './pages/ProcessData';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/get-started' element={<Authentication />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<MyProfile/>}/>
        <Route path='/process-data' element={<ProcessData/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;