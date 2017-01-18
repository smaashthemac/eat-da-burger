var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var port = 3000;

var app = express();

// serve static content for the app from the "public" directory in the application
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes and give the server access to them
var routes = require("./controllers/burgers-controllers.js");

app.use("/", routes);

app.listen(port);
console.log("app listening on port " + port);

// create database YES
// create tables YES
// require express, method-override, body-parser YES
// connect to server YES
// connect to database YES
// set up handlebars
// create html form - submit button
// create - add to database table
// the entered burger goes to one side of the screen
// 	is numbered
// has the option of eating it
// 	which updates and goes to another table
// 	thus eaten burgers go to the other side of the screen
// data is persistent