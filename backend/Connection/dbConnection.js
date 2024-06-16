import mongoose from "mongoose";


export const dbConnection =() => {
  mongoose.connect(process.env.MONGO_URI,{

   dbName:"JOBJ"
  }).then(()=>{
     console.log("Database Connected");
  }).catch((err)=>{

      console.log(`SOME ERROR OCCURED WHILE CONNECTING TO DATABASE:${err}`);
   })
}





