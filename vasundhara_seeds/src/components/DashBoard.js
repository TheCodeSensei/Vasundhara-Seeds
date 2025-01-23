// import React from "react";
// import Navbar from "./Navbar";

// export default function DashBoard(){

//     return(
// <div>
//     <Navbar/>
//     <title>Vasundhara Seeds</title>
//     <h1 style = {{margin:'200px', font:'status-bar'}}>TODO- Add charts, Sales Data, Revenue Data, Customer and Suppliers Details</h1>
    

// </div>
//     )
// };

import React from 'react';
import BarChart from './BarChart';
import Navbar from "./Navbar";

const Dashboard = () => {
  return (

    <div style={{ padding: '20px' }}>
            <Navbar />
      <div style={{ width: '600px', margin: '0 auto' }}>
        <BarChart />
      </div>
    </div>
  );
};

export default Dashboard;
