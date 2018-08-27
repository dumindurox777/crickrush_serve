 
const express = require('express');
const app = express();
var MongoClient = require('mongodb').MongoClient;
 
var url = "mongodb://localhost:27017/";



app.get('/', function (req, res) {
	
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("MyNewDatabase");
  var data=dbo.collection("matches").find({}).toArray(function(err, result) {
    if (err) throw err;
	console.log(result);
	res.json(result);
	
db.close();
});
});
})


app.listen(8080, () => console.log('Listening on port 8080'));



