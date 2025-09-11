import React, { useRef }  from 'react'
import '../App.css';
import '../components/About';
import { Link } from 'react-router-dom';


import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} fixed-top border border-secondary`}>
  <div className="container-fluid">
    {/* <a className="navbar-brand">{props.title}</a> */}
    <Link className="nav-link active" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">{props.home}</a> */}
          <Link className="nav-link active" to="/home">{props.home}</Link>
        </li>

        <li className="nav-item">
          {/* <a className="nav-link" href="/About">About</a> */}
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contactus">Contact us</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Features
          </a>
          <ul className="dropdown-menu">
            {/* <li><a className="dropdown-item" href="/">Text</a></li> */}
            <Link className="dropdown-item" to="/TextForm">Text</Link>
            <li><a className="dropdown-item" href="/">Image</a></li>
            <li><a className="dropdown-item" href="/">File</a></li>

            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className={`btn btn-outline-danger text-${props.mode==='light'?'dark':'light'} `} id="button" type="submit">Search</button>
      </form>
      <div className={`form-check form-switch ms-5 text-${props.mode==='light'?'dark':'light'}`} style={{cursor:'pointer'}}>
  <input className="form-check-input" type="checkbox" mode={props.mode} onClick={props.toggelmode} id="flexSwitchCheckChecked" />
  <label className="form-check-label"  htmlFor="flexSwitchCheckChecked">{props.label}</label>
</div>
    </div>
  </div>
</nav>
  );
}
Navbar.prototype={
  title:PropTypes.string.isRequired
}
Navbar.defaultProps={
  title:'set title'
}
