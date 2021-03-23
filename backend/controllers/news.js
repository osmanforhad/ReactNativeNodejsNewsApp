//import the developer created component
const News = require('../news/news');
const imageProcess = require('../util/imageProcess');

//initial the News class
const news = new News();

//fucntion for create news
const createNews = async(req, res) => {

    //define and create id
    const id = news.createId();

    try {

        //calling the imageProcess file for process the image operation
        const imageName = await imageProcess(req, id);

        //for save the data
        news.create(req.body, id, imageName); // http://localhost:5000/image-name

        res.json({
            success: true,
            message: 'Post created successfully.'
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Something went wrong, server error!'
        });
        console.log('Error while creating news', error.message);
    }
};

//function for get all data
const getAllNews = async(req, res) => {
    try {
        const data = await news.getAll();
        res.json({ success: true, news: data })
    } catch (error) {
        res.json({
            success: false,
            message: 'Something went wrong, server error!'
        });
        console.log('Error while getting all news', error.message);
    }
};

//function for get single data
const getSingleNews = async(req, res) => {
    try {
        const data = await news.getSingle(req.params.id);
        if (!data) {
            return res.json({
                success: false,
                message: 'Post not found!'
            });
        }
        res.json({
            success: true,
            news: data
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Something went wrong, server error!'
        });
        console.log('Error while getting single news', error.message);
    }
};

//function for get data by category
const getNewsByCategory = async(req, res) => {
    try {
        const data = await news.getByCategory(req.params.category);
        if (!data) {
            return res.json({
                success: false,
                message: 'Post not found!'
            });
        }
        res.json({
            success: true,
            news: data
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Something went wrong, server error!'
        });
        console.log('Error while getting news by ctaegory', error.message);
    }
};

//export component for out put
module.exports = {
    createNews,
    getAllNews,
    getSingleNews,
    getNewsByCategory,
};