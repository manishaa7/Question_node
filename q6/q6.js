//create a node js application parse a json file and print 
//the content in the close
const fs=require('fs');
fs.readFile('User.json',"utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})














