import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({}); // State to track selected filters for each column
  const filterable_columns =['Material Name','Supplier Name']

  // Function to read data from Excel file
  const readExcel = () => {
    const sheetID = '1qLOLzHPaIOl2hAzHG2gKbslzfisxAKScRH_s0p8F2gM'; // Replace with your actual Sheet ID
    const sheetName = 'INWARDDATA'; // Replace with the name of your sheet
    const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${sheetName}?key=AIzaSyADAcmnbBa-5NEC7qLzz7QNE5Qv9QCLwHQ`;
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const rows = data.values;
        if (rows.length > 0) {
          const headers = rows[2];
          const jsonData = rows.slice(3).map((row) =>
            headers.reduce((obj, header, index) => {
              obj[header] = row[index] || ''; // Fill missing values with empty string
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
      if (column === 'date') {
        // Filter data based on selected date
        const filtered = data.filter(
          (row) => row["DateTime In"].split(' ')[0] === value
        );
        setFilteredData(filtered);
      } else {
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
      <h1 style={styles.title}>Inwards</h1>
      
      {/* Render filters for Date, Material Name, Supplier Name */}
      <div style={styles.filterContainer}>
      <label>Date</label>
        <select
            value={filters.date || ''}
            onChange={(e) => handleFilterChange('date', e.target.value)}
            style={styles.select}
        >
        <option value="">All</option>
        {getUniqueDate().map((date) => (
        <option key={date} value={date}>
        {date}
      </option>
    ))}
  </select>
        {data.length > 0 &&
          filterable_columns.map((key) => (
            <div key={key} style={styles.filter}>

              <label>{key}</label>
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
              </select>
            </div>
          ))}
      </div>

      {/* Display filtered data */}
      <div style={styles.tableContainer}>
        {filteredData.length === 0 ? (
          <p>No matching data found...</p>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr>
                {Object.keys(filteredData[0]).map((key) => (
                  <th key={key} style={styles.th}>
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, i) => (
                    <td key={i} style={styles.td}>
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
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
