const express = require('express');
const router = express.Router();

const error = require('../public/middleware/errors')

// APPLICATION LEVEL MIDDLEWARE
router.get('/', (req, res) => {
    const image = [home[0].image]
    const artist = [home[0].name]
    res.render('template', {image, artist, h1, desc});
});

module.exports = router;