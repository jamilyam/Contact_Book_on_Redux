import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from '../ContactApp/Header'
import ContactForm from '../ContactApp/ContactForm'
import ContactBook from '../ContactApp/ContactBook'
import ContactList from '../ContactApp/ContactList'
import ContactDetails from '../ContactApp/ContactDetails'

export default function Routes() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={ContactBook}/>
        <Route path="/contacts" exact component={ContactList}/>
        <Route path="/add-contact" exact component={ContactForm}/>
        <Route path="/contacts/:id" component={ContactDetails} />
      </Switch>
    </Router>
  )
}
