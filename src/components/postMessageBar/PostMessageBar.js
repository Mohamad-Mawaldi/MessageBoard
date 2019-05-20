import React, { Component } from "react";
import "./PostMessageBar.css";
import { connect } from "react-redux";
import { createMessage } from "../../store/actions/messageAction";
import { UserName } from "../../Consts";
import TonyPicture from "../../asset/ironman_endgame.png";

export class PostMessageBar extends Component {
  state = {
    message: ""
  };

  onChange = e => {
    this.setState({ message: e.target.value });
    console.log(".........", this.state.message);
  };

  onSubmit = e => {
    e.preventDefault();

    const message = {
      author: UserName,
      parentId: 0,
      message: this.state.message,
      profilePicture: TonyPicture
    };

    console.log(".........submit", message);
    this.props.createMessage(message);
  };

  render() {
    return (
      <div className="row ">
        <div className="col ">
          <input
            className="PostBarInput"
            type="text"
            placeholder="Write a Message"
            onChange={this.onChange}
            value={this.state.body}
          />
          <div className="PostBarArrowIcon" onClick={this.onSubmit}>
            <i className="fas fa-arrow-right" />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { createMessage }
)(PostMessageBar);
