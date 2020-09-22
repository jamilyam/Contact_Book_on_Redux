import React from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

class ContactBook extends React.Component {
  
  render(){
    return (
      <div className = "wrapper">
      <h1>Contact App</h1> 
      <ContactForm/>
      <ContactList/>
      </div> 
    );
  }
}

export default ContactBook;
