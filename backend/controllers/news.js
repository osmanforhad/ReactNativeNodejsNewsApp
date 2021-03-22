//import the developer created component
const News = require('../news/news');
const imageProcess = require('../util/imageProcess');

const createNews = async(req, res) => {

    //define and create id
    const news = new News();
    const id = news.createId();

    try {

        //calling the imageProcess file for process the image operation
        const imageName = await imageProcess(req, id);

        //for save the data
        news.create(req.body, id, imageName); // http://localhost:5000/image-name

        res.send('submit successful');
    } catch (error) {
        console.log('Error while creating news', error.message);
    }
}

//export component for out put
module.exports = {
    createNews
}