import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inwards from './pages/Inwards';
import DashBoard from './components/DashBoard';
import Inventory from './components/Inventory';
import Invoices from './components/Invoices';
import Footer from './Footer';

function App() {
 return(
  <div>
    <img src='/logo.jpg' alt = 'Logo' width='200' />
      <Routes>
        <Route path = '/' element ={<DashBoard />}/>
        <Route path = '/inventory' element ={<Inventory />}/>
        <Route path = '/invoices' element ={<Invoices />}/>
        <Route path = '/inwards' element ={<Inwards />}/>
      </Routes>
      <Footer />
  </div>

 );
}

export default App;
