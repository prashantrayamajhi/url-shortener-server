const mongoose = require('mongoose');

module.exports = mongoose.connect(
  `mongodb+srv://prashantrayamajhi:${process.env.DATABASE_PASSWORD}@urls.5wlke.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,{
      useUnifiedTopology:true,
      useNewUrlParser:true
  }).then(()=>{
    console.log("Connected to the database")
}).catch(err=>{
    console.log(err)
})