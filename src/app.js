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
const offers = require('./routes/offersRoute');

app.use('/', index);
app.use('/accounts', accounts);
app.use('/offers', offers);
  
module.exports = app;