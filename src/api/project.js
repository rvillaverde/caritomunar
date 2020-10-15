import ApiClient from './apiClient'

const api = new ApiClient(process.env.API_ENDPOINT + 'api/', false)

const getProjects = () => {
  return api
    .get({
      endpoint: 'projects',
    })
    .then((res) => res.data)
    .catch(error => {
      throw new Error(error.response.data.error.message)
    })
}

const findProject = (id) => {
  return api
    .get({
      endpoint: `projects/${ id }`,
    })
    .then((res) => res.data)
    .catch(error => {
      throw new Error(error.response.data.error.message)
    })
}

const createProject = (data) => {
  return api
    .upload({
      endpoint: 'projects',
      data
    })
    .then((res) => res.data)
    .catch(error => {
      throw new Error(error.response.data.error.message)
    })
}

const updateProject = (id, data) => {
  return api
    .upload({
      endpoint: `projects/${ id }`,
      data,
      type: 'put'
    })
    .then((res) => res.data)
    .catch(error => {
      throw new Error(error.response.data.error.message)
    })
}

export default {
  getProjects,
  findProject,
  createProject,
  updateProject
}
