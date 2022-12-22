const express =require('express');

const router = new express.Router();
const Task = require('../models/task');


router.post('/tasks', async (req,res)=>{

    const newTask = new Task(req.body)
  

    try{
        await newTask.save()
        res.send(newTask)
    }

    catch(err){
        res.send(err)
    }

    // newTask.save().then(()=>{

    //     res.status(201).send(newTask)
    // }).catch((error)=>{

    //     res.status(400).send(error)

    // })
})

router.get('/tasks',async (req,res)=>{

    try{
        const tasks=  await Task.find({})
        res.send(tasks);
    }
    catch(err){
      res.send(err)
    }
 
 
     // Task.find({}).then((tasks)=>{
     //     res.send(tasks)
     // }).catch((error)=>{
     //     res.status(500).send()
     // })
 })
 
 
 
 router.get('/tasks/:id',async (req,res)=>{
     const _id = req.params.id;
 
 
     try{
         const task = await Task.findById(_id)
         res.send(task)
         }
     catch(err){
         res.status(500).send(err)
     }
 
     // Task.findById(_id).then((task)=>{
           
     //     if(!task){
     //         return res.status(400).send()
     //     }
 
     //     res.send(task);
     // }).catch((error)=>{
     //     res.status(500).send();
     // })
 })
 
 router.patch('/tasks/:id', async(req,res)=>{
 
      const updates = Object.keys(req.body)
      const allowedUpdtaes =['discription','completed']
 
      const validId = updates.every((update)=> allowedUpdtaes.includes(update))
 
      if(!validId)
 
        return res.status(400).send("invalid update ")
      
 
     try{
         const task =  await Task.findByIdAndUpdate(req.params.id, req.body,{runValidators:true})
           console.log(task)
         if(!task){
            return res.status(500).send()
         }
            res.send(task);
     }
         catch(err){
         res.status(400).send()
       }
 })
 
 
 
 
 router.delete('/tasks/:id', async(req,res)=>{
 
     try{
         const task = await Task.findByIdAndDelete(req.params.id)
 
         if(!task){
             res.status(400).send('task not found')
         }
         res.send("task deleted")
     }
      
     catch(err){
         res.status(500).send()
     }
 })
 
 

module.exports = router;