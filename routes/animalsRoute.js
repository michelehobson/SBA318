const express = require('express');
const router = express.Router();

const animals = require('../public/data/animals')

// RETURN ALL IMAGES
router.get('/', (req, res) => {
    // console.log("here")
    const image = [animals[0].image]
    res.render('animals', {image});
})

// GET SPECIFIC IMAGE
router.get('/:id', (req, res, next) => {
        const animal = animals.find((a) => a.id == req.params.id);
        console.log(animal.id)
        if(animal) {
            const image = [animals[animal.id].image]
            const artist = [animals[animal.id].name]
            res.render('animals', {image, artist});
        } else {
            next()
        };
    })

module.exports = router;
