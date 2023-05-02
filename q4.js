// Implement an express application for the following
// a)Accept a number from the input text field of a user webpage and 
// perform the basic arithmethic operations ,increment(++),
// decrement(--_and square on the number inside middleware function
//  of server node js application
// B)Display the outout values in user webpage as a response to the 
// click event from the button.

const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send(`<form method="POST">
    <label>Enter a number:
    <input type="number" name="num"/>
    </label>
    <button type="submit>Submit</button>
    </form>
    `);
});
const performArithmetic=(req,res,next)=>{
    const num=Number(req.body.num);
    req.output={
        increment:num+1,
        decrement:num-1,
        square:num**2
    };
    next();
}

app.use(express.urlencoded({extended:true}));
app.post('/',performArithmetic,(req,res)=>{
    const output=req.output;
    res.send(`
    <p>Increment : ${output.increment}</p>
    <p>Decrement : ${output.decrement}</p>
    <p>Square : ${output.square}</p>`);
});
const port=3000;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});