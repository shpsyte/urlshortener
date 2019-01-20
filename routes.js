const express = require('express')
const routes = express.Router()
const UrlShortenerController = require('./src/app/controllers/UrlShortenerController')
const UrlStatisticsController = require('./src/app/controllers/UrlStatisticController')

routes.post('/short/:key*?', UrlShortenerController.store)
routes.get('/show/:key*?', UrlShortenerController.show)
routes.get('/data/:key*?', UrlStatisticsController.show)

module.exports = routes
