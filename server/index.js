const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config()

const controller = require(__dirname + './controller');

const PORT = 4000; //Set Port #

app.listen( PORT, () => { console.log(`Server listening on port ${PORT}.`); } );