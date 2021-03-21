const express = require('express');

//initialize the express
const app = express();

//using express static middleware
app.use(express.static('public'))

//setup the port number
app.listen(5000, () => {
    console.log('Port is listening.');
});