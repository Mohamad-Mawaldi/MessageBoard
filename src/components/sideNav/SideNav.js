import React from "react";
import "./SideNav.css";
import TonyPicture from "../../asset/ironman_endgame.png";
import { UserName } from "../../Consts";

const SideNav = () => {
  return (
    <div className='SideNavBody'>
      <div className='UserSideNavPicWrapper text-center'>
        <img
          src={TonyPicture}
          className='rounded-circle UserSideNavPic'
          alt={"alt='profilePicture'"}
        />
      </div>
      <div className='UserSideNavName text-center '>
        <strong>{UserName}</strong>
      </div>
      <ul className='SideNavMenu'>
        <div className='listHeaderSideNav'>menu</div>
        <li>
          <i className='fas fa-comment-alt' />
          SOCIAL FEED
        </li>
        <li>
          <i className='fas fa-globe-europe' />
          COMMUNITY
        </li>
        <li>
          <i className='fas fa-image' />
          GALLERY
        </li>
        <li>
          <i className='far fa-calendar-alt' />
          EVENTS
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
