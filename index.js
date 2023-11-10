const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./styles'));
app.use(express.static('public/data/animals'));
app.use(express.static('public/data/architecture'));
app.use(express.static('public/data/home'));
app.use(express.static('public/data/landscapes'));
app.use(express.static('public/data/people'));
app.use(express.static('public/data/water'));
app.use(express.static('public/data/weather'));

// app.use((req, res, next) => {
//     const err = new Error('Not Found Today')
//     err.status = 404;
//     next(err);
// })


const animals = require('./public/data/animals');
const architecture = require('./public/data/architecture');
const landscapes = require('./public/data/landscapes');
const people = require('./public/data/people');
const water = require('./public/data/water');
const weather = require('./public/data/weather');
const home = require('./public/data/home');
// const {options} = require('./routes/animalsRoute');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// const content = '';
// const rendered = content
//     .toString()
//     .replaceAll('#title#', `${option.title}`)
//     .replace('#h1#', `${option.h1}`)
//     .replace('#content#', `${option.content}`);

app.get('/', (req, res) => {
    res.render('home')
});
app.get('/animals', (req, res) => {
    res.render('animals')
});
app.get('/architecture', (req, res) => {
    res.render('architecture')
});
app.get('/landscapes', (req, res) => {
    res.render('landscapes')
});
app.get('/people', (req, res) => {
    res.render('people')
});
app.get('/water', (req, res) => {
    res.render('water')
});
app.get('/weather', (req, res) => {
    res.render('weather')
});
// app.get('/', (req, res) => {});

app.listen(1962, () => {
    console.log('Listening on the year that God changed the world!')
})