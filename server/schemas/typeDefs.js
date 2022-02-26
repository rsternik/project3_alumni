const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Message {
    _id: ID
    messageText: String
    messageAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
  }

  type Query {
    messages: [Message]!
    message(messageId: ID!): Message
  }

  type Mutation {
    addMessage(messageText: String!, messageAuthor: String!): Message
    addComment(messageId: ID!, commentText: String!): Message
    removeMessage(messageId: ID!): Message
    removeComment(messageId: ID!, commentId: ID!): Message
  }
`;

module.exports = typeDefs;
