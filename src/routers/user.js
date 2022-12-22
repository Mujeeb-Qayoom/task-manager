const express = require('express');

const Router = new express.Router();
const User = require('../models/user');

Router.post('/users', async (req,res)=>{

    const newUser = new User(req.body)
       try{
          await newUser.save()
          res.send(newUser)
       }
        catch(error){
          res.send(error)
        }
    //  newUser.save().then(()=>{
    //     res.send(newUser)
    //  }).catch((error)=>{
    //     res.status(400)
    //     res.send(error)
    //  })
})



Router.get('/users/:id', async (req,res)=>{
        
    const _id = req.params.id;


    try{
      const user = await User.findById(_id)

        if(!user){
        res.status(404).send()
      }
        res.send(user)
    }
        catch(err){
        res.status(500).send(err)
        }

    // User.findById(_id).then((user)=>{

    //     if(!user){
    //         return res.status(400).send()
    //     }
    //     res.send(user)

    // }).catch((error)=>{
    //     res.status(500).send()
    // })
})

Router.get('/users', async(req,res)=>{
    
    // User.find({}).then((users)=>{
    //     res.send(users)
    // }).catch((error)=>{
    //     res.status(500).send(error)
    // })

      
    try{
        const users =  await User.find({})
        res.send(users)
         }

         catch(err){
         res.status(404).send();
      }

})

Router.patch('/users/:id', async(req,res)=>{

 try {
        const user = await User.findByIdAndUpdate(req.params.id ,req.body, {new :true, runValidators :true})
        
       if(!user){
        return res.status(404).send()
       }
       res.send(user)
     }
  
     catch(error){
        res.status(400).send()
     }
})


Router.delete('/users/:id',async(req,res)=>{

    try{    
    const user =  await User.findByIdAndDelete(req.params.id)
     
    if(!user)
       {
         return res.status(400).send("invalid user")
       }
    res.send("user deleted")

    } 
      catch(error){
       res.status(500).send()
      }
})













module.exports =Router;