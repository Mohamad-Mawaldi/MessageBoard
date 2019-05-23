import React, { Component } from "react";
import MessagesList from "../messages/messagesList/MessagesList";
import Message from "../messages/message/Message";
import { connect } from "react-redux";
import { fetchMessages, getMessage } from "../../store/actions/messageAction";

export class ReplyPage extends Component {
  componentDidMount() {
    this.props.fetchMessages();
    this.props.getMessage(this.props.match.params.id);
  }
  state = {
    ParentMessage: {},
    childMessages: []
  };

  render() {
    const childMessages = id =>
      this.props.childMessages.filter(message => message.parentId == id);

    return (
      <div>
        <Message
          key={this.props.parentMessage.id}
          messageItem={this.props.parentMessage}
        />
        <MessagesList messages={childMessages(this.props.match.params.id)} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    childMessages: state.messages.items,
    parentMessage: state.messages.item
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMessages: () => dispatch(fetchMessages()),
    getMessage: id => dispatch(getMessage(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReplyPage);
