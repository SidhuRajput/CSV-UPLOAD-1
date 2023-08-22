import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import DataTable from './components/DataTable';
import Chart from './components/Chart';

const App = () => {
  const [uploadedData, setUploadedData] = useState([]);
  const [selectedColumn, setSelectedColumn] = useState('');

  const handleFileUpload = (data) => {
    setUploadedData(data);
    setSelectedColumn('');
  };

  const handleColumnSelection = (column) => {
    setSelectedColumn(column);
  };

  return (
    <div>
      <h1>CSV File Upload and Display</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      <DataTable data={uploadedData} onColumnSelect={handleColumnSelection} />
      {selectedColumn && <Chart data={uploadedData} selectedColumn={selectedColumn} />}
    </div>
  );
};

export default App;
