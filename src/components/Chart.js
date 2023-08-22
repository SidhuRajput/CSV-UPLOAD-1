import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = ({ data, selectedColumn }) => {
  const chartData = {
    labels: data.map((row) => row[selectedColumn]),
    datasets: [
      {
        label: selectedColumn,
        data: data.map((row) => row[selectedColumn]),
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default Chart;
