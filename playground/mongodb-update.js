//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if (err) {
      return console.log('Unable to connect to MongoDB server');
   }

   console.log('Connected to MongoDB server');

   db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('59067e3c7c604f49fe598464')
   }, {
      $set: {
         name: "OWL"
      },
      $inc: {
         text: 10
      }
   }, {
      returnOriginal: false
   }).then((result) => {
      console.log(result);
   });

   //db.close();
});
