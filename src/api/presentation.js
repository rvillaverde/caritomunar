import ApiClient from './apiClient'

const api = new ApiClient(process.env.API_ENDPOINT + 'api/', false)

const getPresentation = () => {
  return api
    .get({
      endpoint: 'presentation',
    })
    .then((res) => res.data)
    .catch(error => {
      throw new Error(error.response.data.error.message)
    })
}

const updatePresentation = (data) => {
  return api
    .upload({
      endpoint: `presentation`,
      data,
      type: 'put'
    })
    .then((res) => res.data)
    .catch(error => {
      throw new Error(error.response.data.error.message)
    })
}

export default {
  getPresentation,
  updatePresentation
}
