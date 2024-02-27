import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB' style={{paddingLeft:"3rem"}}>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
          <li  >
              <Link to='/'>Home</Link>
            </li>
            <li >
              <Link   to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Internship</Link>
            </li>
            <li>
              <Link to='/pricing'>FAQ's</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/journal'>Verify</Link>
            </li>
          </ul>
          <div className='start' style={{backgroundColor:"#697e9a"}}>
            <div className='button'>GET INTERNSHIP</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
