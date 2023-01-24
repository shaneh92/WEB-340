/*
============================================
; Title:  index.js
; Author: Shane Hingtgen
; Date:   1/232023
; Description: Server and route file for hello-world app
;===========================================
*/
"use-strict";
//imports
const express = require("express");
const logger = require("pino")(); //does not work without the (); at the end
const path = require("path");

//creates express app
const app = express();

//set views
app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

//PORT
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.render("index");
});

//starts server on port 3000
app.listen(PORT, () => {
  logger.info("Hello world application started and listening on port " + PORT);
});
