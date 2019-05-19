import React from "react";
import "./SearchBar.css";
const NavBar = () => {
  return (
    <div>
      <div className='card-body NavBarBody'>
        <div className='row'>
          <div className='col-8'>
            <div className='NavBarBodyText'>
              <h3>Thread Result</h3>
              <p>
                Search for discussions here & become an active community member
              </p>
            </div>
          </div>
          <div className='col input-group SearchBarInput'>
            <input type='text' placeholder='Enter a topic' />

            <div className='NavBarSearchIcon input-group-append'>
              <i className='fas fa-search' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
