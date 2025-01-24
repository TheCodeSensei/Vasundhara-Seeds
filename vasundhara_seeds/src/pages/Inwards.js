import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import Summary from '../components/Inward_Summary';
import Navbar from '../components/Navbar';
import '../styles.css'
import readExcel from '../utils/utils';
const Inwards = (props) => {
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({}); // State to track selected filters for each column
  const [loading, setLoading]=useState(false);
  const [data, setLocalData] = useState(props.data); // Store data in state

  useEffect(() => {
    setLocalData(props.data); // Update localData when props.data changes
    setFilteredData(props.data)
  }, [props.data]); // Runs when props.data changes
console.log('inward data', data)

  const filterable_columns =['DateTime In','Material Name','Supplier Name']
  const display_Columns = ['SNO','SLIPNO','DateTime In','Net Wt','Material Name','Supplier Name','Bags','Wgt-Bag','NET WEIGHT', 'GRADED BAGS', 'GRADED QUANTITY','GRADED LOOSE']
  async function reloadinward(){

    try {
      setLoading(true)
      const res = await fetch("https://script.google.com/macros/s/AKfycbwIMN-AoiOotknbFiDar4zlVcjmw8szhXBG2lMyqbDwoJgj2-TFMp27Ldd2qU73wymXRA/exec");
      if (!res.ok) {
        throw new Error("Error fetching from Apps Script");
      }
      readExcel();
    } catch (error) {
      console.error("Error:", error);
    }finally{
       setLoading(false);
       console.log('app script called');

    }
  }

  const handleFilterChange = (column, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters, [column]: value };

      const filtered = data.filter((row) =>
        Object.entries(updatedFilters).every(
          ([key, filterValue]) => {
            if (key ==='DateTime In'){
              return filterValue === '' || row[key].split(' ')[0] === filterValue

            }
            else{    

              return filterValue === '' || row[key] === filterValue}}
        
        )
      );
      setFilteredData(filtered);
      return updatedFilters; // Update the filters state
    });
  };
  

  // Function to get unique values for a column
  const getUniqueValues = (column) => {
    return [...new Set(filteredData.map((row) => row[column]))];
  };

  const getUniqueDate = ()=>{
    const UniqueDates = new Set(
        filteredData.map((row)=>row['DateTime In'].split(' ')[0])
    )
    return Array.from(UniqueDates)
  };
 
  function reset_filters(){

    setFilters({});
    setFilteredData(data);
    
  }
  
  function calculate_summary(){

    const NetWeight_sum = filteredData.reduce((acc, row) => {
      const value = parseFloat(row['NET WEIGHT']) || 0; // Parse values as numbers, default to 0 if NaN
      return acc + value;
    }, 0).toFixed(2);

    const BagWeight_sum = filteredData.reduce((acc, row) => {
      const value = parseFloat(row['Wgt-Bag']) || 0; // Parse values as numbers, default to 0 if NaN
      return acc + value;
    }, 0).toFixed(2);

    const GradedBags_sum = filteredData.reduce((acc, row) => {
      const value = parseFloat(row['GRADED BAGS']) || 0; // Parse values as numbers, default to 0 if NaN
      return acc + value;
    }, 0);

    const PackedBags_sum = filteredData.reduce((acc, row) => {
      const value = parseFloat(row['NO OF BAGS']) || 0; // Parse values as numbers, default to 0 if NaN
      return acc + value;
    }, 0);

    const PackedQuantity_sum = filteredData.reduce((acc, row) => {
      const value = parseFloat(row['Packed quantity']) || 0; // Parse values as numbers, default to 0 if NaN
      return acc + value;
    }, 0);

    const gradedquantity = filteredData.reduce((acc, row) => {
      const value = parseFloat(row['GRADED QUANTITY']) || 0; // Parse values as numbers, default to 0 if NaN
      return acc + value;
    }, 0);

    const gradedLoose = filteredData.reduce((acc, row) => {
      const value = parseFloat(row['GRADED LOOSE']) || 0; // Parse values as numbers, default to 0 if NaN
      return acc + value;
    }, 0);
    // console.log(gradedLoose)


    return [NetWeight_sum, BagWeight_sum,GradedBags_sum, PackedBags_sum, PackedQuantity_sum, (gradedquantity+gradedLoose).toFixed(2)];
  };

  return (
    
    <div>
      <Navbar/>
      {loading? 
        <div className='loader-container'><div className='loader'></div></div>
:
        <div style={styles.container}>
      {/* Render filters for Date, Material Name, Supplier Name */}
      <div style={styles.filterContainer}>
      {data.length > 0 &&
        filterable_columns.map((key) => (
            <div key={key} style={styles.filter} class="relative overflow-auto">
                <form class="max-w-sm">
        <label htmlFor={key} class="block mb-2 text-sm font-medium text-gray-900 dark:text-black relative overflow-auto">{key}</label>
        <select id={key} value={filters[key] || ''}
                onChange={(e) => handleFilterChange(key, e.target.value)}
        >
        <option value="">All</option>
          {(key==="DateTime In")?getUniqueDate().map((date)=>(<option key={date} value = {date}>{date}</option>)):        
          getUniqueValues(key).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>))}
        </select>
</form>
            </div>

        ))}
      <button onClick={reset_filters} type="button"><img src = {process.env.PUBLIC_URL + "/reset.png"}/>Reset</button>
      <button type="button" onClick={reloadinward}><img src ={process.env.PUBLIC_URL + "/tap.png"}/> Reload Inward Data</button><br></br>
      </div>

      {/* Display filtered data */}
      <div className='tableContainer'>
        {filteredData.length === 0 ? (
          <p>No match found</p>
        ) : (
            <table style={styles.table}>
            <thead class="text-xs text-gray-500 uppercase bg-gray-80 dark:bg-gray-900 dark:text-gray-200">
            <tr>
                {(display_Columns).map((key) => (
                <th key={key} style={{...styles.cell, position:'sticky', top:0, backgroundColor:"#000", zIndex:10,}}>
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr key={index} style={styles.cell}>
                  {Object.entries(row)
                    .filter(([key]) => display_Columns.includes(key))
                    .map(([key, value], i) => (
                    <td key={i} style={styles.cell}>
                        {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/* Summary component */}
      <div>
        <Summary summary={calculate_summary}/>
      </div>
      </div>
    }
</div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
  },
  filterContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '10px',
    marginleft:'10px',
  },
  filter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap:'50px',
  },
  select: {
    padding: '5px',
    fontSize: '14px',
  },
  tableContainer: {
    marginLeft: '5px',
    overflowX: 'auto',
    overflowY: 'auto',
    maxHeight: '500px', // Adjust this to control vertical scroll area
    maxWidth: '100%', // Ensures the table doesn't exceed the container width
    border: '1px solid #ccc', // Optional: adds a border to the container
  },
  table: {
    tableLayout: 'auto',
    width: '100%', // Makes the table span the container width
    borderCollapse: 'collapse',
  },
  cell: {
    whiteSpace: 'nowrap',
    padding: '8px',
    textAlign: 'left',
    border: '1px solid #ccc',
    position: 'fixed',
  },
  cell: {
    whiteSpace: 'nowrap',
    padding: '8px',
    textAlign: 'left',
    border: '1px solid #ccc',
  },
  header: {
    position: 'sticky',
    top: 0,
    padding: '10px 16px',
    background: '#555',
    color: '#f1f1f1',
  }
};

export default Inwards;

// export default function inwards(){

//   return(
//     <div></div>
//   )
// };