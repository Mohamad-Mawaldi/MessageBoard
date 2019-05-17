import React from "react";
import "./Message.css";

const Message = props => {
  console.log("props.message ******", props.messageItem);
  return (
    <div className='MessageBody'>
      <div className='row'>
        <div className='MessageAuthorPic' />
        <div className='MessageAuthor col-3'>{props.messageItem.author}</div>
      </div>
      <div className='row'>
        <div className='MessageContent col-11'>
          <p>{props.messageItem.message}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
