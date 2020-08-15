import ApiClient from "./apiClient"

const api = new ApiClient(process.env.API_ENDPOINT + 'api/users', false)

const createAdmin = (user) => {
  return api
    .post({
      endpoint: 'create-admin',
      data: {
        user
      }
    })
    .then((res) => res.data)
    .catch(error => {
      throw new Error(error.response.data.error.message)
    })
}

export default {
  createAdmin
}
