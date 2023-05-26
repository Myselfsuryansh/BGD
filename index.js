const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome Again");
});

app.post("/webhook/leadAdded", (req, res) => {
  let data = req.body;
  console.log("name: " + data.name);
  console.log("email: " + data.email);
  console.log("phone: " + data.phone);

  res.send("Welcome Webhook");
});

app.listen(4000, (req, res) => {
  console.log("Express API is running at port 4000");
});
