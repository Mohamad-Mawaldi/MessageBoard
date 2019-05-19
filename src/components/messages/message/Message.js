import React from "react";
import "./Message.css";
import { connect } from "react-redux";
import {
  deleteMessage,
  updateMessage
} from "../../../store/actions/messageAction";
import { UserName } from "../../../Consts";

const Message = props => {
  const messageOptions = () => {
    if (props.messageItem.author === UserName) {
      return (
        <ul className='MessageOptionsBody'>
          <li onClick={() => deleteMessage(props.messageItem.id)}>
            <i className='fas fa-times' />
          </li>
          <li onClick={() => console.log(props.messageItem.id)}>
            <i className='fas fa-pen' />
          </li>
          <li onClick={() => console.log(props.messageItem.id)}>
            <i className='fas fa-reply-all' />
          </li>
        </ul>
      );
    } else {
      return (
        <ul className='MessageOptionsBody'>
          <li onClick={() => console.log(props.messageItem.id)}>
            <i className='fas fa-reply-all' />
          </li>
        </ul>
      );
    }
  };

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
          <div className='MessageOptions col-2'>{messageOptions()}</div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  deleteMessage
)(Message);
