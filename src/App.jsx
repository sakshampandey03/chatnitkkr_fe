
import './App.css'
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/chat' element= {<Home />}/>
      </Routes>
  
    </BrowserRouter>

  );
}
