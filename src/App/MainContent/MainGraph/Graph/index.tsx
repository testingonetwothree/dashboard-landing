import React from "react";

import { Chart, Path } from 'bizcharts';


const data = [
  { views: 2850, time: 0 },
  { views: 3250, time: 1 },
  { views: 1844, time: 2 },
  { views: 1314, time: 3 },
  { views: 2211, time: 4 },
  { views: 2611, time: 5 },
  { views: 2999, time: 6 },
  { views: 3299, time: 7 },
  { views: 3436, time: 8 },
  { views: 4523, time: 9 },
  { views: 6534, time: 10 },
  { views: 8000, time: 11 },
  { views: 9854, time: 12 },
  { views: 11250, time: 13 },
  { views: 10700, time: 14 },
  { views: 8103, time: 15 },
  { views: 8023, time: 16 },
  { views: 8223, time: 17 },
  { views: 8723, time: 18 },
  { views: 9137, time: 19 },
  { views: 7900, time: 20 },
  { views: 6777, time: 21 },
  { views: 4830, time: 22 },
  { views: 3300, time: 23 },
];

const scale = {
  views: {
    min: 0,
    max: 12000,
  },
  time: {
    range: [0.01, 0.99],
    min: 0,
    max: 23,
    formatter: (time: string) => time + ':00'
  },

}

export const Graph = () => {
  return <Chart height={214} autoFit data={data} scale={scale} >
    <Path
      shape="smooth"
      position="time*views"
    />
  </Chart>
}