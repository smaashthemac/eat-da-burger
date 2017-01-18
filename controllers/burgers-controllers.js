var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// create all routes
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create([
    "burgerName"
  ], [
    req.body.burgerName
  ], function() {
    res.redirect("/burgers");
  });
});

module.exports = router;
