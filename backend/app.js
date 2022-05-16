import express from "express";

const app = express();

app.use("/api", (req, res, next) => {
  res.send("Hello world");
});

app.listen(5000, () => {
  console.log("Server is running on port: 5000");
});
