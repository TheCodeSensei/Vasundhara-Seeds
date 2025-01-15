import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({}); // State to track selected filters for each column
  const filterable_columns =['Material Name','Supplier Name']
  const display_Columns = ['SLIPNO','DateTime In','Net Wt','Material Name','Supplier Name','Bags','Wgt-Bag','NET WEIGHT']

  // Function to read data from Excel file
  const readExcel = () => {
    const sheetID = '1qLOLzHPaIOl2hAzHG2gKbslzfisxAKScRH_s0p8F2gM'; // Replace with your actual Sheet ID
    const sheetName = 'INWARDDATA'; // Replace with the name of your sheet
    const GOOGLE_API = process.env.REACT_APP_GOOGLE_API_KEY;
    console.log(GOOGLE_API)
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

  // Use effect to periodically fetch data every 5 minutes
  useEffect(() => {
    readExcel();
    const interval = setInterval(readExcel, 5 * 60 * 1000); // 5 minutes interval
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  const handleFilterChange = (column, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters, [column]: value };
  
      // Filter data based on updated filters
      if (column === 'DateTime In') {
        // Filter data based on selected date
        console.log(value)
        const filtered = data.filter((row) =>
            Object.entries(updatedFilters).every(
              ([key, filterValue]) => filterValue === '' || row[key].split(' ')[0] === filterValue
            )
          );
        setFilteredData(filtered);
      } else {
        console.log(value)
      const filtered = data.filter((row) =>
        Object.entries(updatedFilters).every(
          ([key, filterValue]) => filterValue === '' || row[key] === filterValue
        )
      );
      setFilteredData(filtered);
    }
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

  return (
    <div style={styles.container}>
    <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">INWARDS</span></h1>
      
      {/* Render filters for Date, Material Name, Supplier Name */}
      <div style={styles.filterContainer}>
      <form class="max-w-sm" margin='0px'>
  <label for="Date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Select Date</label>
  <select id="small" value={filters['DateTime In'] || ''}
  onChange={(e) => handleFilterChange('DateTime In', e.target.value)}
 class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option value="">All</option>
    {getUniqueDate().map((date) => (
    <option key={date} value={date}>
    {date}</option>))}
  </select>
</form>
        {data.length > 0 &&
          filterable_columns.map((key) => (
            <div key={key} style={styles.filter}>
                <form class="max-w-sm">
  <label for="Key" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">{key}</label>
  <select id="small" value={filters[key] || ''}
                onChange={(e) => handleFilterChange(key, e.target.value)}
 class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option value="">All</option>
    {getUniqueValues(key).map((value) => (
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
      </div>

      {/* Display filtered data */}
      <div style={styles.tableContainer}>
        {filteredData.length === 0 ? (
          <p>Loading Data...</p>
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
    gap: '20px',
    marginBottom: '20px',
  },
  filter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
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

export default App;
