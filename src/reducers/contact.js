/* eslint-disable import/no-anonymous-default-export */
import { TYPES } from '../actions/contact'

export const INITIAL_STATE = {
  contactList: {
    isLoading: false,
    contacts: [],
    error: ""
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.GET_CONTACT_LIST_START:
      return {
        ...state,
        contactList: {
          isLoading: true,
          error: ''
        }
      }

    case TYPES.GET_CONTACT_LIST_SUCCESS:
      return {
        ...state,
        contactList: {
          isLoading: false,
          contacts: action.payload
        }
      }

    case TYPES.GET_CONTACT_LIST_ERROR:
      return {
        ...state,
        contactList: {
          isLoading: false,
          error: action.error
        }
      }

    default:
      return state
  }
}
