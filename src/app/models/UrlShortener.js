const moongose = require('mongoose')

const UrlShortenerSchema = new moongose.Schema({
  completeUrl: {
    type: String,
    required: true
  },
  qtUse: {
    type: Number,
    default: 0
  },
  keyOfUrl: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = moongose.model('UrlShortener', UrlShortenerSchema)
