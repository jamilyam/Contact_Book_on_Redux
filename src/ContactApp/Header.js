import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Contact App</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contacts">Contacts</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/add-contact">Add contact</Link>
        </li>
      </ul>
    </nav>
  )
}
