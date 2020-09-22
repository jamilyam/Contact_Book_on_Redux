import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from "./constants"
import { combineReducers } from "redux";

const INIT_CONTACT_STATE={
  contacts:[],
}

const ContactReducer=(state=INIT_CONTACT_STATE,action)=>{
  switch (action.type){
    case ADD_CONTACT:
      return {
        ...state,
        contacts:[
          ...state.contacts,
          action.payload
        ]
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts:[
          ...state.contacts,
          action.payload
        ]
      };
    case EDIT_CONTACT:
      return {
        ...state,
        contacts:[
          ...state.contacts,
          action.payload
        ]
      };
    default:
      return state      
  }
}

export default combineReducers({
  contact: ContactReducer
})