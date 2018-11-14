import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light fixed-top py-4 custom-header">
        <div className="container">
            <a href='#' className="navbar-brand">
                <h3 className="d-inline align-middle color--white">Noah Bartell</h3>
            </a>

            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="#home" className="nav-link link--highlight">Home</a>
                    </li>
                    <li className="nav-item ">
                        <a href="#about" className="nav-link link--highlight">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#films" className="nav-link link--highlight">Filmography</a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    )
  }
}
