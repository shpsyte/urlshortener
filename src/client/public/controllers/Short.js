/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
class ShortController {
  constructor () {
    this._url = 'https://appshorturl.herokuapp.com/'
    this._urlServices = new UrlServices()
    // this._postView = new PostView()
    this._element = document.querySelector('.result')
    this._spanEl = document.querySelector('.urlName')

    this._elementStats = document.querySelector('.stats')
    this._spanStatsEl = document.querySelector('.urlNameStats')

    this._elementNav = document.querySelector('.direct')
    this._spanNavEl = document.querySelector('.urlNameNav')

    this._btn = document.querySelector('#send')
    this._url = document.querySelector('#url')
    this._progress = document.querySelector('#progress')
    this._init()
  }

  _init () {
    this._btn.addEventListener('click', e => {
      e.preventDefault()
      this.store()
    })
  }

  async store () {
    const url = document.querySelector('#url').value
    if (!url) {
      alert('Url is Required!')
    }
    this._progress.style.display = 'block'
    this._urlServices.short(url).then(data => {
      this.showUrl(data)
      this._url.value = ''
      this._progress.style.display = 'none'
      var snackbarContainer = document.querySelector('#demo-snackbar-example')

      var dataMsg = {
        message: 'Success!',
        timeout: 2000
      }
      snackbarContainer.MaterialSnackbar.showSnackbar(dataMsg)
    })
  }

  async showUrl (post) {
    if (post === 'URL is Invalid') {
      this._element.href = '#'
      this._spanEl.innerHTML = 'URL is Invalid!'
    } else {
      this._element.href = `/show/${post.keyOfUrl}`
      this._spanEl.innerHTML = `url: ${post.keyOfUrl} `

      this._elementStats.href = `/data/${post.keyOfUrl}`
      this._spanStatsEl.innerHTML = `Show Statistics: ${post.keyOfUrl} `

      let navigate = post.completeUrl

      this._elementNav.href = `/navigate/${post.keyOfUrl}`
      this._spanNavEl.innerHTML = `Direct Navigate: ${post.keyOfUrl} `
    }
  }
}
