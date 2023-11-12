const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// DEFINE ROUTE CONSTANTS
const animals = require('./routes/animalsRoute');
// const {error} = require('console');
// const architecture = require('./routes/architectureRoute');
// const landscapes = require('./routes/landscapesRoute');
// const people = require('./routes/peopleRoute');
// const water = require('./routes/waterRoute');
// const weather = require('./routes/weatherRoute');
// const home = require('./routes/homeRoute');

// USE ROUTES
app.use('/animals', animals);
// app.use('/data/architecture', architecture);
// app.use('/data/home', home);
// app.use('/data/landscapes', landscapes);
// app.use('/data/people', people);
// app.use('/data/water', water);
// app.use('/data/weather', weather);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// RENDER THE HOME PAGE
app.get('/', (req, res) => {
    res.render('home')
});

// ERROR HANDLING
const error = require('./public/middleware/errors')

app.use((req, res, next) => {
    next(error(404, 'Page Not Found'))
})

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message})
});

// LISTENER
app.listen(1962, () => {
    console.log(`Listening on the year that God changed the world!`)
})