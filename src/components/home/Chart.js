import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';

class Chart extends Component {
  state = {
    chartData: {
      labels: ['Run', 'Walk', 'Eat', 'HomeWork', 'Swim'],
      datasets: [
        {
          label: 'trait',
          data: [2, 5, 1, 7],
          backgroundColor: ['#303f9f']
        }
      ]
    }
  };
  render() {
    return (
      <div className='section'>
        <div className='chart'>
          <Radar
            data={this.state.chartData}
            width={4000}
            height={500}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>
    );
  }
}

export default Chart;
