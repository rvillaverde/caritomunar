import {
  FETCH_PRESENTATION_REQUEST,
  FETCH_PRESENTATION_SUCCESS,
  FETCH_PRESENTATION_FAILURE,
  UPDATE_PRESENTATION_REQUEST,
  UPDATE_PRESENTATION_SUCCESS,
  UPDATE_PRESENTATION_FAILURE
} from '../types/presentation'

const presentationReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRESENTATION_REQUEST:
      return {
        ...state,
        loading: true,
      }
      
    case FETCH_PRESENTATION_SUCCESS:
      return {
        ...state,
        ...action.presentation,
        loading: false
      }

    case FETCH_PRESENTATION_FAILURE:
      return {
        ...state,
        loading: false
      }

    case UPDATE_PRESENTATION_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case UPDATE_PRESENTATION_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.presentation
      }

    case UPDATE_PRESENTATION_FAILURE:
      return {
        ...state,
        loading: false
      }

    default:
      return state;
  }
};

export default presentationReducer
