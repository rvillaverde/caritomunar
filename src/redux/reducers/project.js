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

const INITIAL_STATE = {
  projects: [],
}

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PROJECTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
      
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.projects,
        loading: false
      }

    case FETCH_PROJECTS_FAILURE:
      return {
        ...state,
        loading: false
      }

    case CREATE_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: [
          ...state.projects,
          action.project
        ]
      }

    case CREATE_PROJECT_FAILURE:
      return {
        ...state,
        loading: false
      }

    case UPDATE_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case UPDATE_PROJECT_SUCCESS:
      console.log('UPDATE_PROJECT_SUCCESS', action)
      return {
        ...state,
        loading: false,
        projects: [
          ...state.projects.map(p => {
            return p.id === action.project.id ?
              action.project : p
            }
          )
        ]
      }

    case UPDATE_PROJECT_FAILURE:
      return {
        ...state,
        loading: false
      }

    default:
      return state;
  }
};

export default projectReducer
