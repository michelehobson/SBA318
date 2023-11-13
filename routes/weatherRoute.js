const express = require('express');
const router = express.Router();

const weather = require('../public/data/weather')
const error = require('../public/middleware/errors')
const h1 = 'Weathers'
const desc = 'Weather'


// APPLICATION LEVEL MIDDLEWARE
router.get('/', (req, res) => {
    const image = [weather[0].image]
    const artist = [weather[0].name]
    res.render('weather', {image, artist, h1, desc});
});

router.post('/', (req, res, next) => {
    if(req.body.image && req.body.name) {
        if(weather.find((a) => a.image == req.body.image)) {
            next(error(409), 'Image already exists');
        }
        const image = {
            id: weather[weather.length - 1].id + 1,
            image: req.body.image,
            name: req.body.name,
        }

        weather.push(image);
        res.json(weather[weather.length - 1]);
    } else next(error(400, 'The image and photographers name are required'));
});

router.get('/:id', (req, res, next) => {
    const globalWarming = weather.find((a) => a.id == req.params.id);
    if(globalWarming) {
        const image = [weather[globalWarming.id].image]
        const artist = [weather[globalWarming.id].name]
        res.render('weather', {image, artist, h1, desc});

    } else {
        next()
    };
});

module.exports = router;