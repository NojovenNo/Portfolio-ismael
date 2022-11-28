import React from 'react'
import "./index.css"
function index() {
  return (
    <div className="Container">
      <div className="navbar">
        <a href="Projects">Jose Ismael</a>
        <div className="pages">
          <div className="items-pages">
            <div className="about">
              <div className="x1">
                <a href="About">About</a>
              </div>
              <div className="x2">
                <a href="Projects">Projects</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index