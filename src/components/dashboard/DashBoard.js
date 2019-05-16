import React, { Component } from "react";
import SideNav from "../sideNav/SideNav";
import NavBar from "../navBar/NavBar";
import PostBar from "../postBar/PostBar";
import MessagesList from "../messages/MessagesList";

export class DashBoard extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-2'>
            <SideNav />
          </div>
          <div className='col'>
            <NavBar />
            <MessagesList />
            <PostBar />
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
