require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('63a18bd98c70c13d666a5c9f').then((task)=>{
//     if(task)
//     console.log("Task Deleted")
//     else 
//     console.log("no match found")
//     return Task.countDocuments({completed : true})
// }).then((count)=>{
//    console.log(count)

// }).catch((error)=>{
//     console.log(error)
// })

const dataDeleteAndCount = async (id)=>{
     const task =await Task.findByIdAndDelete(id)
     return count = await Task.countDocuments({completed:true})
}


dataDeleteAndCount('63a1706128d02e47f4f498a6').then((count)=>{
    console.log(count)
}).then((err)=>{
  console.log(err)
})