import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from "./constants"
import { combineReducers } from "redux";

const INIT_CONTACT_STATE={
  contacts:[],
}

const ContactReducer=(state=INIT_CONTACT_STATE,action)=>{
  let contacts = [...state.contacts]
  switch (action.type){
    case ADD_CONTACT:
      contacts.push(action.payload)
      return {
        ...state,
        contacts
      };
    case DELETE_CONTACT:
      contacts = contacts.filter(item=>item.id!==action.payload);
      return {
        ...state,
        contacts
      };
    case EDIT_CONTACT:
      contacts = contacts.map(item=>
        (item.id===action.payload.id) ? action.payload : item
      )
      return {
        ...state,
        contacts
      };
    default:
      return state      
  }
}

export default combineReducers({
  contact: ContactReducer
})