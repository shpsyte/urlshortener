const UrlStatistic = require('../models/UrlStatistic')

class UrlStatisticsController {
  async store (req, res) {
    const data = await UrlStatistic.create(req.body)

    return res.json(data)
  }

  async show (req, res) {
    const parameterKey = req.params.key
    const { key } = req.body
    const keyToFind = parameterKey || key

    const data = await UrlStatistic.find({ keyOfUrl: keyToFind })

    return res.json(data)
  }
}
module.exports = new UrlStatisticsController()
