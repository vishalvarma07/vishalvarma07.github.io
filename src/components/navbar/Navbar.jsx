import { React, useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = ({Menu}) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <p>VARMA</p>
          <p>Portfolio</p>
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color = '#fff' size = {27} onClick = {() => setToggleMenu(false)}/>
          : <RiMenu3Line color = '#fff' size = {27} onClick = {() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu/>
            </div>
          </div>
        )}
      </div>
      </div>
  )
}

export default Navbar