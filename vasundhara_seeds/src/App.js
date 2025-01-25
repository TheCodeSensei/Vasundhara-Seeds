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

function App() {
  const [data, setData]=useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const jsonData = await readExcel(); // Wait for the data to be read
      // console.log('App data',jsonData)

      setData(jsonData); // Set the data
      const interval = setInterval(readExcel, 5 * 60* 60 * 1000); // 5 hour interval
     return () => clearInterval(interval); // Clean up interval on component unmount
    };
  
    fetchData();
  }, []);

 return(
  <div>
    <BrowserRouter basename={process.env.PUBLIC_URL || "/"}>
    {/* <Router> */}
      <Routes>
        <Route path = '/' element={data.length > 0 ? <Inwards data={data} /> : <div className='loader-container'><div className='loader'></div></div>}/>
        <Route path ='/labourdata' element = {<LabourData/>}></Route>
        <Route path = '/inventory' element ={<Inventory />}/>
        <Route path = '/invoices' element ={<Invoices />}/>
        <Route path='/Dashboard' element={<DashBoard/>}/>   
      </Routes>
      {/* </Router> */}
      </BrowserRouter>
      <Footer />
  </div>

 );
}

export default App;
