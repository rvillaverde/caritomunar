import {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAILURE,
  UPDATE_PROJECT_REQUEST,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAILURE
} from '../types/project'
import api from '../../api/project'

const fetchProjectsRequest = () => ({
  type: FETCH_PROJECTS_REQUEST,
})

const fetchProjectsSuccess = (projects) => ({
  type: FETCH_PROJECTS_SUCCESS,
  projects
})

const fetchProjectsFailure = () => ({
  type: FETCH_PROJECTS_FAILURE
})

const createProjectRequest = () => ({
  type: CREATE_PROJECT_REQUEST
})

const createProjectSuccess = (project) => ({
  type: CREATE_PROJECT_SUCCESS,
  project
})

const createProjectFailure = () => ({
  type: CREATE_PROJECT_FAILURE
})

const updateProjectRequest = () => ({
  type: UPDATE_PROJECT_REQUEST
})

const updateProjectSuccess = (project) => ({
  type: UPDATE_PROJECT_SUCCESS,
  project
})

const updateProjectFailure = () => ({
  type: UPDATE_PROJECT_FAILURE
})

const buildFormData = ({ project, thumbnail }) => {
  const formData = new FormData()

  Object.keys(project).forEach(key => {
    formData.append(key, project[key])
  })

  thumbnail && formData.append('thumbnail', thumbnail)
  project.id && formData.append('id', project.id)

  return formData
}

export const fetchProjects = () => (dispatch) => {
  dispatch(fetchProjectsRequest())
  api.getProjects()
    .then(projects => {
      dispatch(fetchProjectsSuccess(projects))
    })
    .catch(error => {
      console.log('Error fetching projects', error)
      dispatch(fetchProjectsFailure())
    })
}

export const createProject = ({ project, thumbnail }) => (dispatch) => {
  console.log('create project', project, thumbnail)
  dispatch(createProjectRequest())
  const data = buildFormData({ project, thumbnail })

  api.createProject(data)
    .then(project => {
      dispatch(createProjectSuccess(project))
    })
    .catch(error => {
      console.log('Error saving project', error)
      dispatch(createProjectFailure())
    })
}

export const updateProject = ({ project, thumbnail }) => (dispatch) => {
  dispatch(updateProjectRequest())
  const data = buildFormData({ project, thumbnail })

  api.updateProject(project.id, data)
    .then(() => {
      dispatch(updateProjectSuccess(project))
    })
    .catch(error => {
      console.log('Error saving project', error)
      dispatch(updateProjectFailure())
    })
}
