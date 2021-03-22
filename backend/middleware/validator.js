const { check, validationResult } = require('express-validator');

//array for define the category value
const exceptedCategory = ['entertainment', 'political', 'tech', 'breaking-news'];

//define the validator
const validator = [
    check('title').trim().not().isEmpty().withMessage('Title is required!'),
    check('content').trim().not().isEmpty().withMessage('Must have some content!'),
    check('category').isIn(exceptedCategory).withMessage('Select at list one category!')
]

//setup result as a middleware function
const result = (req, res, next) => {
    const result = validationResult(req);

    //check is there any error or not
    const hasError = !result.isEmpty();

    if (hasError) {
        //error mesage
        const error = result.array()[0].msg
        res.json({ success: false, message: error })
    }

    //is everything okey then
    next();
};

//setup middleware function for custom image validation
const validateFile = (req, res, next) => {
    //define the file type
    const expectedFileType = ['png', 'jpg', 'jpeg'];

    if (!req.file) {
        return res.json({ success: false, message: 'Image is required!' })
    }
    //define the file extension
    const fileExtension = req.file.mimetype.split('/').pop();


    if (!expectedFileType.includes(fileExtension)) {
        return res.json({ success: false, message: 'Image file is not valid!' })
    }

    next();
};

//export component for out put
module.exports = {
    validator,
    result,
    validateFile
}