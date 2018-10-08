const express = require('express');

const MongoClient = require('mongodb').MongoClient;
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.json());

const port = process.env.PORT || 5000;
const dburl = process.env.DB_URL;

MongoClient.connect(dburl, (err, database) => {
    if (err) console.log(err);
    require('./routes/index')(app, database)  
app.listen(port, () => {
})
})

app.use('/', express.static('./public'));