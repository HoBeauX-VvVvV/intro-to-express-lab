const express = require('express');

const app = express();
//app.use(morgan('dev'));

app.get('/greet/:userName', (req, res) => {
    res.send(`<h1>Hello ${req.params.userName}, it's great to see you again</h1>`)
});

app.get('/roll/:number', (req, res) => {
    if(isNaN(req.params.number)) {
        res.send('<h1>You must enter a number</h1>')
    } else {
        res.send(`<h1>You rolled a ${req.params.number}</h1>`)
    }
});

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


app.get('/collectibles/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if(isNaN(index) || index < 0 || index>= collectibles.length) {
        res.send(`<h1>This item is not in stock. Please check back soon!</h1>`);
    }
    res.send(`<h1>So, you want the ${collectibles[index].name}? 
        For $${collectibles[index].price}, it can be yours!</h1>`);
});

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) => {
    let filteredShoes = shoes;

    if (!isNaN(req.query['min-price'])) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= req.query['min-price']);
    } if (!isNaN(req.query['max-price'])) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= req.query['max-price']);
    } if (req.query.type) {
        filteredShoes = filteredShoes.filter(shoe => shoe.type === req.query.type);
    };
        
    res.send(filteredShoes);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});