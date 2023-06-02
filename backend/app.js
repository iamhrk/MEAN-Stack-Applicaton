const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./model/post');
const app = express();

mongoose.connect("mongodb+srv://calmthestorm98:9MJY4EDvVCXWHSTY@cluster0.rca2smj.mongodb.net/node-angular?retryWrites=true&w=majority")
  .then( () => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Database connection failed!");
  })

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader(
    'Access-Control-Allow-Origin', '*'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});


app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save();
  res.status(201).json({
    message: "response send successfully"
  })
});

app.get("/api/posts", (req, res, next) => {

  Post.find().then( documents => {
    res.status(200).json({
      message: "Posts fetched successfully",
      posts: documents
    });
  });
});

app.delete("/api/posts/:id",(req, res, next) => {
  console.log(req.params.id);
  Post.deleteOne({ _id: req.params.id }).then((deletedPost)=>{
    console.log(deletedPost);
  });
  res.status(200).json({ message: "Post deleted!" });
});

module.exports = app;
