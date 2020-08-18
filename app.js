// // using http
// const http=require('http')
// const server=http.createServer('/',(req,res)=>{
//     res.end('Hello node')
// })
// server.listen(3000)

// // using express library
// const express=require('express')
// const app=express()
// app.get('/',(req,res)=>{
// res.send('Hello World')
// })
// app.listen(3000)

const morgan = require("morgan");
const express = require("express");
const {router} = require("./routes/post");
const dotenv=require("dotenv")
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const expressValidator=require('express-validator')

dotenv.config()
const app = express();
app.use("/", router);
app.use(bodyParser.json())
app.use(expressValidator())

mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true,useNewUrlParser:true }).then(
    ()=>console.log('DB connected')
)
mongoose.connection.on('error',err=>{
    console.log(`DB connection error: ${err.message}`)
})
app.use(morgan('dev'));
const myOwnMiddleware = (req, res, next) => {
  console.log("Middleware applied");
  next();
};
app.use(myOwnMiddleware);

const port=process.env.PORT
app.listen(port,()=>{
    console.log(`server started on port ${port}`)
});

