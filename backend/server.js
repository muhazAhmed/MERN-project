const express = require("express");
const app = express();
const dotenv = require("dotenv");
const notes = require("./data/notes");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGODB,{
    useNewURLParser: true,
    useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDB is connected...");
  })
  .catch((error) => {
    console.log("Sorry, couldn't connect to MongoDB !");
  });

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.listen(process.env.PORT || 5000, function () {
  console.log("Express app running on port " + (process.env.PORT || 5000));
});
