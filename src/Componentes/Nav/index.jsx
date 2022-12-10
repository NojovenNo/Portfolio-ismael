import React from 'react'
import MediaQuery from "react-responsive";
import Navbar from "../Navbar/index";
import Collapse from '../CollapseNavbar/index'
function index() {
  return (
    <>
      <MediaQuery minWidth={561}>
        <Collapse />
        <MediaQuery minWidth={1024}>
          <Navbar />
        </MediaQuery>
      </MediaQuery>
    </>
  );
}

export default index