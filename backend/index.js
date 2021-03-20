const express = require('express');

//initialize the express
const app = express();

//route setup
app.get('/', (req, res) => {
    res.send('<h1>Hello from server</h1>')
})

//setup the port number
app.listen(5000, () => {
    console.log('Port is listening.');
});