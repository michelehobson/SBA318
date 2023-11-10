const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const data = [
    {image:'https://images.pexels.com/photos/12180254/pexels-photo-12180254.jpeg?auto=compress&cs=tinysrgb&w=1600', name:'Ingo Joseph'},
    {image:'https://images.pexels.com/photos/3801347/pexels-photo-3801347.jpeg?auto=compress&cs=tinysrgb&w=1600', name:'Sven Huls'},
    {image:'https://images.pexels.com/photos/4215116/pexels-photo-4215116.jpeg?auto=compress&cs=tinysrgb&w=1600', name:'Gianluca Grisenti'},
    {image:'https://images.pexels.com/photos/4215104/pexels-photo-4215104.jpeg?auto=compress&cs=tinysrgb&w=1600', name:'Gianluca Grisenti'},
    {image:'https://images.pexels.com/photos/4819830/pexels-photo-4819830.jpeg?auto=compress&cs=tinysrgb&w=1600', name:'Rachel Claire'},
    {image:'https://images.pexels.com/photos/3791466/pexels-photo-3791466.jpeg?auto=compress&cs=tinysrgb&w=1600', name:'Jarod Lovecamp'},
    {image:'https://images.pexels.com/photos/12196392/pexels-photo-12196392.jpeg?auto=compress&cs=tinysrgb&w=1600', name:'Vasillis Karkalas'},
    {image:'https://images.pexels.com/photos/14360965/pexels-photo-14360965.jpeg?auto=compress&cs=tinysrgb&w=1600', name:'Syed Qaarif Andrabi'},
    {image:'https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=1600', name:'James Wheeler'},
    {image:'https://images.pexels.com/photos/2161954/pexels-photo-2161954.jpeg?auto=compress&cs=tinysrgb&w=1600', name:'Quang Nguyen Vinh'},
    {image:'https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=1600', name:'SenuScape'},
    {image:'https://images.pexels.com/photos/752035/pexels-photo-752035.jpeg?auto=compress&cs=tinysrgb&w=1600', name:'Adriaan Greyling'}
]
for(let i = 0; i < data.length; i++) {
    console.log(data[i].image)
    console.log(data[i].name)
    const pic = data[i].image;
    const artist = data[i].name;
    const photo = new JSDOM(`<body>
    <script>document.body.appendChild(document.createElement('div'));</script>`)
    // const photo = document.createElement('div');
    photo.innerHTML = `<img src=${pic}><figcaption>Photo By ${artist}</figcaption>`
    let parent = document.getElementById('images');
    parent.appendChild(photo);

}