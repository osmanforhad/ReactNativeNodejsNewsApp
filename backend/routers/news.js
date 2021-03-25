const express = require('express');
const router = express.Router();

//import the developer created component
const { createNews, getAllNews, getSingleNews, getNewsByCategory, searchPosts } = require('../controllers/news');
const { validator, result, validateFile, } = require('../middleware/validator');

//pass storage inside the multer middleware
const uploads = require('../middleware/multer');

//setup the create route
router.post(
    '/create',
    uploads.single('thumbnail'),
    validator,
    result,
    validateFile,
    createNews
);

//setup route for get all data
router.get('/news', getAllNews);

//setup route for get single data
router.get('/news/single/:id', getSingleNews);

//setup route for get data by category
router.get('/news/:category/:qty?', getNewsByCategory);

//setup route for serach functionality
router.post('/news/search/:query', searchPosts);

//export component for output
module.exports = router;