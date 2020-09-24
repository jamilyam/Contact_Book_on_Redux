import React, {useEffect} from 'react';
import ContactItem from './ContactItem';
import {useSelector,useDispatch} from 'react-redux'
import {fetchData} from '../redux/actions';
import { useLocation } from 'react-router-dom';

function ContactList() {
  const state = useSelector((state) => {
    return state.contact
  })

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchData())
  }, [location])

  if(!state?.contacts?.length){
    return <h2>Your Contact List is empty</h2>
  }

  return ( 
     <div>
      {state.contacts.map((item)=>{
        return(
          <ContactItem 
            item={item}
            key={item.id}
          />
        ) 
      })}
    </div>      
  )
}
export default ContactList;