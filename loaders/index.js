const mongodbLoader = require('./mongo');
const expressLoader = require('./express');

module.exports = async ({expressApp}) =>{
  await expressLoader({ app: expressApp });
  console.log('Express Intialized');
  const mongoClient = await mongodbLoader();
  console.log('MongoDB Intialized');

  return {mongoClient :mongoClient};
};