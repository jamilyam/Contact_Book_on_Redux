import { ADD_CONTACT } from "./constants"
import { DELETE_CONTACT } from "./constants"
import { EDIT_CONTACT } from "./constants"

export const addContact=(contact)=>{
  return{
    type:ADD_CONTACT,
    payload:contact
  }
}

export const deleteContact=(id)=>{
  return{
    type:DELETE_CONTACT,
    payload:id
  }
}

export const editContact=(contact)=>{
  return{
    type:EDIT_CONTACT,
    payload:contact
  }
}