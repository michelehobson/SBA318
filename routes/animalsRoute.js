const express = require('express');
const router = express.Router();

const animals = require('../data/animals');

// RETURN ALL IMAGES
router.get('/', (req, res) => {
    res.json(animals);
})

// UPLOAD AN IMAGE
router.post((req, res) => {
    if(req.body.image && req.body.name) {
        if(animals.find((a) => i.image == req.body.image)) {
            res.json({error: 'Image already exist'})
            return;
        }

        const animal = {
            id: animals[animals.length - 1].id + 1,
            image: req.body.image,
            name: req.body.name,
        };
        animals.push(animal);
        res.json(animals[animals.length -1]);
    }
})

// GET SPECIFIC IMAGES
router.get('/:id', (req, res, next) => {
    const animal = animals.find((a) => i.id == req.params.id);
    if(animal) {
        res.json(animal);
    } else next();

})

// UPDATE IMAGE
router.delete((req, res, next) => {
    const animal = animals.find((a, i) => {
        if(a.id == req.params.id) {
            animals.splice(a, 1);
            return true;
        }
    })
    if(animal) {
        res.json(animal);
    } else next();
})

module.exports = router;
