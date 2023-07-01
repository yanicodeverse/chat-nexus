import express from "express";
const app = express();

app.get("/api", (req, res) => {
  res.send("hello world");
});

app.get("/api/test", (req, res) => {
  res.send("hello foo bar is here");
});

app.listen(8000, () => console.log("listening on port 8000"));
