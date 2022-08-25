const express=require('express');
const app=express();

var Firebase = require('firebase');

Firebase.initializeApp({
  credential: "./resource.json",
  databaseURL: "https://covid-resources-b046b-default-rtdb.firebaseio.com"
});
var db = Firebase.database();
var usersRef = db.ref("ResourceData");

jsondata={}
usersRef.once("value", function(snapshot) {
// console.log(snapshot.val())
jsondata=snapshot.val()
});


app.get('/',(req,res)=>{

usersRef.once("value", function(snapshot) {
// console.log(snapshot.val())
jsondata=snapshot.val()
});

res.json(jsondata)
  
});

// setInterval(console.log("hola"), 3000);

app.listen(3000,function(){
  console.log("server logged")
});

