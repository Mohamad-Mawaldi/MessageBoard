import React from "react";
import "./PostMessageBar.css";
const PostBar = () => {
  return (
    <div>
      <div className='row'>
        <div className='col fixed-bottom'>
          <input className='PostBarInput' type='text' placeholder='Username' />
          <div className='PostBarArrowIcon'>
            <i className='fas fa-arrow-right' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBar;
