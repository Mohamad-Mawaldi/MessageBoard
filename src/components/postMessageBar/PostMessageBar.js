import React, { Component } from "react";
import "./PostMessageBar.css";
import { connect } from "react-redux";
import {
  createMessage,
  updateMessage
} from "../../store/actions/messageAction";
import { UserName } from "../../Consts";
import TonyPicture from "../../asset/ironman_endgame.png";

export class PostMessageBar extends Component {
  state = {
    id: 0,
    messageItem: {
      author: UserName,
      parentId: 0,
      message: "",
      profilePicture: TonyPicture
    }
  };

  updateMessageHandler = message => {
    if (!message.isEmpty()) {
      const message = this.props.clickedMessage;
      const id = message.id;
      delete message.id;

      this.setState({
        messageItem: {
          message
        },
        id
      });
    }
  };

  render() {
    console.log("props.message", this.props.clickedMessage);
    this.updateMessageHandler(this.props.clickedMessage.message);

    console.log("state", this.state);

    const onChange = e => {
      this.setState({
        messageItem: { ...this.state.messageItem, message: e.target.value }
      });
      console.log(".........", this.state.messageItem);
    };

    const onSubmit = e => {
      e.preventDefault();
      console.log(".........submit", this.state.messageItem);
      this.props.createMessage(this.state.messageItem);
      this.setState({
        messageItem: { ...this.state.messageItem, message: "" },
        id: 0
      });
    };

    const handleKeyDown = e => {
      if (e.key === "Enter") {
        this.props.createMessage(this.state.messageItem);
        this.setState({
          messageItem: { ...this.state.messageItem, message: "" },
          id: 0
        });
      }
    };

    return (
      <div className='row '>
        <div className='col '>
          <input
            className='PostBarInput'
            type='text'
            placeholder='Write a Message'
            onChange={onChange}
            value={this.state.messageItem.message}
            onKeyDown={handleKeyDown}
          />
          <div className='PostBarArrowIcon' onClick={onSubmit}>
            <i className='fas fa-arrow-right' />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createMessage: message => dispatch(createMessage(message)),
    updateMessage: message => dispatch(updateMessage(message))
  };
};

const mapStateToProps = state => {
  return { clickedMessage: state.messages.item };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostMessageBar);
