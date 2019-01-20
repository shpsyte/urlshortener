// eslint-disable-next-line no-unused-vars
class UrlServices {
  constructor () {
    // eslint-disable-next-line no-undef
    this._api = new Api()
    this.create = '/short'
    this.show = '/show'
    this.data = '/data'
    this.navigate = '/navigate'
  }

  async short (url) {
    return this._api.post(this.create, { url: url }).then(res => res)
  }

  async show (key) {
    return this._api.get(`${this.show}/${key} `, { key }).then(res => res)
  }

  async data (key) {
    return this._api.get(`${this.data}/${key} `, { key }).then(res => res)
  }

  async navigate (key) {
    return this._api.get(`${this.navigate}/${key} `, { key }).then(res => res)
  }

  // async like (id) {
  //   return this._api.post(`/like/${id}`).then(res => res)
  // }
}
