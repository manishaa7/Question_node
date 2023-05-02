const express=require('express');
const app= express();
const bodyParser=require('body-parser');
app.use(bodyParser({urlEncoded:true}))
app.get('/',(req,res)=>{
    res.send(`<input type="text" required name="curryear" placeholder="2002">
    <input type="date" name="biryear">
    <button type="submit">submit</submit> `)
})
app.post("/",(req,res)=>{
    const num=req.body.name;
    
})