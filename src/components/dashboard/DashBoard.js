import React, { Component } from "react";
import MessagesList from "../messages/messagesList/MessagesList";
import { connect } from "react-redux";
import { fetchMessages, getParentID } from "../../store/actions/messageAction";

export class DashBoard extends Component {
  componentDidMount() {
    this.props.fetchMessages();
    this.props.getParentID(this.props.match.params.id);
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
    fetchMessages: () => dispatch(fetchMessages()),
    getParentID: id => dispatch(getParentID(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard);
