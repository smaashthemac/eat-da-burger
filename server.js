var express = require("express");
var methodOverride = require("mothod-override");
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