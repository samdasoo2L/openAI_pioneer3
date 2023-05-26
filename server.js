const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ask = require("./openAI");

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
    `한국 TV프로그램 "${name}"의 내용을 100자 내로 요약해줘`
  );
  console.log("result1 : ", result_1);
  const result_2 = await ask(`한국 TV프로그램 "${name}"의 장르만 알려줘`);
  console.log("result2 : ", result_2);
  const result_3 = await ask(
    `한국 TV프로그램 "${name}"와 비슷한 한국 TV프로그램 이름만 5개 알려줘`
  );
  console.log("result3 : ", result_3);
  const result = [result_1, result_2, result_3];
  // Send a response indicating success
  res.send(result);
});

app.listen(8080, () => {
  console.log("Server started on port 3000");
});
