const express = require('express');

const app = express();
//app.use(morgan('dev'));

app.get('/greet/:userName', (req, res) => {
    res.send(`<h1>Hello ${req.params.userName}, it's great to see you again</h1>`)
})

app.get('/roll/:number', (req, res) => {
    if(isNaN(req.params.number)) {
        res.send('<h1>You must enter a number</h1>')
    } else {
        res.send(`<h1>You rolled a ${req.params.number}</h1>`)
    }
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});