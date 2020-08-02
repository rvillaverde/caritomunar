import axios from 'axios'

export default class ApiClient {
  constructor (baseURL, auth = true) {
    this.baseURL = baseURL
    this.httpClient = axios.create({ baseURL })
  }

  delete ({ endpoint, params, options }) {
    return this.httpClient.delete(endpoint, {
      params,
      ...options,
    })
  }

  get ({ endpoint, params, options }) {
    return this.httpClient.get(endpoint, {
      params,
      ...options,
    })
  }

  post ({ endpoint, data, options }) {
    return this.httpClient.post(endpoint, data, options)
  }

  put ({ endpoint, data, options }) {
    return this.httpClient.put(endpoint, data, options)
  }

  postUrlencoded ({ endpoint, data, options }) {
    options = options || {}

    return this.httpClient.post(endpoint, data, {
      ...options,
      headers: {
        ...options.headers,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
  }

  upload ({ endpoint, data, options }) {
    options = options || {}

    return this.httpClient.post(endpoint, data, {
      ...options,
      headers: {
        'Content-Type': 'multipart/form-data',
        ...options.headers,
      },
    })
  }
}
