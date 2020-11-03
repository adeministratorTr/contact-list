import { getContactListService } from '../services/contact'

export const TYPES = {
  GET_CONTACT_LIST_START: 'CONTACT/GET_CONTACT_LIST_START',
  GET_CONTACT_LIST_SUCCESS: 'CONTACT/GET_CONTACT_LIST_SUCCESS',
  GET_CONTACT_LIST_ERROR: 'CONTACT/GET_CONTACT_LIST_ERROR'
}

export const fetchContactList = ({ limit }) => dispatch => {
  dispatch({
    type: TYPES.GET_CONTACT_LIST_START
  })

  return getContactListService({ limit })
    .then(response => {
      response.results && response.results.length > 0 &&
        dispatch({
          type: TYPES.GET_CONTACT_LIST_SUCCESS,
          payload: response.results
        })

      !response.results &&
        dispatch({
          type: TYPES.GET_CONTACT_LIST_ERROR,
          error: response
        })
    })
    .catch(error => {
      dispatch({
        type: TYPES.GET_CONTACT_LIST_ERROR,
        error
      })
    })
}
