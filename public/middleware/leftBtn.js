// THESE FUNCTIONS WILL HOPEFULLY GIVE FUNCTIONALITY TO THE ARROW BUTTONS, WE'LL SEE!!!
// THE FOLLOWING LINE ONLY FIRES WHEN THE TEMPLATE IS RENDERED
// <div id="b2"><button id="rightBtn" class="arrows" onclick=<% goRight() %>>&#10097;</button></div>
// THE FOLLOWING LINE PRODUCES THE ERROR ON LINE 6
// <div id="b2"><button id="rightBtn" class="arrows" onclick=<%- include(goRight()) %>>&#10097;</button></div>


function goLeft(index, param) {
    console.log('GOING LEFT: ' + param)
    if (index > 0)  {
        return param[--index].image;
    } else {
        return param[0].image;
    }
}

module.exports = goLeft;