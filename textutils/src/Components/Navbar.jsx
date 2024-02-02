import React from 'react'
import  PropTypes  from 'react';
import { Link } from 'react-router-dom';
const Navbar = (props) => {
  return (
    
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">{props.details}</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">about</Link>
      </li>
    </ul>
    {/* <form className="form-inline my-2 my-lg-0 d-flex">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
    </form> */}
    <div className={`form-check form-switch d text-${props.mode==="light"?"dark":"light"}`} >
  <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
  </div>
</nav>
   
  )
}

export default Navbar;

Navbar.propTypes = {
  mode: PropTypes.string,
    title: PropTypes.string,
    details: PropTypes.string
  };

Navbar.defaultProps = {
  mode: "light",
  title: "Your title",
  details: "Your detail"

}