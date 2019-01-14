var  mysql = require("mysql");
var express= require("express");
var cors=require("cors");
var App =express();
App.use(express.json()); 
App.use(express.urlencoded());
App.use(cors())

App.get("/get",(req,res)=>{

  connection.query('SELECT * from  users', function (error, results, fields) {
    if (error) throw error;
    res.send(results);
    });
})

App.post("/put",(req,res)=>{

  connection.query(`INSERT INTO getashik.users VALUES('','${req.body.name}','${req.body.email}')`, 
  function (error, results, fields) {
    if (error) throw error;
    
    res.send(results);
    
    });
})

App.post("/delete",(req,res)=>{

  connection.query(`delete from getashik.users WHERE id='${req.body.id}'`, 
  function (error, results, fields) {
    if (error) throw error;
    
    res.send(results);
    
    });
})




App.listen(3030, ()=>{

  console.log("Listening Port:3030");
})

var connection = mysql.createConnection({
        host     : 'getashik-awsdb.ccwvykoe9gev.us-east-2.rds.amazonaws.com',
        user     : 'getashik',
        password : '$Forget123',
        database : 'getashik'
});
connection.connect();

   