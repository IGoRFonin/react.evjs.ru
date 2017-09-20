'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = 8090

const app = express();

app.use(bodyParser.json())

app.listen(port, function(err) {
  if(err) {
    console.log(err);
  }

  console.log('Listenning at port 8090');
});
