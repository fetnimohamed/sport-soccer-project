//* Import Express Module from node Module
const express = require('express');
//* Create express application
const app = express();
//!import mongoose
const mongoose = require('mongoose');
//!conection to DB
mongoose.connect('mongodb://localhost:27017/soccerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const Match = require('./models/match');
//todo security config
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

app.get('/allMatches', (req, res) => {
  console.log('Here In BE');

  Match.find((err, documents) => {
    if (err) {
      console.log('error concting to DB');
    } else {
      res.status(200).json({
        message: 'ok !!',
        matches: documents
      });
    }
  });

});
// Export la var app
module.exports = app;
