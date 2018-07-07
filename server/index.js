const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config()
const controller = require(__dirname + '/controller');

const PORT = 4000; //Set Port #

const app = express();
app.use( bodyParser.json() );

app.listen( PORT, () => { console.log(`Server listening on port ${PORT}.`); } );

massive( process.env.CONNECTION_STRING ).then( dbInstance => { //This code finds CONNECTION_STRING from .env and lets massive use it to access the database.
    app.set('db', dbInstance) // The database is stored in 'db' for later use.
    }).catch( err => console.log('------error: massive', err) );

app.get('/api/inventory', controller.read)

app.post('/api/product', controller.create)

app.delete('/api/product/:id', controller.delete)

app.put('/api/product', controller.update)

