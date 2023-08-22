import React, { useState } from 'react';
import axios from 'axios';

function Filter() {
  axios.defaults.baseURL = 'http://localhost:5000';

  const [filterParams, setFilterParams] = useState({});
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = async () => {
    try {
      const response = await axios.get('/api/data/filter', { params: filterParams });
      setFilteredData(response.data);
    } catch (error) {
      console.error('Error filtering data:', error);
    }
  };

  const handleParamChange = (event) => {
    const { name, value } = event.target;
    setFilterParams(prevParams => ({
      ...prevParams,
      [name]: value
    }));
  };

  return (
    <div>
      {/* Your filter UI elements */}
      <label>
        Sector:
        <input
          type="text"
          name="sector"
          value={filterParams.sector}
          onChange={handleParamChange}
        />
      </label>
      <button onClick={handleFilter}>Apply Filter</button>

      {filteredData.length > 0 && (
        <div>
          <h2>Filtered Data</h2>
          <ul>
            {filteredData.map(item => (
              <li key={item._id}>
                {item.title} - {item.country}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Filter;
