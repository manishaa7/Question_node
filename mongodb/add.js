var MongoClient = require('mongodb').MongoClient;

var url = "mongodb+srv://kritisingh6179:45567@cluster0.x2ihxyp.mongodb.net/test";
var client=new MongoClient(url);
async function createCollection(){
try{
client.connect()
var dbo = client.db("abc1");
var myobj=[
{name:'Manoj',course:'Node js', marks:78},
{name:'Anuj', course: 'HTML', marks:45},
{name:'Shalini', course: 'HTML', marks:90},
{name:'Ankit', course:'Node js', marks:67},
{name: 'Prakash', course: 'CSS', marks:97},
{name: 'Rajneesh', course: 'CSS', marks:54},
{name: 'Rashi', course: 'React js', marks:82},
{name: 'Sameer', course: 'React js', marks:23},
{name: 'Rahul', course: 'JavaScript', marks:55},
{name: 'Richa', course: 'Vanilla js', marks:73}
];
await (await dbo.collection("student_details")).insertMany(myobj);

console.log("Collection created");
}
catch(err)
{
console.log(err);
}
client.close()
}
createCollection();