export default {
  getTransfers () {
    return this._get('transfers/list')
      .then(res => res.json())
      .then(data => {
        return data.result.transfers
      })
  },

  postTransfer (data) {
    return new Promise(resolve => setTimeout(resolve, 1000))
      .then(() => this._post('transfers/add', data))
  },

  _get (relativeUrl) {
    return fetch(this._buildUrl(relativeUrl), {
      method: 'get',
      headers: {
        'Accept': 'application/json'
      }
    })
  },

  _post (relativeUrl, data) {
    return fetch(this._buildUrl(relativeUrl), {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  },

  _buildUrl (relativeUrl) {
    return `/api/${relativeUrl}`
  }
}
