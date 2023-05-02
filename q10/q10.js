// Create a nodejs application which opens a file 
// ‘demo.txt’ and copies the content into another 
// file ‘copy.txt’.Also delete the old file after 
// copying
const fs=require('fs');
fs.readFile("demo.txt","utf-8",(err,data)=>{
    console.log(data);
    fs.writeFile("copy.txt",data,(err)=>{
        if(err) throw err;
        console.log("file copied succesfully");
        fs.unlink('demo.txt',(err)=>{
            if(err) throw err;
            console.log('Original file deleted');
        })
    })
})
