import React, { useState, useEffect } from 'react';
import { Bar } from '@ant-design/plots';

const BarChart = () => {
    const data = [
        {
          province: 'Province 1',
          value: 18,
          type: 'Hospital',
        },
        {
          province: 'Province 2',
          value: 13,
          type: 'Hospital',
        },
        {
          province: 'Province 3',
          value: 33,
          type: 'Hospital',
        },
        {
          province: 'Province 4',
          value: 15,
          type: 'Hospital',
        },
        {
          province: 'Province 5',
          value: 20,
          type: 'Hospital',
        },
        {
          province: 'Province 6',
          value: 12,
          type: 'Hospital',
        },
        {
          province: 'Province 7',
          value: 14,
          type: 'Hospital',
        },
        {
          province: 'Province 1',
          value: 40,
          type: 'Primary Health Care Centers',
        },
        {
          province: 'Province 2',
          value: 32,
          type: 'Primary Health Care Centers',
        },
        {
          province: 'Province 3',
          value: 43,
          type: 'Primary Health Care Centers',
        },
        {
          province: 'Province 4',
          value: 24,
          type: 'Primary Health Care Centers',
        },
        {
          province: 'Province 5',
          value: 30,
          type: 'Primary Health Care Centers',
        },
        {
          province: 'Province 6',
          value: 13,
          type: 'Primary Health Care Centers',
        },
        {
          province: 'Province 7',
          value: 16,
          type: 'Primary Health Care Centers',
        },
        {
          province: 'Province 1',
          value: 648,
          type: 'Health Post',
        },
        {
          province: 'Province 2',
          value: 745,
          type: 'Health Post',
        },
        {
          province: 'Province 3',
          value: 640,
          type: 'Health Post',
        },
        {
          province: 'Province 4',
          value: 491,
          type: 'Health Post',
        },
        {
          province: 'Province 5',
          value: 570,
          type: 'Health Post',
        },
        {
          province: 'Province 6',
          value: 336,
          type: 'Health Post',
        },
        {
          province: 'Province 7',
          value: 378,
          type: 'Health Post',
        },
        {
          province: 'Province 1',
          value: 52,
          type: 'Urban Health Centres',
        },
        {
          province: 'Province 2',
          value: 17,
          type: 'Urban Health Centres',
        },
        {
          province: 'Province 3',
          value: 110,
          type: 'Urban Health Centres',
        },
        {
          province: 'Province 4',
          value: 52,
          type: 'Urban Health Centres',
        },
        {
          province: 'Province 5',
          value: 68,
          type: 'Urban Health Centres',
        },
        {
          province: 'Province 6',
          value: 18,
          type: 'Urban Health Centres',
        },
        {
          province: 'Province 7',
          value: 57,
          type: 'Urban Health Centres',
        },
        {
          province: 'Province 1',
          value: 49,
          type: 'Community Health Unit',
        },
        {
          province: 'Province 2',
          value: 7,
          type: 'Community Health Unit',
        },
        {
          province: 'Province 3',
          value: 90,
          type: 'Community Health Unit',
        },
        {
          province: 'Province 4',
          value: 41,
          type: 'Community Health Unit',
        },
        {
          province: 'Province 5',
          value: 47,
          type: 'Community Health Unit',
        },
        {
          province: 'Province 6',
          value: 22,
          type: 'Community Health Unit',
        },
        {
          province: 'Province 7',
          value: 43,
          type: 'Community Health Unit',
        },
        {
          province: 'Province 1',
          value: 9,
          type: 'Other Health Facilities',
        },
        {
          province: 'Province 2',
          value: 8,
          type: 'Other Health Facilities',
        },
        {
          province: 'Province 3',
          value: 18,
          type: 'Other Health Facilities',
        },
        {
          province: 'Province 4',
          value: 12,
          type: 'Other Health Facilities',
        },
        {
          province: 'Province 5',
          value: 6,
          type: 'Other Health Facilities',
        },
        {
          province: 'Province 6',
          value: 3,
          type: 'Other Health Facilities',
        },
        {
          province: 'Province 7',
          value: 3,
          type: 'Other Health Facilities',
        },
      ];
  const config = {
    data: data.reverse(),
    isStack: true,
    xField: 'value',
    yField: 'province',
    seriesField: 'type',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'left', 'middle', 'right'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: 'interval-adjust-position',
        }, // 数据标签防遮挡
        {
          type: 'interval-hide-overlap',
        }, // 数据标签文颜色自动调整
        {
          type: 'adjust-color',
        },
      ],
    },
  };
  return <Bar {...config} />;
};
export default BarChart;