const express =require("express");      // importing express for routing
require('./db/mongoose')                // importing mongoose to handle database
//const User =require('./models/user');
const Task = require('./models/task');
const userRouter =require('./routers/user')   //  /users/ routing quiries
const taskRouter =require('./routers/task')   // /tasks/ routing quiries

const app = express();    // initializing express
app.use(express.json());

app.use(userRouter);  // using userrouters 
app.use(taskRouter);  //using taskrouters


app.listen('3000',()=>{                         // starting express server
    console.log("listening at port 3000")
})