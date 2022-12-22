const mongoose = require('mongoose');
const validator = require('validator');
mongoose.set('strictQuery', true)

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser : true,
    //UseCreateIndex : true,
})

//  const User = mongoose.model('User',{
//      name :{
//            type : String,
//            required : true,
//            trim : true
//     },

//     email :{
//         type :String,
//         required :true,
//         trim : true,
//         validate(value) {
//             if(!validator.isEmail(value)){
//                 throw new Error("invalid email")
//             }
//         }
//     },
//      age :{
//          type : Number,
//          default : 0,
//          validate(value){
//                          if (value <0 )
//                          throw new Error('age cannot negative')
//                         }

//          },
//       password :{
//         type : String,
//         required : true,
//         trim  : true,
//         minlength : 7,
//         validate(value){
//             if(value.includes('password')){
//                 throw new Error("password cannot contain password");
//             }
//         }
//       }    
//      })

// const newUser = new User({
//     name : "micheal",
//     email : "micheal@gmail.com",
//     age : 34,
//     password :"mypasspaortoj0"
// })

// newUser.save().then(()=>{
//     console.log(newUser)
// }).catch((error)=>{
//     console.log(error)
// })

// const Task = mongoose.model('Tasks',{
//     discription :{
//         type : String,
//         trim :true,
//         required : true

//     },
//       completed :{
//         type :Boolean,
//         optional : true,
//         default : false
//       }
//     })

// const newTask = new Task({
//     discription : "learing",
//     completed : true
// })

// newTask.save().then(()=>{
//     console.log(newTask)
// }).catch((error)=>{
//     console.log(error)
// })