const animals = require('../public/data/animals')

function goRight() {
    console.log('GOING RIGHT')
    const index = 5//localStorage.getItem(image);
    const newImage = document.querySelector('img')
    newImage.src = animals[index].image;
}
