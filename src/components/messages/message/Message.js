import React from "react";
import "./Message.css";

const Message = props => {
  return (
    <div className='MessageBody'>
      <div className='row'>
        <div className='MessageAuthorPic' />
        <div className='MessageAuthor col-3'>MAX mark</div>
      </div>
      <div className='row'>
        <div className='Message col-11'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta alias
          aliquid eum, necessitatibus ex nesciunt nihil pariatur vel, sequi
          dolores, harum deserunt minima a similique blanditiis expedita
          delectus suscipit! Nemo.
        </div>
      </div>
    </div>
  );
};

export default Message;
