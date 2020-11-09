const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const database = require('./models/database');
database.connect();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const index = require('./routes/index');
const accounts = require('./routes/accountsRoute');

app.use('/', index);
app.use('/accounts', accounts);
  
module.exports = app;