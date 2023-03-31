import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg " id='nav' >
  <div className="container-fluid">
    <Link className="navbar-brand" to="#" style={{color:' rgb(236, 182, 31)',fontSize: '40px',fontWeight:'bolder',fontFamily:'TimesNewRoman,Times New Roman,Times,Baskerville,Georgia,serif'}}>
      The LIT Press
    </Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" style={{color:'rgb(236, 182, 31)',fontSize : '25px',fontWeight:'bold',marginLeft : '20px'}}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports" style={{color:'rgb(236, 182, 31)',fontSize : '25px',marginLeft : '20px',fontWeight:'bold'}}>
           Sports
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science" style={{color:'rgb(236, 182, 31)',fontSize : '25px',marginLeft : '20px',fontWeight:'bold'}}>
            Science
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/health" style={{color:'rgb(236, 182, 31)',fontSize : '25px',marginLeft : '20px',fontWeight:'bold'}}>
            Health
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business" style={{color:'rgb(236, 182, 31)',fontSize : '25px',marginLeft : '20px',fontWeight:'bold'}}>
            Business
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment" style={{color:'rgb(236, 182, 31)',fontSize : '25px',marginLeft : '20px',fontWeight:'bold'}}>
            Entertainment
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology" style={{color:'rgb(236, 182, 31)',fontSize : '25px',marginLeft : '20px',fontWeight:'bold'}}>
           Technology
          </Link>
        </li>
       </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn" id='btn' type="submit" style={{ color:'white',fontSize : '20px'}}>
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

  )
}
