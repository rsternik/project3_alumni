import React from 'react';
import { Link } from 'react-router-dom';

const MessageList = ({
  message,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!message.length) {
    return <h3>No messages yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {message &&
        message.map((message) => (
          <div key={message._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${message.messageAuthor}`}
                >
                  {message.messageAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had replied to this {message.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You replied to this {message.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{message.messageText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/message/${message._id}`}
            >
              Reply to this.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default MessageList;

