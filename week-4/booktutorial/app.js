const express = require("express");
const morgan = require("morgan");
const path = require("path");
// const fs = require("fs");

const app = express();
app.use(morgan("short"));

const staticPath = path.join(__dirname, "static");

// app.use(function (req, res, next) {
//   console.log("Request IP: " + req.url);
//   console.log("Request date: " + new Date());
//   next();
// });

// app.use(function (req, res, next) {
//   const filePath = path.join(__dirname, "static", req.url);
//   fs.stat(filePath, function (err, fileInfo) {
//     if (err) {
//       next();
//       return;
//     }
//     if (fileInfo.isFile()) {
//       //   res.sendFile(filePath);
//       // } else {
//       next();
//     }
//   });
// });

app.use(function (req, res) {
  res.status(404);
  res.send("file not found!");
});

app.use(function (err, req, res, next) {
  res.status(500);
  res.send("Internal server error.");
});

app.listen(3000, function () {
  console.log("App started on port 3000");
});
