const db = require('../config/connection');
const { message } = require('../models');
const messageSeeds = require('./messageSeeds.json');

db.once('open', async () => {
  await message.deleteMany({});
  await message.create(messageSeeds);

  console.log('all done!');
  process.exit(0);
});
