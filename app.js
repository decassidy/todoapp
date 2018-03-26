const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Port
const port = 3000;

// Init the apply
const app = express();

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/todoapp';


// Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// View Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Connect to MongoDB Database
MongoClient.connect(url, (err, database) => {
  console.log('MongoDB Connected...');
  if(err) throw err;

  db = database;
  Todos = db.collections('todos');
});

// Routes
app.get('/', (req, res, next) => {
  res.render('index');
});
