import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-Routes";
const app = express();

app.use(express.json());
app.use("/v1/user", router);

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
