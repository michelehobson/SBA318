// THESE FUNCTIONS WILL HOPEFULLY GIVE FUNCTIONALITY TO THE ARROW BUTTONS, WE'LL SEE!!!
// THE FOLLOWING LINE ONLY FIRES WHEN THE TEMPLATE IS RENDERED
// <div id="b2"><button id="rightBtn" class="arrows" onclick=<% goRight() %>>&#10097;</button></div>
// THE FOLLOWING LINE PRODUCES THE ERROR ON LINE 6
// <div id="b2"><button id="rightBtn" class="arrows" onclick=<%- include(goRight()) %>>&#10097;</button></div>

const express = require('express');
const router = express.Router();


function animalsGoRight(index) {
    const animals = require('../data/animals');
    console.log('GOING RIGHT')
    if (index < 12)  {
        return animals[++index].image;
    } else {
        return animals[0].image;
    }
}
function animalsGoLeft(index) {
    const animals = require('../data/animals');
    console.log('GOING LEFT')
    if (index > 0)  {
        return animals[--index].image;
    } else {
        return animals[0].image;
    }
}
function architectureGoRight(index) {
    const architecture = require('../data/architecture');
    console.log('GOING RIGHT')
    if (index < 12)  {
        return architecture[++index].image;
    } else {
        return architecture[0].image;
    }
}
function architectureGoLeft(index) {
    const architecture = require('../data/architecture');
    console.log('GOING LEFT')
    if (index > 0)  {
        return architecture[--index].image;
    } else {
        return architecture[0].image;
    }
}
function homeGoRight(index) {
    const home = require('../data/home');
    console.log('GOING RIGHT')
    if (index < 12)  {
        return home[++index].image;
    } else {
        return home[0].image;
    }
}
function homeGoLeft(index) {
    const home = require('../data/home');
    console.log('GOING LEFT')
    if (index > 0)  {
        return home[--index].image;
    } else {
        return home[0].image;
    }
}
function landscapesGoRight(index) {
    const landscapes = require('../data/landscapes');
    console.log('GOING RIGHT')
    if (index < 12)  {
        return landscapes[++index].image;
    } else {
        return landscapes[0].image;
    }
}
function landscapesGoLeft(index) {
    const landscapes = require('../data/landscapes');
    console.log('GOING LEFT')
    if (index > 0)  {
        return landscapes[--index].image;
    } else {
        return landscapes[0].image;
    }
}
function peopleGoRight(index) {
    const people = require('../data/people');
    console.log('GOING RIGHT')
    if (index < 12)  {
        return people[++index].image;
    } else {
        return people[0].image;
    }
}
function peopleGoLeft(index) {
    const people = require('../data/people');
    console.log('GOING LEFT')
    if (index > 0)  {
        return people[--index].image;
    } else {
        return people[0].image;
    }
}
function waterGoRight(index) {
    const water = require('../data/water');
    console.log('GOING RIGHT')
    if (index < 12)  {
        return water[++index].image;
    } else {
        return water[0].image;
    }
}
function waterGoLeft(index) {
    const water = require('../data/water');
    console.log('GOING LEFT')
    if (index > 0)  {
        return water[--index].image;
    } else {
        return water[0].image;
    }
}
function weatherGoRight(index) {
    const weather = require('../data/weather');
    console.log('GOING RIGHT')
    if (index < 12)  {
        return weather[++index].image;
    } else {
        return weather[0].image;
    }
}
function weatherGoLeft(index) {
    const weather = require('../data/weather');
    console.log('GOING LEFT')
    if (index > 0)  {
        return weather[--index].image;
    } else {
        return weather[0].image;
    }
}


// module.exports = goRight


















// const animals = require('../data/animals')

// let index = 5;
// function goRight() {
//     console.log('GOING RIGHT: ' + Object.values(animals[index]))
//     if (index < 12)  {
//         return Object.values(animals[++index].image);
//     } else {
//         return Object.values(animals[0].image);
//     }
// }
// module.exports = goRight

// function goRight(index, who) {
//     let param = '';
//     switch (who) {
//         case 1:
//             param = require('../data/animals');
//             break;

//         default:
//             break;
//     }
        
    
//     console.log('GOING RIGHT: ' + Object.values(param[index]))
//     if (index < 12)  {
//         return Object.values(param[++index].image);
//     } else {
//         return Object.values(param[0].image);
//     }
// }

module.exports = animalsGoRight;