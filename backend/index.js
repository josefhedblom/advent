const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/test", (req, res) => {
  res.json({ messag: "Hello World" });
});

app.listen(3060, () => {
  console.log("Server listning on port: 3060");
});
