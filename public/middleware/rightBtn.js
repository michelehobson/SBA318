// THESE FUNCTIONS WILL HOPEFULLY GIVE FUNCTIONALITY TO THE ARROW BUTTONS, WE'LL SEE!!!
// THE FOLLOWING LINE ONLY FIRES WHEN THE TEMPLATE IS RENDERED
// <div id="b2"><button id="rightBtn" class="arrows" onclick=<% goRight() %>>&#10097;</button></div>
// THE FOLLOWING LINE PRODUCES THE ERROR ON LINE 6
// <div id="b2"><button id="rightBtn" class="arrows" onclick=<%- include(goRight()) %>>&#10097;</button></div>

const express = require('express');
const router = express.Router();

function goRight(index, who) {
    let param = '';
    switch (who) {
        case 1:
            param = require('../data/animals');
            break;

        default:
            break;
    }
        
    console.log('GOING RIGHT: ' + Object.values(param[index]))
    if (index < 12)  {
        return Object.values(param[++index].image);
    } else {
        return Object.values(param[0].image);
    }
}

module.exports = goRight