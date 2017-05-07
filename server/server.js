//library imports
var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

//local imports
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());



app.post('/todos', (req, res) => {
      var todo = new Todo({
         text: req.body.text
      });

      todo.save().then((doc) => {
         res.send(doc);
      }, (e) => {
         res.status(400).send(e);
      });
});

app.get('/todos', (req, res) => {
   Todo.find().then((todos) => {
      res.send({todos});
   }, (e) => {
      res.status(400).send(e);
   });
});

//GET /todos/13394
app.get('/todos/:id', (req, res) => {
   // res.send(req.params);
   var id = req.params.id;

   if(!ObjectID.isValid(id)){
         return res.status(404).send();
   }

   Todo.findById(id).then((todo) => {
      if(!todo){
         return res.status(404).send();
      }

      res.send({todo});
   }, (e) => {
      res.status(400).send();
   });

});//close /todos/:id

//DELETE /todos/delete/:id
app.delete('/todos/:id', (req, res) => {
   //get the id
   var id = req.params.id;

   //validate the id -> not valid? return 404
   if(!ObjectID.isValid(id)){
      return res.status(404).send();
   }

   //remove todo by id
   Todo.findByIdAndRemove(id).then((todo) => {
      //success
      if(!todo){
         //if no doc, send 404
         return res.status(404).send();
      }
      //if doc, send doc back with 200
      res.send(todo);
   },
   //error
   (e) => {
      //400 with empty body
      res.status(400).send();
   });

});

app.listen(port, () => {
   console.log(`Started up on port ${port}`);
});

module.exports = {app};

















//
// var newTodo = new Todo({
//    text: '     one trim, thanks...   '
// });
//
// newTodo.save().then((doc) => {
//    console.log('Saved todo', doc);
// }, (e) => {
//    console.log('Unable to save todo');
// });
//
//
//
// var newUserGood = new User({
//    email: 'owlasylum@gmail.com'
// });
//
// newUserGood.save().then((doc) => {
//    console.log('Saved User', doc);
// }, (e) => {
//    console.log('Unable to save user');
// })
