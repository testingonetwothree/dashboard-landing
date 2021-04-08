import React from 'react'
import './styles.css'
import {GraphHeader} from "./GraphHeader";
import {Graph} from "./Graph";


export const MainGraph = () => (
  <div className="main-content__graph">
    <GraphHeader/>
    <div className="main-content__graph_image">
      <Graph/>
    </div>
  </div>
)
