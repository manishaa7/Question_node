// Implement an express aplication to perform the following operations
// a.Add two text textboxes in the client page to accept the current
// year and date of birth and calculate the age of the user.
// b.Add a button in the client page and provide the output values
// as response with click event.
 
const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send(`
    <form method="POST">
    <label>Enter the current year 
    <input type ="text" name="CurrYear"/>
    </label>
    <label>Enter the dob
    <input type="date" name ="BirthYear"/>
    </label>
    <button type="submit">Submit</button>
    </form>
    `);
    
});
const performcalc=(req,res,next)=>{
    const Curr=Number(req.body.CurrYear);
    const Birth=new Date(req.body.BirthYear);
    const birthYear = Birth.getFullYear();
    req.output={
       Diff:Curr-birthYear
    };
    next();
}
app.use(express.urlencoded({extended:true}));
app.post('/',performcalc,(req,res)=>{
    const output=req.output;
    res.send(`
    <p>Difference: ${output.Diff}</p>
`);
});
const port=9000;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});