const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
//
// var id = '590d29fbac3a19ec3894f80b11';
//
// if(!ObjectID.isValid(id)){
//    console.log('ID is not valid');
// }
//
// Todo.find({
//    _id: id
// }).then((todos) =>{
//    console.log('Todos',todos);
// });
//
// Todo.findOne({
//    _id: id
// }).then((todo) =>{
//    console.log('Todo',todo);
// });
//
// Todo.findById(id).then((todo) =>{
//
//    if(!todo){
//       return console.log('Id not found');
//    }
//    console.log('Todo by Id',todo);
// }).catch((e) => console.log(e));

var uid = '590a7f39bd86e52f46cff63d';

User.findById(uid).then((user) => {
   if(!user){
      return console.log('Id not found');
   }
   // console.log('User by Id', user);
   console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
