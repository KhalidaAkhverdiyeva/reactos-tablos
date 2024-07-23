import './index.css';
import MyTable from '../src/component/MyTable';
import MyForm from '../src/component/MyForm';
import React, { useState } from 'react';
import useSWR from 'swr';


const fetcher = (...args) => fetch(...args)
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  });

function App() {
  const { data, error } = useSWR('http://localhost:5000/data', fetcher);

  if (error) {
    console.error('Error loading data:', error);
    return <div>Error loading data</div>;
  }

  if (!data) return <div>Loading...</div>;
  if (!Array.isArray(data)) {
    console.error('Data is not an array:', data);
    return <div>Error: Data is not an array</div>;
  }

  console.log('Fetched data:', data);

  const processedData = data.map(item => ({
    ...item,
    id: crypto.randomUUID()
  }));


  return (
    <div className="App">
      <MyTable data={processedData} />
      <MyForm />


    </div>
  );
}

export default App;
