//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

let posts = [];

app.get('/', (req, res) => {
  res.render('index');
}); 

app.get('/profiles', (req, res) => {
  res.render('profiles', {posts: posts});
});

app.get('/compose', (req, res) => {
  res.render('compose');
});

app.post('/compose', (req, res) => {
  const post = {
    title: req.body.profileTitle,
    content: req.body.postBody
  };
  posts.push(post);
  res.redirect('/profiles');
});

app.get('/posts/:profileTitle', (req, res) => {
  const requestedTitle = _.lowerCase(req.params.profileTitle);
  posts.forEach(function (post) {
    const storedTitle = _.lowerCase(post.title);
    if (storedTitle === requestedTitle) {
      res.render('profile', {
        title: post.title,
        content: post.content
      });
    }
  });
});

app.listen(3000, () => {
    console.log('Server listening');
});



 



