const fs = require('fs');
class News {
    //constructor function
    constructor(filename = 'news.json') {
            this.path = `./data/${filename}`
            try {
                fs.readdirSync('data')
            } catch (e) {
                fs.mkdirSync('data')
            }

            try {
                fs.accessSync(this.path);
            } catch (e) {
                fs.writeFileSync(this.path, '[]');
            }

        } //end of the constructor function

    //fucntion for generate a uniqe id
    createId() {
        return new Date().getTime().toString();
    }

    //function for create post
    async create(data, id, imageName) {
            //read data
            const totalData = JSON.parse(await fs.promises.readFile(this.path));

            const { content } = data;
            const desc = content.substr(0, 100) + '...'

            totalData.push({
                ...data,
                id,
                desc,
                thumbnail: `http://192.168.1.30:5000/${imageName}`
            });
            //write data
            await fs.promises.writeFile(this.path, JSON.stringify(totalData, null, 2));
        } //end of the create function

    //function for find all data
    async getAll() {
            const data = JSON.parse(await fs.promises.readFile(this.path));
            return data.filter(news => delete news.content);
        } //end of the getAll function

    //function for search posts from database
    async searchPosts(query) {
        try {
            const data = await this.getAll();
            return data.filter(news =>
                news.title.toLowerCase().includes(query.toLowerCase())
            );
        } catch (error) {
            console.log('Error while searching posts!');
        }
    }

    //function for find single post
    async getSingle(id) {
            //retrive all the data from database
            const data = await JSON.parse(await fs.promises.readFile(this.path));
            return data.find(news => news.id === id);
        } //end of the getSingle function

    //function for get post from category
    async getByCategory(category) {
            //retrive all the data from database
            const data = await this.getAll();
            return data.filter(news => news.category === category);
        } //end of the getByCategory function

} //end of the class

//export the class for ouptut
module.exports = News;