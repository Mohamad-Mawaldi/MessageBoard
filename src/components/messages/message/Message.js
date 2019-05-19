import React from "react";
import "./Message.css";
import { connect } from "react-redux";
import {
  deleteMessage,
  updateMessage
} from "../../../store/actions/messageAction";

const Message = props => {
  return (
    <div className='container'>
      {/* <div className='MessageOptions col'>
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
        </div> */}
      <div className='MessageBody'>
        <div className='row'>
          <div className='col-1'>
            <img
              src={props.messageItem.profilePicture}
              className='MessageAuthorPic rounded-circle '
              alt='profilePicture'
            />
          </div>
          <div className='MessageContent col-11'>
            <div>{props.messageItem.message.substring(0, 90)}...</div>
            <div className='row'>
              <div className='MessageAuthor col-12'>
                by <strong>{props.messageItem.author}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  deleteMessage
)(Message);
