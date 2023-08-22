import React, { useState } from 'react';
import Papa from 'papaparse';

const FileUpload = ({ onFileUpload }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      complete: (result) => {
        onFileUpload(result.data);
      },
      header: true,
      skipEmptyLines: true,
    });
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
    </div>
  );
};

export default FileUpload;
