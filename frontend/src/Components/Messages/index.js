import React from 'react';
import { connect } from 'react-redux';
import { removeMessage } from '../../Redux/Actions';
import MessageComponent from './Message';
function mapStateToProps(state) {
  const { messages } = state.ActionController;
  return {
    messages,
  };
}
const Message = ({ messages, removeMessage }) => {
  if (messages.length > 0) {
    return (
      <div
        className="container"
        style={{ display: 'flex', flexDirection: 'column', maxHeight: '200px', overflow: 'auto', marginTop: '20px' }}
      >
        {window.scrollTo(0, 0)}
        {messages.map(message => {
          return <MessageComponent key={message.id} message={message} removeMessage={removeMessage} />;
        })}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default connect(
  mapStateToProps,
  { removeMessage }
)(Message);
