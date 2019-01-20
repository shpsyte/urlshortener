const UrlShortener = require('../models/UrlShortener')
const UrlStatistic = require('../models/UrlStatistic')
const randomstring = require('randomstring')
const urlValid = require('../validators/validUrl')

class UrlShortenerController {
  async store (req, res) {
    let urlKey = req.params.key
    let { url } = req.body
    let completeUrl = urlKey || url
    let data = { completeUrl: '', keyOfUrl: '' }

    data.completeUrl = completeUrl
    data.keyOfUrl = randomstring.generate(7)

    if (!urlValid(data.completeUrl)) {
      return res.status(400).json({ error: 'Url is invalid!' })
    }

    const urlshortener = await UrlShortener.create(data)
    return res.json(urlshortener)
  }

  async show (req, res) {
    const parameterKey = req.params.key
    const { key } = req.body
    const keyToFind = parameterKey || key

    const data = await UrlShortener.findOne({ keyOfUrl: keyToFind })

    if (!data) {
      return res.status(400).json({ error: 'Not Found, please verify the URL' })
    }

    // if find, so We need update statistics
    data.set({
      qtUse: (parseInt(data.qtUse) || 0) + 1
    })
    await data.save()

    const ipInfo = req.ipInfo
    let statistc = {
      keyOfUrl: keyToFind,
      fromIp: req.connection.remoteAddress,
      fromCity: ipInfo.city || 'localhost',
      fromCountry: ipInfo.country || 'localhost'
    }
    await UrlStatistic.create(statistc)

    return res.json(data)
  }

  async navigate (req, res, next) {
    const parameterKey = req.params.key
    const { key } = req.body
    const keyToFind = parameterKey || key

    const data = await UrlShortener.findOne({ keyOfUrl: keyToFind })

    if (!data) {
      return res.status(400).json({ error: 'Not Found, please verify the URL' })
    }

    const ipInfo = req.ipInfo
    let statistc = {
      keyOfUrl: keyToFind,
      fromIp: req.connection.remoteAddress,
      fromCity: ipInfo.city || 'localhost',
      fromCountry: ipInfo.country || 'localhost'
    }

    await UrlStatistic.create(statistc).then(a => {
      // let url = ''
      // if (!/^https?:\/\//i.test(data.completeUrl)) {
      //   url = 'http://' + data.completeUrl
      // }

      res.redirect(data.completeUrl)

      // res.writeHead(301, {
      //   Location: data.completeUrl
      // })
      // res.end()
    })
  }
}
module.exports = new UrlShortenerController()
