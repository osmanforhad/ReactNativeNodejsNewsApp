const express = require('express');
const router = express.Router();

//import the developer created component
const { createNews } = require('../controllers/news');
const { validator, result, validateFile } = require('../middleware/validator');

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

//export component for output
module.exports = router;