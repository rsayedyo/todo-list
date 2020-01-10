//jshint esversion:6
const express  = require ("express");
const bodyParser = require("body-parser");
// var request  = require("request");

const app = express();
app.use(bodyParser.urlencoded({extened:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
let items = [];


app.get("/", function(req,res){

  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let today  = new Date();
  let date = today.toLocaleDateString("en-US", options);

  res.render('list',{Datday:date, NewListItems:items} );
});

app.post("/", function(req, res){
 items.push(req.body.newItem);

 res.redirect("/");

});

// request(options, function(error, response, body) {
// });

app.listen(3000,function(){
  console.log("Server is running now on port 3000");
});
