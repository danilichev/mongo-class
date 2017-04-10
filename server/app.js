const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongo-class');

app.use(morgan('common'));
app.use(cors());
app.use(bodyParser.json());

router(app);

module.exports = app;
