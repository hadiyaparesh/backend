import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path:'./env'
})


connectDB()
.then((result) => {
   app.listen(process.env.PORT||8000,()=>{
   console.log(`Server is listening on port:${process.env.PORT}`)
   }) 
}).catch((err) => {
    console.log("MONGO DB CONNECTION FAILED !!! ",err);
});






































/*
import express from "express";
const app= express();


;(async()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB-URI}/${DB_NAME}`)
       app.on("errror",(error)=>{
        console.log("ERROR: ",error);
        throw error
       })
       app.listen(process.env.PORT,()=>{
        console.log(`App  is listing on poert ${process.env.PORT}`);
       })
    }
    catch(error){
        console.error("ERROR:",error)
        throw error
    }
})()
    */