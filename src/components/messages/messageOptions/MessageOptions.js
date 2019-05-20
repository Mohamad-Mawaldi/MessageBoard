import React from "react";
import "./MessageOptions.css";
import { connect } from "react-redux";
import {
  deleteMessage,
  prepareMessageToUpdate
} from "../../../store/actions/messageAction";
import { UserName } from "../../../Consts";

const MessageOptions = props => {
  if (props.messageItem.author === UserName) {
    return (
      <ul className='MessageOptionsBody'>
        <li
          onClick={() => {
            props.deleteMessage(props.messageItem.id);
          }}
        >
          <i className='fas fa-times' />
        </li>
        <li
          onClick={() => {
            props.prepareMessageToUpdate(props.messageItem);
          }}
        >
          <i className='fas fa-pen' />
        </li>
        <li
          onClick={() => {
            console.log("reply");
          }}
        >
          <i className='fas fa-reply-all' />
        </li>
      </ul>
    );
  } else {
    return (
      <ul className='MessageOptionsBody'>
        <li
          onClick={() => {
            alert("hello delete");
          }}
        >
          <i className='fas fa-reply-all' />
        </li>
      </ul>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteMessage: id => dispatch(deleteMessage(id)),
    prepareMessageToUpdate: messageItem =>
      dispatch(prepareMessageToUpdate(messageItem))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MessageOptions);