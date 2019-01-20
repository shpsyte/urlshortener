const moongose = require('mongoose')

const URLStatisticSchema = new moongose.Schema({
  keyOfUrl: {
    type: String,
    required: true
  },
  fromIp: {
    type: String
  },
  fromCity: {
    type: String
  },
  fromCountry: {
    type: String
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = moongose.model('URLStatistic', URLStatisticSchema)
