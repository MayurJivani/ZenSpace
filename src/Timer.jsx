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
      <h4 className="TimerText">Timer</h4>
      <div className="flex-column">
        <label className="hourtext">Hours</label>
        <input className="hourT" value={hours} onChange={changeHours} />
      </div>
      <div className="flex-column">
      <label className="mintext">Minutes</label>
        <input className="minT" value={minutes} onChange={changeMinutes} />
      </div>
      <div className="flex-column">
      <label className="sectext">Secounds</label>
        <input className="secT" value={seconds} onChange={changeSeconds} />
      </div>
      <div className="flex-column">
      </div>
    </div>
  );
}