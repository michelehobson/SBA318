const express = require('express');
const router = express.Router();

const architecture = require('../public/data/architecture')
const error = require('../public/middleware/errors')
const h1 = 'Architecture'
const desc = 'Architecture'


// APPLICATION LEVEL MIDDLEWARE
router.get('/', (req, res) => {
    const image = [architecture[0].image]
    const artist = [architecture[0].name]
    res.render('template', {image, artist, h1, desc});
});

router.post('/', (req, res, next) => {
    if(req.body.image && req.body.name) {
        if(architecture.find((a) => a.image == req.body.image)) {
            next(error(409), 'Image already exists');
        }
        const image = {
            id: architecture[architecture.length - 1].id + 1,
            image: req.body.image,
            name: req.body.name,
        }

        architecture.push(image);
        res.json(architecture[architecture.length - 1]);
    } else next(error(400, 'The image and photographers name are required'));
});

router.get('/:id', (req, res, next) => {
    const structure = architecture.find((a) => a.id == req.params.id);
    if(structure) {
        const image = [architecture[structure.id].image]
        const artist = [architecture[structure.id].name]
        res.render('template', {image, artist, h1, desc});

    } else {
        next()
    };
});

module.exports = router;