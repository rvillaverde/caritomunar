import axios from 'axios'

export default class ApiClient {
  constructor (baseURL, auth = true) {
    this.baseURL = baseURL
    this.httpClient = axios.create({ baseURL })
  }

  delete ({ endpoint, params, options = {} }) {
    return this.httpClient.delete(endpoint, {
      params,
      ...options,
    })
  }

  get ({ endpoint, params, options = {} }) {
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

  postUrlencoded ({ endpoint, data, options = {} }) {
    return this.httpClient.post(endpoint, data, {
      ...options,
      headers: {
        ...options.headers,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
  }

  upload ({ endpoint, data, options = {}, type = 'post' }) {
    console.log('api client - upload', data)
    // for (var pair of data.project.entries()) {
    //   console.log(pair[0]+ ': ' + pair[1])
    // }
    const method = type === 'put' ?
      this.httpClient.put :
      this.httpClient.post

    return method(endpoint, data, {
      ...options,
      headers: {
        ...options.headers,
        'Content-Type': 'multipart/form-data',
      },
    })
  }
}
