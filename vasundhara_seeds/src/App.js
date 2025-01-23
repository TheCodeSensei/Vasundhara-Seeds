import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Inwards from './pages/Inwards';
import DashBoard from './components/DashBoard';
import Inventory from './components/Inventory';
import Invoices from './components/Invoices';
import Footer from './components/Footer';
import readExcel from './utils/utils.js'
import { useEffect, useState } from 'react';

function App() {
  const [data, setData]=useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const jsonData = await readExcel(); // Wait for the data to be read
      console.log('App data',jsonData)

      setData(jsonData); // Set the data
      // setFilteredData(jsonData); // Initialize filtered data with full data set
      const interval = setInterval(readExcel, 5 * 60* 60 * 1000); // 5 hour interval
     return () => clearInterval(interval); // Clean up interval on component unmount
    };
  
    fetchData();
  }, []);

 return(
  <div>
    {/* <img src={process.env.PUBLIC_URL + '/logo.jpg'} alt = 'Logo' width='200' /> */}
    {/* <Router basename="/Vasundhara-Seeds"> */}
    <BrowserRouter basename={process.env.PUBLIC_URL || "/"}>
    {/* <Router> */}
      <Routes>
        <Route path = '/' element ={<DashBoard />}/>
        <Route path = '/inventory' element ={<Inventory />}/>
        <Route path = '/invoices' element ={<Invoices />}/>
        <Route
          path='/inwards'
          element={data.length > 0 ? <Inwards data={data} /> : <p>Loading...</p>}
        />        </Routes>
      {/* </Router> */}
      </BrowserRouter>
      <Footer />
  </div>

 );
}

export default App;
