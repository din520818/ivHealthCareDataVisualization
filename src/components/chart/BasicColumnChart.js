import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const BasicColumnChart = () => {
  
  const data = [
    {
      type: 'province1',
      value: 4833862,
    },
    {
      type: 'province2',
      value: 6017677,
    },
    {
      type: 'province3',
      value: 6182081,
    },
    {
      type: 'province4',
      value: 2487314,
    },
    {
      type: 'province5',
      value: 4933958,
    },
    {
      type: 'Karnali Province',
      value: 1743006,
    },
    {
      type: 'province7',
      value: 2825676,
    }
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Type',
      },
      value: {
        alias: 'Population',
      },
    },
  };
  return <Column {...config} />;
};

export default BasicColumnChart;