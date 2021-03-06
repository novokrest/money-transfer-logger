import _ from 'lodash'
import dateFormat from 'dateformat'

export default {
  getTransfers () {
    return this._get('transfers')
      .then(res => res.json())
      .then(data => {
        return _.map(data._embedded.transfers, transfer => ({
          id: transfer.id,
          amount: transfer.amount,
          source: transfer.source,
          destination: transfer.destination,
          createdDt: dateFormat(Date.parse(transfer.createdDt), 'yyyy-mm-dd HH:MM'),
          updatedDt: dateFormat(Date.parse(transfer.updatedDt), 'yyyy-mm-dd HH:MM'),
          done: transfer.status === 'SUCCESS'
        }))
      })
  },

  postTransfer (data) {
    return this._post('transfers', data)
  },

  deleteTransfer (id) {
    return this._delete(`transfers/${id}`)
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

  _delete (relativeUrl) {
    return fetch(this._buildUrl(relativeUrl), {
      method: 'delete'
    })
  },

  _buildUrl (relativeUrl) {
    return `/api/${relativeUrl}`
  }
}
