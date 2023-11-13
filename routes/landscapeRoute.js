const express = require('express');
const router = express.Router();

const landscapes = require('../public/data/landscapes')
const error = require('../public/middleware/errors')
const h1 = 'Landscapes'
const desc = 'Landscape'


// APPLICATION LEVEL MIDDLEWARE
router.get('/', (req, res) => {
    const image = [landscapes[0].image]
    const artist = [landscapes[0].name]
    res.render('template', {image, artist, h1, desc});
});

router.post('/', (req, res, next) => {
    if(req.body.image && req.body.name) {
        if(landscapes.find((a) => a.image == req.body.image)) {
            next(error(409), 'Image already exists');
        }
        const image = {
            id: landscapes[landscapes.length - 1].id + 1,
            image: req.body.image,
            name: req.body.name,
        }

        landscapes.push(image);
        res.json(landscapes[landscapes.length - 1]);
    } else next(error(400, 'The image and photographers name are required'));
});

router.get('/:id', (req, res, next) => {
    const landscape = landscapes.find((a) => a.id == req.params.id);
    if(landscape) {
        const image = [landscapes[landscape.id].image]
        const artist = [landscapes[landscape.id].name]
        res.render('template', {image, artist, h1, desc});

    } else {
        next()
    };
});

module.exports = router;