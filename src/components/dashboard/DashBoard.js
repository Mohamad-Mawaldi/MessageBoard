import React, { Component } from "react";
import SideNav from "../sideNav/SideNav";

export class DashBoard extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-5'>
          <SideNav />
        </div>
        <div className='col-7'>hello</div>
      </div>
    );
  }
}

export default DashBoard;
