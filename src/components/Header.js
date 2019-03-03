import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-light fixed-top py-4 custom-header">
          <div className="container">
              <a href='#' className="navbar-brand">
                  <h3 className="d-inline align-middle color--white">Noah Bartel</h3>
              </a>

              <div className="collapse navbar-collapse" id="navbarTogglerContent">
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                          <a href="#home" className="nav-link link--highlight">Home</a>
                      </li>
                      <li className="nav-item ">
                          <a href="#about" className="nav-link link--highlight">Filmography</a>
                      </li>
                      <li className="nav-item">
                          <a href="#films" className="nav-link link--highlight">2D Work</a>
                      </li>
                      <li className="nav-item">
                          <a href="#films" className="nav-link link--highlight">About</a>
                      </li>
                      <li className="nav-item">
                          <a href="#films" className="nav-link link--highlight">Contact</a>
                      </li>
                  </ul>
              </div>

              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerContent" aria-controls="navbarTogglerContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
          </div>
        </nav>
      </div>
    )
  }
}
