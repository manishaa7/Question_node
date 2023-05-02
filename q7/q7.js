//create a form with one text box and one submit button. On clicking the submit button 
//display if the number entered in the text box is odd or even in another page and 
//create a text file with the message if the number is odd or even 

const express=require('express');
const  app=express();
const fs=require('fs');
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
const port=4000;
app.get('/',(req,res)=>{
    res.send(`<form method = 'post' action='/output'>
    <input type='text' name='name' placeholder='Enter Number' required />
    <button type='submit' value='Submit'>Submit</button></form>`)
})
app.post('/output',(req,res)=>{
    var num=req.body.name;
    if(num%2==0){
        res.send("Number is even")
        var message ="Number is even";
        fs.writeFile("example.txt",message,(err)=>{
            if(err)throw err;
            console.log(message);
        })
    }
    else{
        res.send("Number is odd");
        var message="Number is odd";
        fs.writeFile("example.txt",message,(err)=>{
            if(err)throw err;
            console.log(message);
        })
        
    }
})
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}!`)
})