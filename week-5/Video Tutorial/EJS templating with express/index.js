let express = require("express");
let app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const student = {
    name: "Jon Doe",
    email: "jon@email.com",
    age: "30",
    description: " lorem ipsum blahh blah blah",
  };
  res.render("pages/home", { students: student });
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.get("/contact", (req, res) => {
  res.render("pages/contact");
});

app.listen(4000);
