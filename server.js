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
  const result_1 = await ask(
    `한국 TV프로그램 "${name}" 줄거리 요약해서 100자 이내로 알려줘`
  );
  const result_2 = await ask(`한국 TV프로그램 "${name}" 장르만 알려줘`);
  const result_3 = await ask(
    `한국 TV프로그램 "${name}"와 비슷한 한국 TV프로그램 이름만 5개 알려줘`
  );
  const result = [result_1, result_2, result_3];
  // Send a response indicating success
  res.send(result);
});

app.listen(3020, () => {
  console.log("Server started on port 3000");
});
