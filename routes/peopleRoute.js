const express = require('express');
const router = express.Router();

const people = require('../public/data/people')
const error = require('../public/middleware/errors')
const h1 = 'People'
const desc = 'People'


// APPLICATION LEVEL MIDDLEWARE
router.get('/', (req, res) => {
    const image = [people[0].image]
    const artist = [people[0].name]
    res.render('template', {image, artist, h1, desc});
});

router.post('/', (req, res, next) => {
    if(req.body.image && req.body.name) {
        if(people.find((a) => a.image == req.body.image)) {
            next(error(409), 'Image already exists');
        }
        const image = {
            id: people[people.length - 1].id + 1,
            image: req.body.image,
            name: req.body.name,
        }

        people.push(image);
        res.json(people[people.length - 1]);
    } else next(error(400, 'The image and photographers name are required'));
});

router.get('/:id', (req, res, next) => {
    const person = people.find((a) => a.id == req.params.id);
    if(person) {
        const image = [people[person.id].image]
        const artist = [people[person.id].name]
        res.render('template', {image, artist, h1, desc});

    } else {
        next()
    };
});

module.exports = router;