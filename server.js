const express = require('express');

const app = express();
//app.use(morgan('dev'));

app.get('/greet/:userName', (req, res) => {
    console.log(req.params.userName)
    res.send(`<h1>Hello ${req.params.userName}, it's great to see you again</h1>`)
})



app.listen(3000, () => {
    console.log('Listening on port 3000');
});