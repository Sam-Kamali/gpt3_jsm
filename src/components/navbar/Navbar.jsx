import React from 'react'
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import './navbar.css';
//naming the classNames {css naming convention} BEM --> Block Element Modifier
const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className="gp3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>

      </div>
    </div>
  )
}

export default Navbar