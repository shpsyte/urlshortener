class Api {
  _handleErrors (res) {
    if (res.statusText === 'OK') {
      return res
    } else {
      throw new Error('ErrorOnPromisse: ', res.statusText)
    }
  }

  get (url) {
    return axios
      .get(url)
      .then(res => res)
      .then(res => res.data)
  }

  post (url, data) {
    return axios.post(url, data).then(res => res.data)
  }
}
