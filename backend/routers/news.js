const express = require('express');
const router = express.Router();
const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');

//import the developer created component
const News = require('../news/news');
const imageProcess = require('../util/imageProcess');

//for save the data
const storage = multer.memoryStorage();

//pass storage inside the multer
const uploads = multer({ storage })

//setup the create route
router.post('/create', uploads.single('thumbnail'), async(req, res) => {

    //define and create id
    const news = new News();
    const id = news.createId();

    //calling the imageProcess file for process the image operation
    const imageName = await imageProcess(req, id);

    //for save the data
    news.create(req.body, id, imageName); // http://localhost:5000/image-name

    res.send('submit successful');
})

//export component for output
module.exports = router;