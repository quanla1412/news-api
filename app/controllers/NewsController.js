const News = require('../models/News')
const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose')

class NewsController {
    //[GET] /news
    getAll(req, res, next) {
        News.find({})
            .then((news) => 
                res.json(mutipleMongooseToObject(news)
                ))
            .catch(next);
    }

    //[POST] /news/store
    store(req, res, next) {
        const news = new News(req.body);
        news
            .save()
            .then(() => res.send('Add successfully'))
            .catch(next);

    }
} 

module.exports = new NewsController()