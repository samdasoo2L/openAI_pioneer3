const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ask = require("./sample");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit-form", async (req, res) => {
  // Do something with the form data, such as save it to a database
  const name = req.body.name;
  console.log("Name : ", name);

  // Ask OpenAI
  const result = await ask(name);

  // Send a response indicating success
  res.send(result);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
