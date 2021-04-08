import React from 'react'
import './styles.css'
import {up} from "../../../../assets/icons/up";

interface IProps {
  data: {
    score: string,
    type: string,
    icon: object,
    tendency: string,
    border: boolean,
  }
}


export const MainChartData: React.SFC<IProps> = ({data}) => (
  <>
    <div className="main-content__chart-data">
      <div className="main-content__chart-data_title">{data.score}</div>
      <div className="main-content__chart-data_subtitle">
        <div className="main-content__chart-data_type">{data.type}</div>
        <div className="main-content__chart-data_background" style={data.icon === up ? {background: '#C3EE83'} : {background: '#FE9F99'} }>
          <div className="main-content__chart-data_icon">{data.icon}</div>
          <div className="main-content__chart-data_tendency" style={data.icon === up ? {color: '#489019'} : {color: '#B52A54'}}>{data.tendency}</div>
        </div>
      </div>
    </div>
  </>
)
