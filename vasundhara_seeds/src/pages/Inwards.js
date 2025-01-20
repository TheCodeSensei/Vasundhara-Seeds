import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import Summary from '../components/Inward_Summary';
import Navbar from '../components/Navbar';

const Inwards = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({}); // State to track selected filters for each column
  // const [activeFilter, setActiveFilter] = React.useState(null); // Track the currently active filter
  const [loading, setLoading]=useState(false);


  const filterable_columns =['DateTime In','Material Name','Supplier Name']
  const display_Columns = ['SNO','SLIPNO','DateTime In','Net Wt','Material Name','Supplier Name','Bags','Wgt-Bag','NET WEIGHT', 'GRADED BAGS', 'GRADED QUANTITY']

  // Function to read data from Excel file
  const readExcel = () => {
    
    const sheetID = '1ZcsM_TUs6kYDeRR_QyrTsWRPviozCdsDykWhELSAWpc'; // Replace with your actual Sheet ID
    const sheetName = 'INWARDDATA'; // Replace with the name of your sheet
    const GOOGLE_API = process.env.REACT_APP_GOOGLE_API_KEY;
    // console.log(GOOGLE_API)
    const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${sheetName}?key=${GOOGLE_API}`;
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const rows = data.values;
        if (rows.length > 0) {
          const headers = rows[2];
          const jsonData = rows.slice(3).map((row) =>
            headers
          .filter(header => display_Columns.includes(header))  // Filter headers based on columnsToKeep
          .reduce((obj, header, index) => {
            const headerIndex = headers.indexOf(header);  // Get the actual index in the original row
            obj[header] = row[headerIndex] || '';  // Assign the value from row (or empty string if missing)
            return obj;
          }, {})
      );
          setData(jsonData);
          setFilteredData(jsonData); // Initialize filtered data with full data set
        }
      })
      .catch((error) => console.error('Error reading Google Sheet:', error));
  };

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

  // Use effect to periodically fetch data every 5 Hours
  useEffect(() => {
    readExcel();
    const interval = setInterval(readExcel, 5 * 60* 60 * 1000); // 5 hour interval
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  const handleFilterChange = (column, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters, [column]: value };
        // If a filter is selected, set it as active
  // if (value) {
  //   setActiveFilter(column);
  // } else {
  //   setActiveFilter(null); // Clear active filter if no value is selected
  // }

  
      // // Filter data based on updated filters
      // if (column === 'DateTime In') {
      //   // Filter data based on selected date
      //   console.log(value)
      //   const filtered = data.filter((row) =>
      //       Object.entries(updatedFilters).every(
      //         ([key, filterValue]) => filterValue === '' || row[key].split(' ')[0] === filterValue
      //       )
      //     );
      //   setFilteredData(filtered);
      // } else {
        // console.log(updatedFilters)
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
    return [...new Set(data.map((row) => row[column]))];
  };

  const getUniqueDate = ()=>{
    const UniqueDates = new Set(
        data.map((row)=>row['DateTime In'].split(' ')[0])
    )
    return Array.from(UniqueDates)
  };
 
  function reset_filters(){

    setFilters({});
    setFilteredData(data);
    
  }
  
  function calculate_summary(){
    const Bags_sum = filteredData.reduce((acc, row) => {
      const value = parseFloat(row['Bags']) || 0; // Parse values as numbers, default to 0 if NaN
      // console.log(acc+value)
      return acc + value;
    }, 0);

    const NetWeight_sum = filteredData.reduce((acc, row) => {
      const value = parseFloat(row['NET WEIGHT']) || 0; // Parse values as numbers, default to 0 if NaN
      // console.log(acc+value)
      return acc + value;
    }, 0);

    const BagWeight_sum = filteredData.reduce((acc, row) => {
      const value = parseFloat(row['Wgt-Bag']) || 0; // Parse values as numbers, default to 0 if NaN
      // console.log(acc+value)
      return acc + value;
    }, 0);

    const GradedBags_sum = filteredData.reduce((acc, row) => {
      const value = parseFloat(row['GRADED BAGS']) || 0; // Parse values as numbers, default to 0 if NaN
      // console.log(acc+value)
      return acc + value;
    }, 0);

// console.log(Bags_sum, NetWeight_sum, BagWeight_sum)
    return [Bags_sum, NetWeight_sum, BagWeight_sum,GradedBags_sum];
  };

  return (
    
    <div>
      <Navbar/>
      {loading? 
              <div role="status">
    <svg aria-hidden="true" class="w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
:
        <div>
    <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">INWARDS</span></h1>

      
      {/* Render filters for Date, Material Name, Supplier Name */}
      <div style={styles.filterContainer}>
      {/* <form class="max-w-sm " margin='0px' >
          <label htmlFor="Date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black relative overflow-auto">Date</label>
          <select id="small" value={filters['DateTime In'] || ''}
  onChange={(e) => handleFilterChange('DateTime In', e.target.value)}
  // disabled={activeFilter && activeFilter !== "DateTime In"} // Disable if another filter is active
class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 relative overflow-auto">
    <option value="">All</option>
    {
    getUniqueDate().map((date) => (
    <option key={date} value={date}>
    {date}</option>))}
          </select>
      </form> */}
      {data.length > 0 &&
        filterable_columns.map((key) => (
            <div key={key} style={styles.filter} class="relative overflow-auto">
                <form class="max-w-sm">
        <label htmlFor={key} class="block mb-2 text-sm font-medium text-gray-900 dark:text-black relative overflow-auto">{key}</label>
        <select id={key} value={filters[key] || ''}
                onChange={(e) => handleFilterChange(key, e.target.value)}
                // disabled={activeFilter && activeFilter !== key} // Disable if another filter is active
        class="block w-auto p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 relative overflow-auto">
        <option value="">All</option>
          {(key==="DateTime In")?getUniqueDate().map((date)=>(<option key={date} value = {date}>{date}</option>)):        
          getUniqueValues(key).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>))}
        </select>
</form>
              {/* <label>{key}</label>
              <select
                value={filters[key] || ''}
                onChange={(e) => handleFilterChange(key, e.target.value)}
                style={styles.select}
              >
                <option value="">All</option>
                {getUniqueValues(key).map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select> */}
            </div>

        ))}
      <button onClick={reset_filters} type="button"><img src = {process.env.PUBLIC_URL + "/reset.png"}/>Reset</button>
      <button type="button" onClick={reloadinward}><img src ={process.env.PUBLIC_URL + "/tap.png"}/> Reload Inward Data</button><br></br>
            {/* <label margin="50%">Reload Inward Data</label> */}
      </div>

      {/* Display filtered data */}
      <div style={styles.tableContainer}>
        {filteredData.length === 0 ? (
          <p>No match found</p>
        ) : (
            <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-500 uppercase bg-gray-80 dark:bg-gray-900 dark:text-gray-200">
            <tr>
                {(display_Columns).map((key) => (
                  <th key={key} class="px-8 py-2">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr key={index} class="bg-white border-b dark:bg-gray-700 dark:border-gray-400">
                  {Object.entries(row)
                    .filter(([key]) => display_Columns.includes(key))
                    .map(([key, value], i) => (
                    <td key={i} class="px-6 py-3">
                        {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        )}
      </div>
      {/* Calculte the summary Fields */}
      {/* <div>{calculate_summary()}</div> */}
      {/* Summary component */}
      <div>
        <br></br>        <br></br>        <br></br>      
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
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    border: '1px solid #ddd',
    padding: '8px',
    backgroundColor: '#f2f2f2',
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
  },
};

export default Inwards;
