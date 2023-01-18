
var express = require("express");
var path = require("path");


app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.set("/" , function(request, response) {
  response.render("index", {
    message: "Hey everyone! This is my webpage"
  });
});