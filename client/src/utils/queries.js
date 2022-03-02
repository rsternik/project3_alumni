import { gql } from '@apollo/client';


export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      message {
        _id
        messageText
        createdAt
      }
    }
  }
`;

export const QUERY_MESSAGE = gql`
  query getMessage {
    message {
      _id
      messageText
      messageAuthor
      createdAt
    }
  }
`;

export const QUERY_USERPOST = gql`
  query getUserPost($messageId: ID!) {
    message(messageID: $messageId) {
      _id
      messageText
      messageAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      message {
        _id
        messageText
        messageAuthor
        createdAt
      }
    }
  }
`;