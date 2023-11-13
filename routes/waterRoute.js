const express = require('express');
const router = express.Router();

const water = require('../public/data/water')
const error = require('../public/middleware/errors')
const h1 = 'Water'
const desc = 'Water'


// APPLICATION LEVEL MIDDLEWARE
router.get('/', (req, res) => {
    const image = [water[0].image]
    const artist = [water[0].name]
    res.render('template', {image, artist, h1, desc});
});

router.post('/', (req, res, next) => {
    if(req.body.image && req.body.name) {
        if(water.find((a) => a.image == req.body.image)) {
            next(error(409), 'Image already exists');
        }
        const image = {
            id: water[water.length - 1].id + 1,
            image: req.body.image,
            name: req.body.name,
        }

        water.push(image);
        res.json(water[water.length - 1]);
    } else next(error(400, 'The image and photographers name are required'));
});

router.get('/:id', (req, res, next) => {
    const splash = water.find((a) => a.id == req.params.id);
    if(splash) {
        const image = [water[splash.id].image]
        const artist = [water[splash.id].name]
        res.render('template', {image, artist, h1, desc});

    } else {
        next()
    };
});

module.exports = router;