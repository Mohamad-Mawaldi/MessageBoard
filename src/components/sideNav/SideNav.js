import React from "react";
import "./SideNav.css";

const SideNav = () => {
  return (
    <div className='SideNavBody'>
      <div className='UserSideNavPicWrapper'>
        <div className='UserSideNavPic mx-auto text-center' />
      </div>
      <ul className='SideNavMenu'>
        <li className='UserSideNavName'>Mohamad Mawaldi</li>
        <li>Cras justo odio</li>
        <li>Dapibus ac facilisis in</li>
        <li>Morbi leo risus</li>
        <li>Morbi leo risus</li>
      </ul>
    </div>
  );
};

export default SideNav;
