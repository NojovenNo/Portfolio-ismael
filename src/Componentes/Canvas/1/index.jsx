import React from 'react'
import './index.css'
function index(props) {
  return (
    <div className="canvas">
      <img src={props.foto} alt="" style={{ height: "100%", width: "100%" }} />

      <div className="canvas-overlay">
        <div className="canvas__details">
          <div className="text-date">
            <p>{props.date}</p>
          </div>
          <div className="text-tittle">
            <h1>{props.tittle}</h1>
          </div>
          <div className="text-work">
            <p>{props.work}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index