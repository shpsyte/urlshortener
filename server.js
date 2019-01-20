require('dotenv').config()
const expresss = require('express')
const expressip = require('express-ip')
const routes = require('./routes')
const mongoose = require('mongoose')
const databaseConfig = require('./src/config/database')

class App {
  constructor () {
    this.express = expresss()
    this.isDev = process.env.NODE_ENV !== 'production'
    this.database()
    this.middleware()
    this.routes()
  }

  database () {
    mongoose.connect(
      databaseConfig.uri,
      {
        useCreateIndex: true,
        useNewUrlParser: true
      }
    )
  }
  middleware () {
    this.express.use(expresss.json())
    this.express.use(expressip().getIpInfoMiddleware)
  }

  routes () {
    this.express.use(routes)
  }
}
module.exports = new App().express
