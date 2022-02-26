const { Message } = require('../models');

const resolvers = {
  Query: {
    messages: async () => {
      return Message.find().sort({ createdAt: -1 });
    },

    message: async (parent, { messageId }) => {
      return Message.findOne({ _id: messageId });
    },
  },

  Mutation: {
    addMessage: async (parent, { messageText, messageAuthor }) => {
      return Message.create({ messageText, messageAuthor });
    },
    addComment: async (parent, { messageId, commentText }) => {
      return Message.findOneAndUpdate(
        { _id: messageId },
        {
          $addToSet: { comments: { commentText } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeMessage: async (parent, { messageId }) => {
      return Message.findOneAndDelete({ _id: messageId });
    },
    removeComment: async (parent, { messageId, commentId }) => {
      return messageId.findOneAndUpdate(
        { _id: messageId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
