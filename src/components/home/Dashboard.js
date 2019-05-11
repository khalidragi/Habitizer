import React from 'react';
import Chart from './Chart';

const Dashboard = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 m6'>
          <Chart />
        </div>
        <div className='col s12 m5 offset-m1'>Tracked items</div>
      </div>
    </div>
  );
};

export default Dashboard;
