const mongodb = require('mongodb')
//const MongoCilent = mongodb.MongoClient;
//const ObjectID =mongodb.ObjectId;
 const {MongoClient,ObjectID} = require('mongodb')

const connectionUrl = "mongodb://127.0.0.1/:27017"    //CONNECTION TO THE LOCAL DATA BASE
const dbName = "task-manager"

//const id =new ObjectID();
// console.log(id);

MongoClient.connect(connectionUrl, { useNewUrlParser: true },
    (error, cilent) => {
        if (error) {
            return console.log("unable to connect with server")
        }
             // CREATING OR INSERTING DATA


         const db = cilent.db(dbName);
        // db.collection('users').insertOne({
        //     _id : id,
        //     name: "jahangir",
        //     age: 90,
        // }, (error, result) => {
        //     if (error) {
        //         return console.log("unable to connect")
        //     }
        //     console.log(result);
        // })

        // db.collection('users').insertMany([{
        //     name : 'jodha',
        //     age :66,
        // },{
        //     name : "birbal",
        //     age : 76,
        // }], (error ,result)=>{
        //     if(error){
        //         return console.log("unable to connect")
        //     }

        //     console.log(result.insertedCount);
        // })

              // INSERTING MANY DATA FEILDS 

        //  db.collection('tasks').insertMany([{
        //     discription : "Breakfast",
        //     completed : true,
        //  },{
        //     discription : "Lunch",
        //     completed : false,
        //  },{
        //     discription : "Dinner",
        //     completed : false,
        //  }],(error,result)=>{
        //     if(error){
        //         return console.log("unable to connect")
        //     }

        //     console.log(result.insertedIds)
        //  })


           // READIND OR FINDING DATA


        //    db.collection('users').findOne({name :"sita"},(error,user)=>{
        //     if(error){
        //         console.log("not found")
        //     }
            
        //     console.log(user);

        //    })


        // db.collection('tasks').findOne({_id : new ObjectID('63a01a5ae93d8178a1e97ecb')},(error,task)=>{
        //         if(error){
        //             return console.log("not found");
        //         }
        //         console.log(task);
        // })
          

        // db.collection('tasks').find({completed : false}).toArray((error,data)=>{

        //   if(error){
        //         console.log("not found")
        //     }
        //     console.log(data)

        // })

        // UPDATE DATA IN DATABASE



    //   const updatePromise =  db.collection('users').updateOne({     // it returns a promise

    //         _id : new ObjectID('63a0185694abf085648fa312')
    //       },{
    //         $mul : {           //set, inc, rename  etc are the methods to update the data
    //             age : 2
    //             }
    //       })

    //       updatePromise.then((results)=>{
    //         console.log(results)
    //       }).catch((error)=>{
    //         console.log(error);
    //       })
         
        // db.collection('tasks').updateMany({
        //      completed : false,
        // }, {
        //   $set : { 
        //     completed : true
        //   }
        // }).then((results)=>{
        //     console.log(results)
        // }).catch((error)=>{
        //     console.log(error);
        // })



        db.collection('users').deleteMany({
            name:'laila'
        }).then((results)=>{
              console.log(results)
        }).catch((error)=>{
            console.log(error)
        })

        
        db.collection('tasks').deleteOne({
            
        discription : "Dinner"
        }).then((results)=>{
            console.log(results)
        }).then((error)=>{
            console.log(error)
        })

        


    })
