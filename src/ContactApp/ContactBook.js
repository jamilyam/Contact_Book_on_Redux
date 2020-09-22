import React from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

class ContactBook extends React.Component {
  
  editContact=({id, name, lastName, number})=> {
    const index = this.state.contacts.findIndex((item)=>{
      return item.id === id;
    });
    const contacts= [...this.state.contacts];
    const item = {...contacts[index]};
    item.name = name;
    item.lastName = lastName;
    item.number=number;
    contacts[index]=item;
    this.setState({contacts})
  }

  removeContact=(id)=> {
    const contacts = this.state.contacts.filter(contact => contact.id !== id)
    this.setState({contacts});
  }
  render(){
    return (
      <div className = "wrapper">
      <h1>Contact App</h1> 
      <ContactForm/>
      <ContactList 
        editContact={this.editContact}
        removeContact={this.removeContact}
      />
      </div> 
    );
  }
}

export default ContactBook;
