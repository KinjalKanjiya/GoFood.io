const express = require('express')
const cors = require('cors');
const app = express()
 const port = 5000

app.use(cors({origin:'*'}));
 
 app.get('/',(req,res)=>{
    res.send("Hello World")
 })
app.use(express.json())
 app.use('/api',require("./Routes/CreateUser"));
 app.use('/api',require("./Routes/DisplayData"));

 app.listen(port,() =>{
    console.log(`Example app listining  on port ${port}`);
 })