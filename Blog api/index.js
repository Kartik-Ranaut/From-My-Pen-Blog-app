const express= require("express");

const app = express();

var cors = require("cors");
app.use(express.json());
const blogroutes = require("./Routes/blog");


app.use(
    cors({
      origin: "*",
    })
  );
app.listen(4000,()=>{
    console.log("server started at 4000");
})

const dbconnect = require("./Config/database");
dbconnect();
app.use("/api",blogroutes);
app.get("/",(req,res)=>{
    res.send("Server started my friend");
})