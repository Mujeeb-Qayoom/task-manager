require('../src/db/mongoose');
const User = require('../src/models/user')

// User.findByIdAndUpdate('63a16567acdd7c7e200f27b2',{age : 26}).then((user)=>{
//     console.log(user)

//     return User.countDocuments({age : 1}) }).then((count)=>{
//     console.log(count)  

//     }).catch((error)=>{
//     consol.log(error)
//     })

    const updateAgeAndcount = async (id ,age)=>{
           const user = await User.findByIdAndUpdate(id,{age})
           return count =await User.countDocuments({age})
        }
    


    updateAgeAndcount('63a15f2af6ddf938f08ce9e0',8).then((count)=>{
           console.log(count);   
    }).catch((err)=>{
        console.log(err);
    })