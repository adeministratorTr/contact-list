/* eslint-disable import/no-anonymous-default-export */
import { TYPES } from '../actions/contact'

export const INITIAL_STATE = {
  contactList: {
    isLoading: false,
    contacts: [],
    contactsGroupByLastName: {},
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
      const contactsGroupByLastName = action.payload
        .sort((first, second) => first.name.last.toLowerCase().localeCompare(second.name.last.toLowerCase()))
        .reduce((acc, curr) => {
          const currentLastNameCharacter = curr.name.last[0].charAt(0).toLowerCase()
          if (!acc[currentLastNameCharacter]) acc[currentLastNameCharacter] = []
          acc[currentLastNameCharacter].push(curr)
          return acc
        }, {})

      return {
        ...state,
        contactList: {
          isLoading: false,
          contactsGroupByLastName
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
