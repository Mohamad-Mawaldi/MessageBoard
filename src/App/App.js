import React from "react";
import "./App.css";
import DashBoard from "../components/dashBoard/DashBoard";
import ReplyPage from "../components/replyPage/ReplyPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideNav from "../components/sideNav/SideNav";
import SearchBar from "../components/searchBar/SearchBar";
import NavBar from "../components/navBar/NavBar";
import PostMessageBar from "../components/postMessageBar/PostMessageBar";

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className='row'>
          <div className='col-2'>
            <SideNav />
          </div>
          <div className='col-8'>
            <SearchBar />
            <Route exact path='/' component={DashBoard} />
            <Route path='/:id' component={ReplyPage} />
            <PostMessageBar />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
