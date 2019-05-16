import React from "react";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
      <div className='card-body NavBarBody'>
        <div className='row'>
          <div className='col'>
            <p className='NavBarBodyText'>
              Some quick example text to build on the card title and make up the
            </p>
          </div>
          <div className='col input-group'>
            <input
              className='SearchBarInput'
              type='text'
              placeholder='Username'
            />

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
