import {
  FETCH_PRESENTATION_REQUEST,
  FETCH_PRESENTATION_SUCCESS,
  FETCH_PRESENTATION_FAILURE,
  UPDATE_PRESENTATION_REQUEST,
  UPDATE_PRESENTATION_SUCCESS,
  UPDATE_PRESENTATION_FAILURE
} from '../types/presentation'
import api from '../../api/presentation'

const fetchPresentationRequest = () => ({
  type: FETCH_PRESENTATION_REQUEST,
})

const fetchPresentationSuccess = (presentation) => ({
  type: FETCH_PRESENTATION_SUCCESS,
  presentation
})

const fetchPresentationFailure = () => ({
  type: FETCH_PRESENTATION_FAILURE
})

const updatePresentationRequest = () => ({
  type: UPDATE_PRESENTATION_REQUEST
})

const updatePresentationSuccess = (presentation) => ({
  type: UPDATE_PRESENTATION_SUCCESS,
  presentation
})

const updatePresentationFailure = () => ({
  type: UPDATE_PRESENTATION_FAILURE
})

const buildFormData = ({ presentation, photo }) => {
  const formData = new FormData()

  Object.keys(presentation).forEach(key => {
    formData.append(key, presentation[key])
  })

  photo && formData.append('photo', photo)

  return formData
}

export const fetchPresentation = () => (dispatch) => {
  dispatch(fetchPresentationRequest())
  api.getPresentation()
    .then(presentations => {
      dispatch(fetchPresentationSuccess(presentations))
    })
    .catch(error => {
      console.log('Error fetching presentation', error)
      dispatch(fetchPresentationFailure())
    })
}

export const updatePresentation = ({ presentation, thumbnail }) => (dispatch) => {
  dispatch(updatePresentationRequest())
  const data = buildFormData({ presentation, thumbnail })

  api.updatePresentation(presentation.id, data)
    .then(() => {
      dispatch(updatePresentationSuccess(presentation))
    })
    .catch(error => {
      console.log('Error saving presentation', error)
      dispatch(updatePresentationFailure())
    })
}
