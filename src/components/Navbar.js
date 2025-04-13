import React from 'react'
import { Link } from 'react-router-dom';  

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AboutUs">About</Link>
              </li>
            </ul>
            <div className="d-flex">
              <div className={`bg-primary rounded-circle border border-black mx-1`} onClick={()=>{props.toggleTheme('primary')}} style={{height: '20px', width: '20px', cursor: 'pointer'}}></div>
              <div className={`bg-success rounded-circle border border-black mx-1`} onClick={()=>{props.toggleTheme('success')}} style={{height: '20px', width: '20px', cursor: 'pointer'}}></div>
              <div className={`bg-danger rounded-circle border border-black mx-1`} onClick={()=>{props.toggleTheme('danger')}} style={{height: '20px', width: '20px', cursor: 'pointer'}}></div>
              <div className={`bg-dark rounded-circle border border-white mx-1`} onClick={()=>{props.toggleTheme('dark')}} style={{height: '20px', width: '20px', cursor: 'pointer'}}></div>
              <div className={`bg-light rounded-circle border border-black mx-1`} onClick={()=>{props.toggleTheme('light')}} style={{height: '20px', width: '20px', cursor: 'pointer'}}></div>
              <div className={`bg-warning rounded-circle border border-black mx-1`} onClick={()=>{props.toggleTheme('warning')}} style={{height: '20px', width: '20px', cursor: 'pointer'}}></div>
            </div>
            {/* <div className={`form-check form-switch text-${props.theme==='light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleTheme}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" onClick={props.toggleTheme}>Enable {props.theme==='light'?'dark':'light'}Mode</label>
            </div> */}
          </div>
        </div>
      </nav>
  )
}
