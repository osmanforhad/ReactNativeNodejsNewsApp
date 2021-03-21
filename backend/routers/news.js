const express = require('express');
const router = express.Router();

//setup the create route
router.post('/create', (req, res) => {
    res.send('submit successful');
})

//export component for output
module.exports = router;