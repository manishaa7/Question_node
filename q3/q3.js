// Create a nodejs application that should open and read from a 
// filename “demo.txt”,if file is emptythen it should print on 
// console that “File is empty”otherwise content should be printed on 
// the console.
const fs=require('fs');
const http=require('http');
const Server=http.createServer();
Server.on("request",(req,res)=>{
    fs.readFile("demo.txt",(err,data)=>{
        if(err){
            return err;
        }
        else{
            if(data==""){
                res.end("file is empty")
            }
            else{
                res.end(data);
            }
        }
    })
    })

Server.listen(3090);