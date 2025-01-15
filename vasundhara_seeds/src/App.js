import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inwards from './pages/Inwards'

function App() {
 return(
  <div>
    <img src='/logo.jpg' alt = 'Logo' width='150' />
    <Navbar />
      <Routes>
        <Route path = '/inwards' element ={<Inwards />}/>
      </Routes>
  </div>

 );
}

export default App;
