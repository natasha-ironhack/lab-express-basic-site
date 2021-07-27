const express = require("express");

const app = express();

app.use(express.static("public"));

// route
app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/index.html");
});

// http://localhost:8080/home
//the /home leads to the about page here
app.get("/home", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/users/:whatever", (request, response, next) => {
  console.log(request.params);
  console.log(request.query);
  // response.sendFile(__dirname + '/views/home.html');
});

app.get("/works", (request, response, next) => {
  response.sendFile(__dirname + "/views/works.html");
});

app.listen(8000, () => console.log("Im listening on port 8000!"));
