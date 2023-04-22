import React from "react";

import "./timer.css";



export default function Timer({
  milliseconds,
  seconds,
  minutes,
  hours,
  changeSeconds,
  changeMinutes,
  changeHours,
}) {
  return (
    <div id="main">
  
      <div className="flex-column">
    
        <input className="hourT" value={hours} onChange={changeHours} />
      </div>
      <div className="flex-column">

        <input className="minT" value={minutes} onChange={changeMinutes} />
      </div>
      <div className="flex-column">
    
        <input className="secT" value={seconds} onChange={changeSeconds} />
      </div>
      <div className="flex-column">
      </div>
    </div>
  );
}