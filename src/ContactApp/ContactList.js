import React, {useEffect} from 'react';
import ContactItem from './ContactItem';
import {useSelector,useDispatch} from 'react-redux'
import {fetchData} from '../redux/actions';

function ContactList() {
  const state = useSelector((state) => {
    return state.contact
  })

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

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