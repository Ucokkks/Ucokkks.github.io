data = [{
    'img1': 'aset/hehe.jpg',
    'img2': 'aset/foto.png',
    'title': 'Web E-Commerce',
    'subtitle': 'Zenitsu',
    'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}, {
    'img1': 'aset/foto.png',
    'img2': 'aset/foto.png',
    'title': 'Web Design',
    'subtitle': 'The Gallery',
    'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}]

let container = document.querySelector('.container-project')

data.array.forEach(element => {
    container.innerHTML +=
    `<div class = "project">
    <div class = img-project">
        <img src= "${element.img1}" alt=""> 
        <img src= "`+element.img2+`" alt="">
    </div>
    <div class = "desc-project">
        <h1>Web ${element.title}</h1>
        <h2>${element.subtitle}</h2>
        <p>${element.desc}</p>
    </div>
    <button class = "read-more">Read More</button>
    </div>`


});


