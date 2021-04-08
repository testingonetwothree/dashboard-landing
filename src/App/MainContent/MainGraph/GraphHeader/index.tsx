import React from "react";
import './styles.css'
import {date} from "../../../../assets/icons/date";

export const GraphHeader = () => (
  <div className="graph__header">
    <div className="graph__header_title">View Statistic</div>
    <button className="graph__header_calendar">
      <div className="graph__header_calendar-icon">
        {date}
      </div>
      <div className="graph__header_calendar-day">Yesterday</div>
    </button>
  </div>
)