import React from 'react';
import DataList from './Datalist';
import Filter from './Filter';

function Dashboard() {
  return (
    <div>
      <h1>Data Dashboard</h1>
        <Filter />
        <DataList />
    </div>
  );
}

export default Dashboard;
