const express = require('express');

const app = express();

app.use("/api/posts", (req, res, next) => {
  const posts = [{
    id : "dfhasdfklj2jk1212",
    title : "First server side post",
    content: "First server side post content"
  },
  {
    id: "fadjkldjakfjakj1214",
    title: "Second server side post",
    content: "Second server side post content"
  }
];

  res.status(200).json({
    message: "Posts fetched successfully",
    posts: posts
  });
});

module.exports = app;
