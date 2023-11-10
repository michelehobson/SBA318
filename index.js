const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./styles'));

const animals = require('./dataRoutes/animals');
const architecture = require('./dataRoutes/architecture');
const landscapes = require('./dataRoutes/landscapes');
const people = require('./dataRoutes/people');
const water = require('./dataRoutes/water');
const weather = require('./dataRoutes/weather');
const home = require('./dataRoutes/home');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {res.render('home')});
app.get('/animals', (req, res) => {res.render('animals')});
app.get('/landscapes', (req, res) => {res.render('landscapes')});
app.get('/people', (req, res) => {res.render('people')});
app.get('/water', (req, res) => {res.render('water')});
app.get('/weather', (req, res) => {res.render('weather')});
// app.get('/', (req, res) => {});

app.listen(1962, () => {
    console.log('Listening on the year that God changed the world!')
})