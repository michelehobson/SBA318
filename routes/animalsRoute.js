const express = require('express');
const router = express.Router();

const animals = require('../public/data/animals')
const error = require('../public/middleware/errors')
const h1 = 'Animals'
const desc = 'Animal'

// APPLICATION LEVEL MIDDLEWARE
router.get('/', (req, res) => {
    const image = [animals[0].image]
    const artist = [animals[0].name]
    res.render('template', {image, artist, h1, desc});
});

router.post('/', (req, res, next) => {
    if(req.body.image && req.body.name) {
        if(animals.find((a) => a.image == req.body.image)) {
            next(error(409), 'Image already exists');
        }
        const image = {
            id: animals[animals.length - 1].id + 1,
            image: req.body.image,
            name: req.body.name,
        }

        animals.push(image);
        res.json(animals[animals.length - 1]);
    } else next(error(400, 'The image and photographers name are required'));
});

router.get('/:id', (req, res, next) => {
    const animal = animals.find((a) => a.id == req.params.id);
    if(animal) {
        const image = [animals[animal.id].image]
        const artist = [animals[animal.id].name]
        res.render('template', {image, artist, h1, desc});

    } else {
        next()
    };
});

module.exports = router;
