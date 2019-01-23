import {
  RETRIEVE_DATA,
  HANDLE_CHANGE
} from '../actions/main'

const initialState = {
  pulls: [],
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {

    case RETRIEVE_DATA:
    if (action.payload.error) {
      return {
        ...state,
        error: action.payload.message
      }
    }
    else {
      return {
        ...state,
        pulls: action.payload,
        error: null
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
