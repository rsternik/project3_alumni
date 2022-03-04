const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || process.env.MONGODB_URI || 'mongodb+srv://admin:Password1234@cluster0.p5eox.mongodb.net/alumnidb?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
