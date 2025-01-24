import React from "react";
import { useState } from "react";


// Function to read data from Excel file
export default async function readExcel() {
  console.log('readExcel called');
  const display_Columns = [
    'SNO', 'SLIPNO', 'DateTime In', 'Net Wt', 'Material Name',
    'Supplier Name', 'Bags', 'Wgt-Bag', 'NET WEIGHT', 
    'GRADED BAGS', 'GRADED QUANTITY', 'GRADED LOOSE'
  ];

  const sheetID = '1ZcsM_TUs6kYDeRR_QyrTsWRPviozCdsDykWhELSAWpc'; // Replace with your actual Sheet ID
  const sheetName = 'INWARDDATA'; // Replace with the name of your sheet
  const GOOGLE_API = process.env.REACT_APP_GOOGLE_API_KEY;

  const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${sheetName}?key=${GOOGLE_API}`;

  try {
    const response = await fetch(apiUrl); // Await the fetch call
    const data = await response.json(); // Await the JSON parsing
    const rows = data.values;

    if (rows && rows.length > 0) {
      const headers = rows[2]; // Assuming headers are in the third row
      const jsonData = rows.slice(3).map((row) =>
        headers
          .filter((header) => display_Columns.includes(header)) // Filter headers based on columnsToKeep
          .reduce((obj, header) => {
            const headerIndex = headers.indexOf(header); // Get the actual index in the original row
            obj[header] = row[headerIndex] || ''; // Assign the value from row (or empty string if missing)
            return obj;
          }, {})
      );

      // console.log('Processed data:', jsonData); // Debug log
      return jsonData; // Return the processed data
    } else {
      console.warn('No rows found in the sheet!');
      return []; // Return an empty array if no rows are found
    }
  } catch (error) {
    console.error('Error reading Google Sheet:', error);
    throw error; // Re-throw the error to handle it in the calling function
  }
}
