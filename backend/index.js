const express = require('express');

//import the developer created component
const newsRouter = require('./routers/news');

//initialize the express
const app = express();

//using express static middleware
app.use(express.static('public'));
app.use(express.static('data/uploads'));
//setup prefix using router
app.use('/api', newsRouter);

//setup the port number
app.listen(5000, () => {
    console.log('Port is listening.');
});