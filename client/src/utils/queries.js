import { gql } from '@apollo/client';

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
        createdAt
      }
    }
  }
`;
