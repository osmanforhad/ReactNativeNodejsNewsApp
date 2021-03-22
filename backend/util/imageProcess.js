const fs = require('fs');
const sharp = require('sharp');

//define function component for image process
const imageProcess = async(req, id) => {
    //check the upload folder is exit or not then create the folder
    fs.access('./data/uploads', (err) => {
        if (err) {
            fs.mkdirSync('./data/uploads')
        }
    })

    //define name format without any space
    const formatedName = req.file.originalname.split(' ').join('-');

    //define filename
    const fileName = `${id}-${formatedName}`;

    try {
        //upload the file and resize it with a unique name
        await sharp(req.file.buffer).resize({ width: 615, height: 350 }).toFile(`./data/uploads/${fileName}`);
    } catch (error) {
        console.log('Error while processing image', error);
    }

    return fileName;

};

//export the function component for output
module.exports = imageProcess;