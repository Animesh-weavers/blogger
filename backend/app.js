import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect(
    "mongodb+srv://animesh2022:animeshdey1234@cluster0.e7jce.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected to database and listening to localhost: 5000!!")
  )
  .catch((err) => {
    console.log(err);
  });
