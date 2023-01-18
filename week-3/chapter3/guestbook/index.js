
// const http = require("http");
const path = require("path");
const express = require("express");
const logger = require("morgan");
const { response } = require("express");
// const bodyParser = require("body-parser");



const app = express();

const entries = [];
app.locals.entries = entries;

app.use(logger("dev"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT||3000;
app.get("/", function(request, response) {
  response.render("index");
});

app.get("/new-entry", function(req, res) {
  response.render("new-entry");
});

app.post("/new-entry", function(request, response) {
  if (!request.body.title || !request.body.body) {
    response.status(400).send("Entries must have a title and a body.");
    return;
  }
  entries.push({
    title: request.body.title,
    body: "/new-entry",
    published: new Date()
  });
  response.redirect("/");
});

app.use(function(request, response) {
  response.status(404).render("404");
});

app.listen(PORT, () => { console.log('Guestbook app started on port: ' + PORT) });

