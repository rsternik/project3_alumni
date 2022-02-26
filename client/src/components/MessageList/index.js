import React from 'react';
// Import `<Link>` component from React Router for internal hyperlinks
import { Link } from 'react-router-dom';

const MessageList = ({ message, title }) => {
  if (!message.length) {
    return <h3>No messages posted</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {message &&
        message.map((message) => (
          <div key={message._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {message.messageAuthor} <br />
              <span style={{ fontSize: '1rem' }}>
                posted this {thought.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{message.messageText}</p>
            </div>
            {/* Create a link to this thought's page to view its comments using `<Link>` component */}
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/message/${message._id}`}
            >
              Reply to this message.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default MessageList;
