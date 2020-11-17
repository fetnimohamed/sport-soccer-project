// Import Express Module from node Module
const express = require('express');
// Create express application
const app = express();

app.get('/allMatches',(req,res)=>{
    console.log('Here In BE');
});
// Export la var app
module.exports = app;