import React from 'react';
import ContactItem from './ContactItem';
import {useSelector} from 'react-redux'

function ContactList(props){
  const state = useSelector((state)=>{
    return state.contact
  })

  return(
    <div>
      {state.contacts.map((item)=>{
        return(
          <ContactItem 
            item={item}
            key={item.id}
            editContact={props.editContact}
            removeContact={props.removeContact}
          />
        ) 
      })}
    </div>
  )
}
export default ContactList;
