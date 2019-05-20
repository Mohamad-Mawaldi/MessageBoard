import React from "react";
import "./Message.css";
import MessageOptions from "../messageOptions/MessageOptions";

const Message = props => {
  console.log("props", props.messageItem);
  return (
    <div className='container'>
      <div className='MessageBody'>
        <div className='row'>
          <div className='col-1'>
            <img
              src={props.messageItem.profilePicture}
              className='MessageAuthorPic rounded-circle '
              alt='profilePicture'
            />
          </div>
          <div className='MessageContent col-9'>
            <div>{props.messageItem.message.substring(0, 90)}...</div>
            <div className='row'>
              <div className='MessageAuthor col-12'>
                by <strong>{props.messageItem.author}</strong>
              </div>
            </div>
          </div>
          <div className='MessageOptions col-2'>
            <MessageOptions messageItem={props.messageItem} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
