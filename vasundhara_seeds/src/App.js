import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Inwards from './pages/Inwards';
import DashBoard from './components/DashBoard';
import Inventory from './components/Inventory';
import Invoices from './components/Invoices';
import Footer from './components/Footer';
import readExcel from './utils/utils.js'
import { useEffect, useState } from 'react';
import './styles.css'
import LabourData from './components/LabourData.js';
import AnimatedCalculation from './components/animate.js';
import Home from './components/Home.js';
import MainPage from './components/MainPage.js';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import Infrastructure from './components/Infrastructure.js';
import Breadcrumb from './components/BreadCrumbs.js';
import ScrollToTop from './utils/scrollToTop.js';
import ContactUs from './components/Contact.js';
import Products from './components/products.js';


function App() {
  // const [data, setData]=useState([]);
  // const [filteredData, setFilteredData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const jsonData = await readExcel(); // Wait for the data to be read
  //     // console.log('App data',jsonData)

  //     setData(jsonData); // Set the data
  //     const interval = setInterval(readExcel, 5 * 60* 60 * 1000); // 5 hour interval
  //    return () => clearInterval(interval); // Clean up interval on component unmount
  //   };
  
  //   fetchData();
  // }, []);

 return(
  <div>
    <BrowserRouter basename={process.env.PUBLIC_URL || "/"}>
    <ScrollToTop/>
    <Navbar/>
    <div className="content">

       <Routes>
        <Route path ='/about' element = {<About/>}></Route>
        <Route path = '/' element ={<Home/>}></Route>
        <Route path = '/home' element ={<Home/>}></Route>
        <Route path = '/infrastructure' element ={<Infrastructure/>}></Route>
        <Route path = '/contact' element ={<ContactUs/>}></Route>
        <Route path = '/products' element ={<Products/>}></Route>

      </Routes>
      </div>
      <Footer />
      </BrowserRouter>
      
  </div>

 );
}

export default App;
