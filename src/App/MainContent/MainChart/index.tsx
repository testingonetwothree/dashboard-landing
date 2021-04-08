import React from 'react'
import './styles.css'
import {MainChartData} from "./MainChartData";
import {up} from "../../../assets/icons/up";
import {down} from "../../../assets/icons/down";


const chartData = [
  {
    score: '2,223,214',
    type: 'Total View',
    icon: up,
    tendency: '+22',
    border: true
  },
  {
    score: '1,312,022',
    type: 'Total Download',
    icon: down,
    tendency: '-64',
    border: true
  },
  {
    score: '1,959,435',
    type: 'Total Read',
    icon: down,
    tendency: '-54',
    border: true
  },
  {
    score: '234,032',
    type: 'Total Comments',
    icon: up,
    tendency: '+4',
    border: false
  },
]

export const MainChart = () => {
  return (
    <div className="main-content__chart">
      {chartData.map(data => (
        <>
          <MainChartData data={data}/>
          {data.border && <div className="main-content__chart-data_border"/>}
        </>
      ))}
    </div>
  )
}
