import {
  FETCH_DATA,
  FETCH_DATA_FAILED,
  FETCH_DATA_SUCCESS
} from "./constants"
import {
  combineReducers
} from "redux";

const INIT_CONTACT_STATE = {
  contacts: [],
  loading: false,
  error: null
}

const ContactReducer = (state = INIT_CONTACT_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        loading: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
          loading: false,
          error: null
      };
    case FETCH_DATA_FAILED:
      return {
        ...state,
        contacts: [],
          loading: false,
          error: action.payload
      };
    default:
      return state
  }
}

export default combineReducers({
  contact: ContactReducer
})