require('dotenv').config()
const express = require('express')
const expressip = require('express-ip')
const routes = require('./routes')
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose')
const databaseConfig = require('./src/config/database')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'
    this.database()
    this.client()
    this.middleware()
    this.routes()
  }

  client () {
    this.express.set('clientPath', path.join(__dirname, 'src', 'client'))
    this.express.use(express.static(this.express.get('clientPath')))

    this.express.use(function (req, res, next) {
      res.header('Access-Control-Allow-Origin', '*')
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      )
      next()
    })
    this.express.use(cors())

    this.express.use(
      express.static(path.resolve(__dirname, 'src', 'client', 'public'))
    )
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
    this.express.use(express.json())
    this.express.use(expressip().getIpInfoMiddleware)
  }

  routes () {
    this.express.use(routes)
  }
}
module.exports = new App().express
