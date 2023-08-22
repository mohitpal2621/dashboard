import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataList() {
  axios.defaults.baseURL = 'http://localhost:5000/api';   
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/data');
        setDataList(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {dataList.map(item => (
          <li key={item._id}>
            {item.title} - {item.country}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataList;
