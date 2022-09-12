import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import dataFetcher from '../fetchData/dataFetcher';

const ALineChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    dataFetcher('data', setData);
  }, []);

  const config = {
    data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
  };

  return <Line {...config} />;
};

export default ALineChart;