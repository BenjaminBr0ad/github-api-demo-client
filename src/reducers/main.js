import {
  RETRIEVE_DATA,
  HANDLE_CHANGE
} from '../actions/main'

const initialState = {
  pulls: [],
  error: null,
  success: null
}

export default (state = initialState, action) => {
  switch(action.type) {

    case RETRIEVE_DATA:
    if (action.payload.error) {
      return {
        ...state,
        pulls: [],
        error: action.payload.message,
        success: null,
      }
    }
    else {
      return {
        ...state,
        pulls: action.payload,
        error: null,
        success: 'Success!'
      }
    }

    case HANDLE_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }

    default: return state

  }
}
