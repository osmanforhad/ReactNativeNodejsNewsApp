const multer = require('multer');

//setup storage
const storage = multer.memoryStorage();

//export component for output
module.exports = multer({ storage });