const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// DEFINE ROUTE CONSTANTS
const animals = require('./routes/animalsRoute');
const architecture = require('./routes/architectureRoute');
const landscapes = require('./routes/landscapeRoute');
const people = require('./routes/peopleRoute');
const water = require('./routes/waterRoute');
const weather = require('./routes/weatherRoute');

// USE ROUTES
app.use('/animals', animals);
app.use('/architecture', architecture);
app.use('/landscapes', landscapes);
app.use('/people', people);
app.use('/water', water);
app.use('/weather', weather);


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