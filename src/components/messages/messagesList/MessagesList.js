import React from "react";
import Message from "../message/Message";
import "./MessagesList.css";

const MessagesList = props => {
  const messagesItems = props.messages.map(messageItem => (
    <Message key={messageItem.id} messageItem={messageItem} />
  ));

  return <div className='MessagesList'>{messagesItems}</div>;
};

export default MessagesList;
