const express = require('express');

//import the developer created component
const News = require('./news/news');

//initialize the express
const app = express();

//using express static middleware
app.use(express.static('public'))


const news = new News()

const test = async() => {
    const data = await news.getByCategory('tech');
    console.log(data);
}

test();

//setup the port number
app.listen(5000, () => {
    console.log('Port is listening.');
});