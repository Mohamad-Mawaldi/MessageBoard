import React from "react";
import "./Message.css";
import { connect } from "react-redux";
import { deleteMessage } from "../../../store/actions/messageAction";
import { UserName } from "../../../Consts";

const MessageOptions = ({ messageItem }) => {
  if (messageItem.author === UserName) {
    return (
      <ul className="MessageOptionsBody">
        <li
          onClick={() => {
            deleteMessage(messageItem.id);
          }}
        >
          <i className="fas fa-times" />
        </li>
        <li
          onClick={() => {
            alert("hello delete");
          }}
        >
          <i className="fas fa-pen" />
        </li>
        <li
          onClick={() => {
            alert("hello delete");
          }}
        >
          <i className="fas fa-reply-all" />
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="MessageOptionsBody">
        <li
          onClick={() => {
            alert("hello delete");
          }}
        >
          <i className="fas fa-reply-all" />
        </li>
      </ul>
    );
  }
};

const Message = ({ messageItem }) => {
  console.log("props", messageItem);
  return (
    <div className="container">
      <div className="MessageBody">
        <div className="row">
          <div className="col-1">
            <img
              src={messageItem.profilePicture}
              className="MessageAuthorPic rounded-circle "
              alt="profilePicture"
            />
          </div>
          <div className="MessageContent col-9">
            <div>{messageItem.message.substring(0, 90)}...</div>
            <div className="row">
              <div className="MessageAuthor col-12">
                by <strong>{messageItem.author}</strong>
              </div>
            </div>
          </div>
          <div className="MessageOptions col-2">
            <MessageOptions messageItem={messageItem} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { deleteMessage }
)(Message);
