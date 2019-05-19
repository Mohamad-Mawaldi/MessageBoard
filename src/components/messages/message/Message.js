import React from "react";
import "./Message.css";
import { connect } from "react-redux";
import {
  deleteMessage,
  updateMessage
} from "../../../store/actions/messageAction";

const Message = props => {
  return (
    <div className='MessageBody'>
      <div className='row'>
        <div className='MessageAuthorPic' />
        <div className='MessageAuthor col-3'>{props.messageItem.author}</div>
        <div className='MessageOptions col'>
          <ul className='MessageOptionsBody'>
            <li onClick={() => deleteMessage(props.messageItem.id)}>
              <i className='fas fa-times' />
            </li>
            <li onClick={() => console.log(props.messageItem.id)}>
              <i className='fas fa-pen' />
            </li>
            <li onClick={() => console.log(props.messageItem.id)}>
              <i className='fas fa-reply' />
            </li>
          </ul>
        </div>
      </div>
      <div className='row'>
        <div className='MessageContent col-11'>
          <p>{props.messageItem.message}</p>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  deleteMessage
)(Message);
