import React from "react";
import "./NavBar.css";
import TonyPicture from "../../asset/ironman_endgame.png";
import { UserName } from "../../Consts";

const NavBar = () => {
  return (
    <nav className='navbar navbar-icon-top navbar-expand-lg navbar-dark'>
      <a className='navbar-brand' href='#'>
        Message Board 3000
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>

      <ul className='navbar-nav mr-auto' />

      <ul className='navbar-nav mr-auto'>
        <form className='form-inline my-2 my-lg-0'>
          <input
            className='form-control mr-sm-2 SearchInputNavBar'
            type='text'
            placeholder='Search'
            aria-label='Search'
          />
          <i className='fas fa-search SearchIconNavBar' />
        </form>
      </ul>

      <ul className='navbar-nav '>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            <i className='fa fa-bell'>
              <span className='badge badge-light'>11</span>
            </i>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            <i className='fa fa-envelope-o'>
              <span className='badge badge-light'>11</span>
            </i>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            <img
              src={TonyPicture}
              className='rounded-circle ProfilePictureNavBar'
              alt='profilePicture'
            />
            <strong>{UserName}</strong>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
