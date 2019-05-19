import React, { Component } from "react";
import "./PostMessageBar.css";
import { connect } from "react-redux";
import { createMessage } from "../../store/actions/messageAction";

export class PostMessageBar extends Component {
  state = {
    message: ""
  };

  render() {
    const onChange = e => {
      this.setState({ message: e.target.value });
      console.log(".........", this.state.message);
    };

    const onSubmit = e => {
      e.preventDefault();

      const message = {
        author: "author 3",
        parentId: 0,
        message: this.state.message
      };

      console.log(".........submit", message);
      this.props.createMessage(message);
    };

    return (
      <div className='row '>
        <div className='col '>
          <input
            className='PostBarInput'
            type='text'
            placeholder='Write a Message'
            onChange={onChange}
            value={this.state.body}
          />
          <div className='PostBarArrowIcon' onClick={onSubmit}>
            <i className='fas fa-arrow-right' />
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
