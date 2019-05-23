import React, { Component } from "react";
import MessagesList from "../messages/messagesList/MessagesList";
import { connect } from "react-redux";
import { fetchMessages } from "../../store/actions/messageAction";

export class DashBoard extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    const messages = id =>
      this.props.messages.filter(message => message.parentId == 0);

    return (
      <div>
        <MessagesList messages={messages()} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { messages: state.messages.items };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMessages: () => dispatch(fetchMessages())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard);
